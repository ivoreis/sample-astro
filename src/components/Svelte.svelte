<script lang="ts">
  export let count: number = 0;
</script>

<div>Hey from Svelte {count}</div>
<slot />
<button on:click={() => count++}>Going up!</button>
