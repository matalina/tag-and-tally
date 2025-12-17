import { lists as listsData } from '@/data/lists'
import type { RandomListState, RandomList } from '@/types/random-lists'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useListsStore = defineStore('lists', () => {
  const randomLists = ref<RandomListState>({})

  function init() {
    randomLists.value = listsData
  }

  function add(list: RandomList) {
    randomLists.value[list.name] = list
  }

  function get(name: string) {
    return randomLists.value[name]
  }

  function remove(name: string) {
    delete randomLists.value[name]
  }

  function list() {
    return Object.keys(randomLists.value)
  }

  function random(name: string, count: number = 3) {
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

  return { randomLists, add, get, delete: remove, random, init, list }
})
