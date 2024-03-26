<script setup lang="ts">
const ui = useUiStore()
</script>

<template>
  <div h-16 px-2 flex="~ items-center justify-center">
    <div i-carbon-campsite text-2xl />
    <div v-if="!ui.isCollapse" ml-3 text-xl>
      Vite
      <sup class="text-xs text-primary italic opacity-75">Admin</sup>
    </div>
  </div>
</template>
