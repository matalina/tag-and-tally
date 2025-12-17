import { beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

// Setup Pinia before each test
beforeEach(() => {
  setActivePinia(createPinia())
})
