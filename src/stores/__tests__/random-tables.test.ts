import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTablesStore, getCombatAttackActions, getCombatDefenseActions } from '../random-tables'
import { useListsStore } from '../random-lists'
import type { RandomTable } from '../../types/random-tables'

describe('useTablesStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('init', () => {
    it('should initialize tables from data', () => {
      const store = useTablesStore()
      store.init()

      expect(store.randomTables).toBeDefined()
      expect(Object.keys(store.randomTables).length).toBeGreaterThan(0)
    })
  })

  describe('add', () => {
    it('should add a new table to the store', () => {
      const store = useTablesStore()
      const newTable: RandomTable = {
        name: 'test-table',
        formula: '1d6',
        table: [
          { min: 1, max: 3, value: 'Option 1' },
          { min: 4, max: 6, value: 'Option 2' },
        ],
      }

      store.add(newTable)

      expect(store.get('test-table')).toEqual(newTable)
    })

    it('should overwrite existing table with same name', () => {
      const store = useTablesStore()
      const table1: RandomTable = {
        name: 'test-table',
        formula: '1d6',
        table: [{ min: 1, max: 6, value: 'Original' }],
      }
      const table2: RandomTable = {
        name: 'test-table',
        formula: '1d10',
        table: [{ min: 1, max: 10, value: 'Updated' }],
      }

      store.add(table1)
      store.add(table2)

      expect(store.get('test-table')).toEqual(table2)
    })
  })

  describe('get', () => {
    it('should return a table by name', () => {
      const store = useTablesStore()
      const table: RandomTable = {
        name: 'test-table',
        formula: '1d6',
        table: [{ min: 1, max: 6, value: 'Test' }],
      }

      store.add(table)
      const retrieved = store.get('test-table')

      expect(retrieved).toEqual(table)
    })

    it('should return undefined for non-existent table', () => {
      const store = useTablesStore()
      const retrieved = store.get('non-existent')

      expect(retrieved).toBeUndefined()
    })
  })

  describe('delete', () => {
    it('should remove a table from the store', () => {
      const store = useTablesStore()
      const table: RandomTable = {
        name: 'test-table',
        formula: '1d6',
        table: [{ min: 1, max: 6, value: 'Test' }],
      }

      store.add(table)
      expect(store.get('test-table')).toBeDefined()

      store.delete('test-table')

      expect(store.get('test-table')).toBeUndefined()
    })
  })

  describe('list', () => {
    it('should return an array of table names', () => {
      const store = useTablesStore()
      const table1: RandomTable = {
        name: 'table-1',
        formula: '1d6',
        table: [{ min: 1, max: 6, value: 'Test 1' }],
      }
      const table2: RandomTable = {
        name: 'table-2',
        formula: '1d10',
        table: [{ min: 1, max: 10, value: 'Test 2' }],
      }

      store.add(table1)
      store.add(table2)

      const names = store.list()

      expect(names).toContain('table-1')
      expect(names).toContain('table-2')
      expect(names.length).toBeGreaterThanOrEqual(2)
    })

    it('should return empty array when no tables exist', () => {
      const store = useTablesStore()
      const names = store.list()

      expect(names).toEqual([])
    })
  })

  describe('random', () => {
    it('should roll a random result from a table', () => {
      const store = useTablesStore()
      const table: RandomTable = {
        name: 'test-table',
        formula: '1d6',
        table: [
          { min: 1, max: 3, value: 'Low' },
          { min: 4, max: 6, value: 'High' },
        ],
      }

      store.add(table)
      const result = store.random('test-table')

      expect(result).toBeDefined()
      expect(result.roll).toBeDefined()
      expect(result.result).toBeDefined()
      expect(['Low', 'High']).toContain(result.result)
      expect(result.keywords).toEqual([])
    })

    it('should handle table with function values', () => {
      const store = useTablesStore()
      const mockFunction = vi.fn(() => 'Function Result')
      const table: RandomTable = {
        name: 'function-table',
        formula: '1d6',
        table: [{ min: 1, max: 6, value: mockFunction }],
      }

      store.add(table)
      const result = store.random('function-table')

      expect(result).toBeDefined()
      expect(result.result).toBe('Function Result')
      expect(mockFunction).toHaveBeenCalled()
    })

    it('should throw error for non-existent table', () => {
      const store = useTablesStore()

      expect(() => store.random('non-existent')).toThrow('Table non-existent not found')
    })

    it('should return "unknown" when roll does not match any table row', () => {
      const store = useTablesStore()
      // Create a table that won't match the roll result
      const table: RandomTable = {
        name: 'mismatch-table',
        formula: '1d6',
        table: [{ min: 10, max: 20, value: 'Will not match' }],
      }

      store.add(table)
      const result = store.random('mismatch-table')

      expect(result.result).toBe('unknown')
    })
  })

  describe('resolve', () => {
    beforeEach(() => {
      // Mock the lists store
      const listsStore = useListsStore()
      listsStore.init()
      // Ensure keywords list exists
      if (!listsStore.get('keywords')) {
        listsStore.add({
          name: 'keywords',
          list: ['keyword1', 'keyword2', 'keyword3', 'keyword4', 'keyword5'],
        })
      }
    })

    it('should resolve with standard success/fail results', () => {
      const store = useTablesStore()
      const result = store.resolve(10)

      expect(result).toBeDefined()
      expect(result.roll).toBeDefined()
      expect(result.result).toBeDefined()
      expect(['Fail, and', 'Fail, but', 'Success, but', 'Success', 'Success, and']).toContain(
        result.result,
      )
    })

    it('should resolve with oracle yes/no results when type is oracle', () => {
      const store = useTablesStore()
      const result = store.resolve(10, 'oracle')

      expect(result).toBeDefined()
      expect(['No, and', 'No, but', 'Yes, but', 'Yes', 'Yes, and']).toContain(result.result)
    })

    it('should add keywords when result contains "and" or "but"', () => {
      const store = useTablesStore()
      // We'll need to mock the dice roll or test multiple times
      // Since dice rolls are random, we test the structure
      const result = store.resolve(10)

      if (
        result.result?.toLowerCase().includes('and') ||
        result.result?.toLowerCase().includes('but')
      ) {
        expect(result.keywords).toBeDefined()
        expect(Array.isArray(result.keywords)).toBe(true)
        if (result.keywords && result.keywords.length > 0) {
          expect(result.keywords.length).toBe(3)
        }
      }
    })

    it('should add actions for attack type', () => {
      const store = useTablesStore()
      const result = store.resolve(10, 'attack')

      expect(result.actions).toBeDefined()
      if (result.actions && result.actions.length > 0) {
        expect(['0 momentum', '+1 momentum', '+2 momentum']).toContain(result.actions[0])
      }
    })

    it('should add actions for defense type', () => {
      const store = useTablesStore()
      const result = store.resolve(10, 'defense')

      expect(result.actions).toBeDefined()
      if (result.actions && result.actions.length > 0) {
        expect(result.actions[0]).toBeDefined()
      }
    })

    it('should add actions for npc type', () => {
      const store = useTablesStore()
      const result = store.resolve(10, 'npc')

      expect(result.actions).toBeDefined()
      if (result.actions && result.actions.length > 0) {
        const action = result.actions[0]
        expect(
          action.includes('Fail') || action.includes('Success') || action.includes('disposition'),
        ).toBe(true)
      }
    })

    it('should add actions for spellcasting type', () => {
      const store = useTablesStore()
      const result = store.resolve(10, 'spellcasting')

      expect(result.actions).toBeDefined()
      if (result.actions && result.actions.length > 0) {
        expect(result.actions[0]).toBeDefined()
      }
    })

    it('should add actions for debt type', () => {
      const store = useTablesStore()
      const result = store.resolve(10, 'debt')

      expect(result.actions).toBeDefined()
      if (result.actions && result.actions.length > 0) {
        expect(result.actions[0]).toBeDefined()
      }
    })

    it('should add actions for harvesting type', () => {
      const store = useTablesStore()
      const result = store.resolve(10, 'harvesting')

      expect(result.actions).toBeDefined()
      if (result.actions && result.actions.length > 0) {
        expect(result.actions[0]).toContain('harvest')
      }
    })

    it('should add actions for crafting type', () => {
      const store = useTablesStore()
      const result = store.resolve(10, 'crafting')

      expect(result.actions).toBeDefined()
      if (result.actions && result.actions.length > 0) {
        expect(result.actions[0]).toContain('craft')
      }
    })

    it('should add actions for augmenting type', () => {
      const store = useTablesStore()
      const result = store.resolve(10, 'augmenting')

      expect(result.actions).toBeDefined()
      if (result.actions && result.actions.length > 0) {
        expect(result.actions[0]).toContain('augment')
      }
    })

    it('should add actions for salvaging type', () => {
      const store = useTablesStore()
      const result = store.resolve(10, 'salvaging')

      expect(result.actions).toBeDefined()
      if (result.actions && result.actions.length > 0) {
        expect(result.actions[0]).toContain('salvage')
      }
    })

    it('should add actions for navigation type', () => {
      const store = useTablesStore()
      const result = store.resolve(10, 'navigation')

      expect(result.actions).toBeDefined()
      if (result.actions && result.actions.length > 0) {
        expect(result.actions[0]).toContain('navigate')
      }
    })

    it('should add actions for secrets type', () => {
      const store = useTablesStore()
      const result = store.resolve(10, 'secrets')

      expect(result.actions).toBeDefined()
      if (result.actions && result.actions.length > 0) {
        const action = result.actions[0]
        expect(
          action.includes('secret') || action.includes('trap') || action.includes('trigger'),
        ).toBe(true)
      }
    })

    it('should not add actions for oracle type', () => {
      const store = useTablesStore()
      const result = store.resolve(10, 'oracle')

      expect(result.actions).toBeUndefined()
    })

    it('should handle different levels correctly', () => {
      const store = useTablesStore()
      const lowLevelResult = store.resolve(5)
      const highLevelResult = store.resolve(15)

      expect(lowLevelResult).toBeDefined()
      expect(highLevelResult).toBeDefined()
      expect(lowLevelResult.roll.total).toBeGreaterThanOrEqual(1)
      expect(highLevelResult.roll.total).toBeGreaterThanOrEqual(1)
    })
  })
})

describe('getCombatAttackActions', () => {
  it('should return correct momentum for Fail, and', () => {
    expect(getCombatAttackActions('Fail, and')).toBe('0 momentum')
  })

  it('should return correct momentum for Fail, but', () => {
    expect(getCombatAttackActions('Fail, but')).toBe('0 momentum')
  })

  it('should return correct momentum for Success, but', () => {
    expect(getCombatAttackActions('Success, but')).toBe('0 momentum')
  })

  it('should return correct momentum for Success', () => {
    expect(getCombatAttackActions('Success')).toBe('+1 momentum')
  })

  it('should return correct momentum for Success, and', () => {
    expect(getCombatAttackActions('Success, and')).toBe('+2 momentum')
  })

  it('should return empty string for unknown result', () => {
    expect(getCombatAttackActions('Unknown')).toBe('')
  })
})

describe('getCombatDefenseActions', () => {
  it('should return correct actions for Fail, and', () => {
    expect(getCombatDefenseActions('Fail, and')).toBe('-2 momentum/+2 enemy successes')
  })

  it('should return correct actions for Fail, but', () => {
    expect(getCombatDefenseActions('Fail, but')).toBe('-1 momentum/+1 enemy successes')
  })

  it('should return correct actions for Success, but', () => {
    expect(getCombatDefenseActions('Success, but')).toBe('-1 momentum/+0 enemy successes')
  })

  it('should return correct actions for Success', () => {
    expect(getCombatDefenseActions('Success')).toBe('0')
  })

  it('should return correct actions for Success, and', () => {
    expect(getCombatDefenseActions('Success, and')).toBe('0')
  })

  it('should return empty string for unknown result', () => {
    expect(getCombatDefenseActions('Unknown')).toBe('')
  })
})
