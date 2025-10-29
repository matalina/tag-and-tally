<script lang="ts" setup>
import { computed } from 'vue'

const year = computed(() => {
  const today = new Date()
  if (today.getFullYear() === 2025) {
    return '2025'
  } else {
    return `2025 - ${today.getFullYear()}`
  }
})
</script>

<template>
  <div>&copy; {{ year }}</div>
</template>
