<script>
  export let options = [];
  export let displayFunction = (a) => a;
  export let index = 0;
  export let value;

  $: {
    value = options[index];
  }
</script>

<select bind:value={index} class="select">
  {#each options as option, i}
    <option value={i}>{displayFunction(option)}</option>
  {/each}
</select>

<style>
  .select {
    background: #212121;
    border: 0;
  }
</style>
