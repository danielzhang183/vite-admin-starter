<script setup lang="ts">
const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
const { t } = useI18n()
</script>

<template>
  <div pt-10 text-center>
    <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      input-base w="250px"
      @keydown.enter="go"
    >
    <label class="hidden" for="input">t('intro.whats-your-name')</label>

    <div>
      <button
        m-3 text-sm btn-solid
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
