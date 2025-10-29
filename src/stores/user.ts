import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/types'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(
    sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')!) : null,
  )

  function setUser(userInfo: User | null) {
    user.value = userInfo
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
  }

  return { user, setUser }
})
