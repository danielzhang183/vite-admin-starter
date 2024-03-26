<script setup lang="ts">
const ui = useUiStore()
</script>

<template>
  <nav h-16 px-4 text-lg border="b base" flex="~ items-center gap-2">
    <button btn-icon @click="ui.toggleAside">
      <div :class="ui.isCollapse ? 'i-ph-caret-double-right' : 'i-ph-caret-double-left'" />
    </button>

    <div flex-auto />

    <button btn-icon @click="toggleCommandPanel">
      <div i-ph-command-duotone />
    </button>

    <SettingsScreenFull />

    <button btn-icon title="Theme Toggle" @click="toggleDark">
      <div i-ph-sun-duotone dark:i-ph-moon-duotone />
    </button>

    <SettingsThemeColors />

    <SettingsBuildInfo hidden md:block />

    <a
      hidden md:block btn-icon
      rel="noreferrer"
      href="https://github.com/danielzhang183/vite-admin-starter"
      target="_blank"
      title="GitHub"
    >
      <div i-carbon-logo-github />
    </a>

    <NavUser />
  </nav>
</template>
