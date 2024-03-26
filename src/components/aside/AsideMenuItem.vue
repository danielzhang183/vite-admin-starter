<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

const props = withDefaults(defineProps<{
  item: RouteRecordRaw & { hidden?: boolean }
  level?: number
}>(), {
  level: 0,
})

const ui = useUiStore()

const resolved = computed(() => {
  if (props.item.children?.length === 1)
    return props.item.children[0]
  return props.item
})

const paddingLeft = computed(() => `${1.25 + props.level * 1.25}rem`)
</script>

<template>
  <div class="aside-menu-item">
    <template v-if="resolved.children?.length">
      <details :open="$route.path.includes(resolved.path) && !ui.isCollapse">
        <summary>
          <div
            flex="~ gap-1 items-center" h-14 cursor-pointer select-none pr-4
            hover="bg-active"
            :style="{ paddingLeft }"
          >
            <div i-ph-folder-simple-duotone vertical-middle />
            <template v-if="!ui.isCollapse">
              <div ml1 flex-auto>
                {{ resolved.path }}
              </div>
              <div class="caret" i-ph-caret-right-duotone h-14 text-sm op50 transition duration-400 />
            </template>
          </div>
        </summary>
        <div v-if="resolved.children?.length">
          <AsideMenuItem
            v-for="child in resolved.children"
            :key="child.path"
            :item="child"
            :level="props.level + 1"
          />
        </div>
      </details>
    </template>

    <RouterLink
      v-else
      :to="`${resolved!.name as string}`"
      h-14 px-1
      :style="{ paddingLeft }"
      :class="{ active: resolved.name === $route.path }"
      flex="~ gap-1 items-center"
      hover="bg-active"
    >
      <div i-ph-file-duotone />
      <template v-if="!ui.isCollapse">
        <div ml1 flex-auto>
          {{ resolved.path }}
        </div>
      </template>
    </RouterLink>
  </div>
</template>

<style>
.aside-menu-item details summary {
  list-style-type: none;
}

.aside-menu-item details[open] .caret {
  transform: rotate(90deg);
}

.active {
  --at-apply: 'text-primary bg-primary-fade';
}

.aside-menu-item .active {
  --at-apply: hover:none;
}
</style>
