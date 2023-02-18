<script lang="ts">
  export let type: string;
  export let placeholder: string;
</script>

<div class="text-input">
  <slot />
  <input class="text-input-input" {type} {placeholder} />
</div>

<style>
  .text-input {
    display: flex;
    padding: 6px 20px;
    background: #212121;
    border-radius: 20px;
    border: 1px solid #444;
    gap: 5px;
  }
  .text-input-input {
    background: 0;
    outline: 0;
    border: 0;
  }
  .text-input-input::placeholder {
    font-size: 16px;
  }
</style>
