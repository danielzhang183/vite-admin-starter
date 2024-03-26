import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  rules: {
    'vue/require-toggle-inside-transition': 'off',
  },
})
