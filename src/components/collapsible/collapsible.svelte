<script>
  export let expanded = true;
</script>

<div class="flex flex-column gap-10">
  <button
    aria-expanded={expanded}
    class="flex"
    on:click={() => (expanded = !expanded)}
  >
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
    cursor: pointer;
  }
</style>
