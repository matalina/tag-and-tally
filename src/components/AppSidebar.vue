<script lang="ts" setup>
import AppLogo from './ui/AppLogo.vue'

const baseUrl = new URL(window.location.href).origin
</script>

<template>
  <a :href="baseUrl"><AppLogo size="large" /></a>
</template>
