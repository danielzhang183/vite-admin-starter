<script setup lang="ts">
const user = ref(teamMembers[0])
</script>

<template>
  <VMenu>
    <div class="group flex items-center gap-1">
      <a :href="`https://github.com/sponsors/${user.github}`" target="_blank" rounded-full transition duration-300 border="~ transparent" hover="scale-105 border-primary">
        <img :src="`/avatars/${user.github}-100x100.png`" :alt="user.display" h-7 w-7 rounded-full height="60" width="60">
      </a>
      <span class="hidden text-sm md:block">{{ user.display }}</span>
      <i class="i-ph-caret-down-fill text-sm duration-300 group-hover:rotate-180" />
    </div>

    <template #popper>
      123
    </template>
  </VMenu>
</template>
