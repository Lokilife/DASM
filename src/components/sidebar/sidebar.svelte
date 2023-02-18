<script lang="ts">
  import type { Page } from "../../pages/types";
  import SidebarList from "./list/sidebar-list.svelte";

  import { language } from "../../stores/language";
  import { pages } from "../../pages/docs/pages";

  let filteredPages = filterPages(pages);

  language.listen(() => {
    filteredPages = filterPages(pages);
  });

  function filterPages(pages: Page[]) {
    return pages
      .map((page) => {
        return { ...page };
      })
      .filter((page) => {
        if (page.pages) {
          page.pages = filterPages(page.pages!);
        }
        if (page.lang || page.lang == 0) {
          return page.lang == language.get();
        }
        return true;
      });
  }
</script>

<div class="list-wrapper">
  <SidebarList pages={filteredPages} />
</div>

<style>
  .list-wrapper {
    width: 200px;
    max-width: 200px;
    border-right: 1px solid #757575;
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-inline: 30px;
  }
</style>
