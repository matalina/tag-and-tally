// /src/utils/googleAuth.ts
const CLIENT_ID = '488994534863-flgc3ddj23ujf0j7bj2rbgvblqd5r7uk.apps.googleusercontent.com'
const BASE_URL = window?.location?.origin || 'https://app.tagandtally.quest'
const REDIRECT_URI = BASE_URL
const SCOPES = ['openid', 'email', 'profile', 'https://www.googleapis.com/auth/drive.appdata'].join(
  ' ',
)

// Generate PKCE challenge
function base64urlencode(a: ArrayBuffer) {
  return btoa(String.fromCharCode(...new Uint8Array(a)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

async function pkceChallenge() {
  const randomBytes = crypto.getRandomValues(new Uint8Array(32))
  const verifier = base64urlencode(randomBytes.buffer)
  const enc = new TextEncoder().encode(verifier)
  const digest = await crypto.subtle.digest('SHA-256', enc)
  const challenge = base64urlencode(digest)
  return { verifier, challenge }
}

export async function startGoogleLogin() {
  const { verifier, challenge } = await pkceChallenge()
  sessionStorage.setItem('pkce_verifier', verifier)

  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth')
  url.searchParams.set('client_id', CLIENT_ID)
  url.searchParams.set('redirect_uri', REDIRECT_URI)
  url.searchParams.set('response_type', 'code')
  url.searchParams.set('scope', SCOPES)
  url.searchParams.set('access_type', 'offline') // to get refresh token
  url.searchParams.set('prompt', 'consent')
  url.searchParams.set('code_challenge', challenge)
  url.searchParams.set('code_challenge_method', 'S256')
  url.searchParams.set('verifiter', verifier) // Optional, for debugging

  window.location.href = url.toString()
}
