// netlify/functions/drive.ts
import type { Handler } from '@netlify/functions'
import fetch from 'node-fetch'

const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token'
const GOOGLE_DRIVE_UPLOAD = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart'
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN! // stored securely

async function getAccessToken() {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    refresh_token: REFRESH_TOKEN,
    grant_type: 'refresh_token',
  })
  const res = await fetch(GOOGLE_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  })
  return res.json()
}

export const handler: Handler = async () => {
  const { access_token } = await getAccessToken()

  const metadata = {
    name: 'app_state.json',
    parents: ['appDataFolder'],
    mimeType: 'application/json',
  }
  const appState = { updated: new Date().toISOString(), data: { hello: 'world' } }

  const boundary = '-------314159265358979323846'
  const delimiter = `\r\n--${boundary}\r\n`
  const closeDelim = `\r\n--${boundary}--`

  const body =
    delimiter +
    'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
    JSON.stringify(metadata) +
    delimiter +
    'Content-Type: application/json\r\n\r\n' +
    JSON.stringify(appState) +
    closeDelim

  const res = await fetch(GOOGLE_DRIVE_UPLOAD, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': `multipart/related; boundary="${boundary}"`,
    },
    body,
  })
  const result = await res.json()
  return { statusCode: 200, body: JSON.stringify(result) }
}
