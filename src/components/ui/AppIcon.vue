<script lang="ts" setup>
const { name, altText = '' } = defineProps<{
  name: string
  altText?: string
}>()
</script>

<template>
  <img class="app-icon" :src="`/icons/${name}.svg`" :alt="altText" />
</template>

<style scoped>
.app-icon {
  width: var(--size-5);
  height: var(--size-5);
}
</style>
