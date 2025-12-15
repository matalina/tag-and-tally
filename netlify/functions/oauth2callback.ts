// netlify/functions/oauth2callback.ts
import type { Handler } from '@netlify/functions'
import fetch from 'node-fetch'

const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token'
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  let code = ''
  let code_verifier = ''
  try {
    const body = JSON.parse(event.body || '{}')
    code = body.code
    code_verifier = body.code_verifier
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' }
  }
  if (!code || !code_verifier) {
    return { statusCode: 400, body: 'Missing code or code_verifier' }
  }
  const url = new URL(event.rawUrl)
  const BASE_URL = url.origin || 'https://app.tagandtally.quest'
  const REDIRECT_URI = BASE_URL
  const params = new URLSearchParams({
    code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: 'authorization_code',
    code_verifier,
  })
  const res = await fetch(GOOGLE_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  })
  const tokens = await res.json()

  if ((tokens as { error?: string }).error) {
    return { statusCode: 400, body: JSON.stringify(tokens) }
  }
  // Return tokens as JSON (client will handle)
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tokens),
  }
}
