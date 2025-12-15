import type { RandomListState, RandomList } from '@/types/index'
import { ref } from 'vue'

export function useRandomLists() {
  const randomLists = ref<RandomListState>({})

  function add(list: RandomList) {
    randomLists.value[list.name] = list
  }

  function get(name: string) {
    return randomLists.value[name]
  }

  function remove(name: string) {
    delete randomLists.value[name]
  }

  function roll(name: string, count: number = 3) {
    const list = get(name)

    if (!list) {
      throw new Error(`List ${name} not found`)
    }

    if (list.list.length === 0) {
      throw new Error(`List ${name} is empty`)
    }

    const results: string[] = []
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * list.list.length)
      results.push(list.list[randomIndex])
    }

    return results
  }

  return { randomLists, add, get, delete: remove, roll }
}

