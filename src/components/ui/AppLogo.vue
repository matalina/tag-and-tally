<script lang="ts" setup>
const { size = 'medium' } = defineProps<{
  size?: 'small' | 'medium' | 'large'
}>()
</script>

<template>
  <img src="/logo.png" :class="`app-logo ${size}`" alt="Tag & Tally" />
</template>

<style scoped>
.app-logo,
.app-logo.small {
  width: var(--size-5);
  height: var(--size-5);
}
.app-logo.medium {
  width: var(--size-7);
  height: var(--size-7);
}
.app-logo.large {
  width: var(--size-13); /* sidebar */
  height: var(--size-13);
}
</style>
