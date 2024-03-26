import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  const isCollapse = ref(false)

  const asideWidth = computed(() => {
    return isCollapse.value
      ? '54px'
      : '220px'
  })

  const asidePadding = computed(() => {
    return isCollapse.value
      ? '54px'
      : '220px'
  })

  function toggleAside() {
    isCollapse.value = !isCollapse.value
  }

  return {
    isCollapse,
    asideWidth,
    asidePadding,
    toggleAside,
  }
})
