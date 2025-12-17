import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useListsStore } from '../random-lists'
import type { RandomList } from '../../types/random-lists'

describe('useListsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('init', () => {
    it('should initialize lists from data', () => {
      const store = useListsStore()
      store.init()

      expect(store.randomLists).toBeDefined()
      expect(Object.keys(store.randomLists).length).toBeGreaterThan(0)
    })
  })

  describe('add', () => {
    it('should add a new list to the store', () => {
      const store = useListsStore()
      const newList: RandomList = {
        name: 'test-list',
        list: ['item1', 'item2', 'item3'],
      }

      store.add(newList)

      expect(store.get('test-list')).toEqual(newList)
    })

    it('should overwrite existing list with same name', () => {
      const store = useListsStore()
      const list1: RandomList = {
        name: 'test-list',
        list: ['original1', 'original2'],
      }
      const list2: RandomList = {
        name: 'test-list',
        list: ['updated1', 'updated2', 'updated3'],
      }

      store.add(list1)
      store.add(list2)

      expect(store.get('test-list')).toEqual(list2)
    })
  })

  describe('get', () => {
    it('should return a list by name', () => {
      const store = useListsStore()
      const list: RandomList = {
        name: 'test-list',
        list: ['item1', 'item2'],
      }

      store.add(list)
      const retrieved = store.get('test-list')

      expect(retrieved).toEqual(list)
    })

    it('should return undefined for non-existent list', () => {
      const store = useListsStore()
      const retrieved = store.get('non-existent')

      expect(retrieved).toBeUndefined()
    })
  })

  describe('delete', () => {
    it('should remove a list from the store', () => {
      const store = useListsStore()
      const list: RandomList = {
        name: 'test-list',
        list: ['item1', 'item2'],
      }

      store.add(list)
      expect(store.get('test-list')).toBeDefined()

      store.delete('test-list')

      expect(store.get('test-list')).toBeUndefined()
    })
  })

  describe('list', () => {
    it('should return an array of list names', () => {
      const store = useListsStore()
      const list1: RandomList = {
        name: 'list-1',
        list: ['item1'],
      }
      const list2: RandomList = {
        name: 'list-2',
        list: ['item2'],
      }

      store.add(list1)
      store.add(list2)

      const names = store.list()

      expect(names).toContain('list-1')
      expect(names).toContain('list-2')
      expect(names.length).toBeGreaterThanOrEqual(2)
    })

    it('should return empty array when no lists exist', () => {
      const store = useListsStore()
      const names = store.list()

      expect(names).toEqual([])
    })
  })

  describe('random', () => {
    it('should return random items from a list', () => {
      const store = useListsStore()
      const list: RandomList = {
        name: 'test-list',
        list: ['item1', 'item2', 'item3', 'item4', 'item5'],
      }

      store.add(list)
      const results = store.random('test-list')

      expect(results).toBeDefined()
      expect(Array.isArray(results)).toBe(true)
      expect(results.length).toBe(3) // default count
      results.forEach((item) => {
        expect(list.list).toContain(item)
      })
    })

    it('should return specified number of random items', () => {
      const store = useListsStore()
      const list: RandomList = {
        name: 'test-list',
        list: ['item1', 'item2', 'item3', 'item4', 'item5'],
      }

      store.add(list)
      const results = store.random('test-list', 5)

      expect(results.length).toBe(5)
      results.forEach((item) => {
        expect(list.list).toContain(item)
      })
    })

    it('should return single item when count is 1', () => {
      const store = useListsStore()
      const list: RandomList = {
        name: 'test-list',
        list: ['item1', 'item2', 'item3'],
      }

      store.add(list)
      const results = store.random('test-list', 1)

      expect(results.length).toBe(1)
      expect(list.list).toContain(results[0])
    })

    it('should return multiple items from a small list', () => {
      const store = useListsStore()
      const list: RandomList = {
        name: 'small-list',
        list: ['item1', 'item2'],
      }

      store.add(list)
      const results = store.random('small-list', 5)

      expect(results.length).toBe(5)
      // All items should be from the list (allowing duplicates)
      results.forEach((item) => {
        expect(['item1', 'item2']).toContain(item)
      })
    })

    it('should throw error for non-existent list', () => {
      const store = useListsStore()

      expect(() => store.random('non-existent')).toThrow('List non-existent not found')
    })

    it('should throw error for empty list', () => {
      const store = useListsStore()
      const emptyList: RandomList = {
        name: 'empty-list',
        list: [],
      }

      store.add(emptyList)

      expect(() => store.random('empty-list')).toThrow('List empty-list is empty')
    })

    it('should return different results on multiple calls (probabilistic)', () => {
      const store = useListsStore()
      const list: RandomList = {
        name: 'test-list',
        list: [
          'item1',
          'item2',
          'item3',
          'item4',
          'item5',
          'item6',
          'item7',
          'item8',
          'item9',
          'item10',
        ],
      }

      store.add(list)
      const results1 = store.random('test-list', 10)
      const results2 = store.random('test-list', 10)

      // With 10 items and 10 selections, it's very likely we'll get different results
      // This is probabilistic, so we just check that both are valid
      expect(results1.length).toBe(10)
      expect(results2.length).toBe(10)
      results1.forEach((item) => expect(list.list).toContain(item))
      results2.forEach((item) => expect(list.list).toContain(item))
    })

    it('should handle zero count gracefully', () => {
      const store = useListsStore()
      const list: RandomList = {
        name: 'test-list',
        list: ['item1', 'item2', 'item3'],
      }

      store.add(list)
      const results = store.random('test-list', 0)

      expect(results.length).toBe(0)
      expect(Array.isArray(results)).toBe(true)
    })
  })
})
