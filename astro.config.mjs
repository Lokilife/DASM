import { defineConfig } from 'astro/config';
import rehypePrettyCode from "rehype-pretty-code";
import node from '@astrojs/node';
import svelte from "@astrojs/svelte";
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
// https://astro.build/config

// https://astro.build/config
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
  integrations: [svelte()]
});