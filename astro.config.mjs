import { defineConfig } from 'astro/config';
import rehypePrettyCode from "rehype-pretty-code";
import node from '@astrojs/node';
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
const prettyCodeOptions = {
  theme: "github-dark",
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{
        type: "text",
        value: " "
      }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
  tokensMap: {}
};

export default defineConfig({
  markdown: {
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  server: {
    port: 3333
  },
  integrations: [svelte(), mdx()]
});