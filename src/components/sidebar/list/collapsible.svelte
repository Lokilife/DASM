<script>
  let expanded = true;
</script>

<div class="flex flex-column gap-10">
  <button aria-expanded={expanded} class="title">
    <!-- on:click={() => (expanded = !expanded)} -->
    {#if expanded}
      ◣
    {:else}
      ◤
    {/if}
    <slot name="title" />
  </button>
  <div hidden={!expanded}>
    <slot name="content" />
  </div>
</div>

<style>
  button {
    background: 0;
    border: 0;
    font-size: 16px;
  }
  .title {
    display: flex;
    gap: 10px;
    cursor: pointer;
  }
</style>
