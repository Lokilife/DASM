<script>
  import Collapsible from "./collapsible.svelte";
  export let pages;
</script>

<ul>
  {#each pages as item}
    <li>
      {#if item.pages}
        <Collapsible>
          <div slot="title">
            {item.title}
          </div>
          <div slot="content">
            <svelte:self pages={item.pages} />
          </div>
        </Collapsible>
      {:else}
        <div>
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
    padding-left: 8px;
  }
  div a:hover {
    background: #424242;
    border-radius: 6px;
  }
  div a {
    padding: 5px 10px;
    display: block;
    width: 100%;
  }
</style>
