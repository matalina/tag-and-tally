<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { startGoogleLogin } from '@/utils/googleAuth'
import { useUserStore } from '@/stores/user'
import AppIcon from '@/components/ui/AppIcon.vue'
import { RouterLink } from 'vue-router'

const userStore = useUserStore()
const user = computed(() => userStore.user)
const accessToken = ref<string | null>(null)
const lastResult = ref<unknown>(null)

// PKCE: After Google redirects back, POST code + code_verifier to Netlify function
async function handleOAuthRedirect() {
  const params = new URLSearchParams(window.location.search)
  const code = params.get('code')
  if (code) {
    const code_verifier = sessionStorage.getItem('pkce_verifier')
    if (!code_verifier) {
      lastResult.value = 'Missing PKCE verifier.'
      return
    }
    try {
      const res = await fetch('/.netlify/functions/oauth2callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, code_verifier }),
      })
      const tokens = await res.json()
      if (tokens.error) {
        lastResult.value = tokens
        return
      }
      accessToken.value = tokens.access_token
      if (tokens.id_token) {
        const payloadBase64 = tokens.id_token.split('.')[1]
        const decoded = JSON.parse(atob(payloadBase64.replace(/-/g, '+').replace(/_/g, '/')))
        userStore.setUser({
          name: decoded.name,
          email: decoded.email,
          picture: decoded.picture,
          sub: decoded.sub,
        })
      }
      lastResult.value = 'Signed in (OAuth2 via Netlify).'
      // Remove code param from URL
      window.history.replaceState({}, document.title, window.location.pathname)
      sessionStorage.removeItem('pkce_verifier')
    } catch (e: Error | unknown) {
      lastResult.value = 'Failed to exchange code.'
      console.error(e)
    }
  }
}

onMounted(() => {
  handleOAuthRedirect()
})

function login() {
  startGoogleLogin()
}

function logout() {
  userStore.setUser(null)
  accessToken.value = null
}
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/story">Story</RouterLink>
    <RouterLink to="/character">Characters</RouterLink>
    <RouterLink to="/random-table">Random Tables</RouterLink>
    <button v-if="!user" @click="login">
      <AppIcon name="google" altText="Sign in with Google" /> Sign In with Google
    </button>
    <template v-if="user">
      <button @click="logout"><AppIcon name="sign-out" altText="Sign out" /> Sign Out</button>
      <p>Signed in as: {{ user.name }} ({{ user.email }})</p>
    </template>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  gap: var(--size-3);
}
nav > * {
}
</style>
