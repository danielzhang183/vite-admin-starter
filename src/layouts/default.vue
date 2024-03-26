<script setup lang="ts">
const ui = useUiStore()
</script>

<template>
  <div
    class="box-border h-full w-full overflow-hidden"
    :style="{ paddingLeft: ui.asidePadding }"
  >
    <TheAside />
    <main class="h-full w-full">
      <TheNav />
      <RouterView />
      <!-- <Footer /> -->
    </main>
  </div>
</template>
