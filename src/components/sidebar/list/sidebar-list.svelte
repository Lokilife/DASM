<script>
  import Collapsible from "../../collapsible/collapsible.svelte";
  export let pages;
</script>

<ul>
  {#each pages as item}
    <li>
      {#if item.pages}
        <Collapsible>
          <div slot="title">
            ◤ {item.title}
          </div>
          <div slot="content">
            <svelte:self pages={item.pages} />
          </div>
        </Collapsible>
      {:else}
        <div class="flex">
          <a href={item.url}>
            {item.title}
          </a>
        </div>
      {/if}
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding-left: 10px;
  }

  div a:hover,
  div[slot="title"]:hover {
    background: #424242;
    border-radius: 6px;
  }
  div a,
  div[slot="title"] {
    padding: 5px 10px;
    display: flex;
    width: 100%;
  }
</style>
