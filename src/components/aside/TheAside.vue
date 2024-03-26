<script setup lang="ts">
import { routes } from 'vue-router/auto-routes'

const ui = useUiStore()
</script>

<template>
  <div class="fixed left-0 top-0 z-1 h-screen overflow-hidden bg-base" :style="{ width: ui.asideWidth }">
    <AsideTitle />
    <Transition name="nav-dropdown">
      <div
        flex="~ col"
        border="b base"
        max-h-full bg-base backdrop-blur-10 important-bg-opacity-80
      >
        <AsideMenuItem v-for="item in routes" :key="item.path" :item="item" />
      </div>
    </Transition>
  </div>
</template>

<style>
.nav-dropdown-enter-active {
  transition: all 0.1s ease-out;
}

.nav-dropdown-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.nav-dropdown-enter-from,
.nav-dropdown-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
