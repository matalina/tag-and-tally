import type { RandomFunction, RandomTableState, TableOption, RollResult } from '@/types/index'
import type { RandomTable } from '@/types'
import { ref } from 'vue'
import { DiceRoll } from '@dice-roller/rpg-dice-roller'
import { useListsStore } from './random-lists'
import { defineStore } from 'pinia'
import { tables as tablesData } from '@/data/tables'

function roll(formula: string, table: TableOption[]): RollResult {
  const result = new DiceRoll(formula)

  for (const row of table) {
    if (result.total >= (row.min ?? result.minTotal) && result.total <= (row.max ?? Infinity)) {
      if (typeof row.value === 'string')
        return { roll: result.output, result: row.value, keywords: [] }
      return { roll: result.output, result: (row.value as RandomFunction)(), keywords: [] }
    }
  }
  return { roll: result.output, result: 'unknown', keywords: [] }
}

function createResolutionTable(level: number, oracle?: boolean) {
  const table: TableOption[] = [
    { min: 1, max: 1, value: oracle ? 'No, and' : 'Fail, and' },
    { min: 2, max: level - 6, value: oracle ? 'No, but' : 'Fail, but' },
    { min: level - 5, max: level - 1, value: oracle ? 'Yes, but' : 'Success, but' },
    { min: level, max: level + 4, value: oracle ? 'Yes' : 'Success' },
    { min: level + 5, max: null, value: oracle ? 'Yes, and' : 'Success, and' },
  ]

  return table
}

export function getCombatAttackActions(result: string): string {
  switch (result) {
    case 'Fail, and':
    case 'Fail, but':
    case 'Success, but':
      return '0 momentum'
    case 'Success':
      return '+1 momentum'
    case 'Success, and':
      return '+2 momentum'
    default:
      return ''
  }
}

export function getCombatDefenseActions(result: string): string {
  switch (result) {
    case 'Fail, and':
      return '-2 momentum/+2 enemy successes'
    case 'Fail, but':
      return '-1 momentum/+1 enemy successes'
    case 'Success, but':
      return '-1 momentum/+0 enemy successes'
    case 'Success':
    case 'Success, and':
      return '0'
    default:
      return ''
  }
}

function getNPCResolutionActions(result: string): string {
  switch (result) {
    case 'Fail, and':
      return 'Fail, decrease the NPCs default disposition by one step'
    case 'Fail, but':
      return 'Fail, but their attitude changes towards you in your favor'
    case 'Success, but':
      return 'Success, but their attitude changes against your favor'
    case 'Success':
      return 'Success'
    case 'Success, and':
      return 'Success, increase the NPCs default disposition by one step'
    default:
      return ''
  }
}

function getSpellcastingResolutionActions(result: string): string {
  switch (result) {
    case 'Fail, and':
      return 'Fail, and Roll on the Mishap table'
    case 'Fail, but':
      return 'The spell fails, but nothing backfires or goes wrong'
    case 'Success, but':
      return 'Success, but it backfires and hinders all rolls until the end of your next turn'
    case 'Success':
      return 'The spell goes off exactly as you expected'
    case 'Success, and':
      return 'Successfully cast the spell and earn the tag of Mastery for that spell.'
    default:
      return ''
  }
}

function getDebtResolutionActions(result: string): string {
  switch (result) {
    case 'Fail, and':
      return 'Collectors come knocking and they come looking for blood (Combat encounter)'
    case 'Fail, but':
      return 'Collectors come knocking but are understanding'
    case 'Success, but':
      return "Collectors offer an alternative payment method -- do this for me, and I'll let you off (Negotiations)"
    case 'Success':
      return '--'
    case 'Success, and':
      return 'Collectors are feeling generous. Instead of hindered by two wealth check, hinder your check at the end of the session by 1 to see if you clear your debt.'
    default:
      return ''
  }
}

function getHarvestingResolutionActions(result: string): string {
  switch (result) {
    case 'Fail, and':
      return 'You failed to harvest the item and destroyed the resource'
    case 'Fail, but':
      return 'You failed to harvest the item but the node is intact'
    case 'Success, but':
      return 'Successfully harvested the item but the item level is lowered by one'
    case 'Success':
      return 'Successfully harvested the item of equal level to the source'
    case 'Success, and':
      return 'Successfully harvested the item and the level is raised by one'
    default:
      return ''
  }
}

function getCraftingResolutionActions(result: string): string {
  switch (result) {
    case 'Fail, and':
      return 'You failed to craft the item and you lose the materials'
    case 'Fail, but':
      return "You failed to craft the item but you didn't lose any materials in the process"
    case 'Success, but':
      return "Successfully crafted the item but it doesn't do exactly what you wanted"
    case 'Success':
      return 'Successfully crafted the item and it does what you intended'
    case 'Success, and':
      return 'Successfully crafted the item better than expected'
    default:
      return ''
  }
}

function getAugmentingResolutionActions(result: string): string {
  switch (result) {
    case 'Fail, and':
      return 'You failed to augment the item and you lose the raw material.'
    case 'Fail, but':
      return "You failed to augment the item but you didn't lose any materials in the process"
    case 'Success, but':
      return "Successfully augmented the item but it doesn't do exactly what you wanted"
    case 'Success':
      return 'Successfully augmented the item and it does what you intended'
    case 'Success, and':
      return 'Successfully augmented the item better than expected'
    default:
      return ''
  }
}

function getSalvagingResolutionActions(result: string): string {
  switch (result) {
    case 'Fail, and':
      return 'You failed to salvage the item and destroyed it'
    case 'Fail, but':
      return 'You failed to salvage the item but it was not damaged'
    case 'Success, but':
      return 'Successfully salvaged the item but the property is dimished'
    case 'Success':
      return 'Successfully salvaged the item with the intended property'
    case 'Success, and':
      return 'Successfully salvaged the item with two properties'
    default:
      return ''
  }
}

function getNavigationResolutionActions(result: string): string {
  switch (result) {
    case 'Fail, and':
      return 'You failed to navigate, and you are completely lost'
    case 'Fail, but':
      return "You failed to navigate, but you've found a clue to point you in the right direction"
    case 'Success, but':
      return "You successfully navigate, but you aren't sure you are going in the right direction"
    case 'Success':
      return 'You successfully navigate'
    case 'Success, and':
      return 'You successfully navigate and find proof you are heading in the right direction'
    default:
      return ''
  }
}

function getSecretsResolutionActions(result: string): string {
  switch (result) {
    case 'Fail, and':
      return 'You find and trigger a trap.'
    case 'Fail, but':
      return 'You find a trap, but it is not triggered'
    case 'Success, but':
      return 'You find a secret but its trapped'
    case 'Success':
      return 'You found a secret'
    case 'Success, and':
      return 'You found 2 secrets'
    default:
      return ''
  }
}

function getSpecificResolutionActions(result: string, type?: string): string {
  switch (type) {
    case 'attack':
      return getCombatAttackActions(result)
    case 'defense':
      return getCombatDefenseActions(result)
    case 'npc':
      return getNPCResolutionActions(result)
    case 'spellcasting':
      return getSpellcastingResolutionActions(result)
    case 'debt':
      return getDebtResolutionActions(result)
    case 'harvesting':
      return getHarvestingResolutionActions(result)
    case 'crafting':
      return getCraftingResolutionActions(result)
    case 'augmenting':
      return getAugmentingResolutionActions(result)
    case 'salvaging':
      return getSalvagingResolutionActions(result)
    case 'navigation':
      return getNavigationResolutionActions(result)
    case 'secrets':
      return getSecretsResolutionActions(result)
    default:
      return ''
  }
}

export const useTablesStore = defineStore('tables', () => {
  const lists = useListsStore()
  const randomTables = ref<RandomTableState>({})

  function init() {
    randomTables.value = tablesData
  }

  function add(table: RandomTable) {
    randomTables.value[table.name] = table
  }

  function get(name: string) {
    return randomTables.value[name]
  }

  function remove(name: string) {
    delete randomTables.value[name]
  }

  function list() {
    return Object.keys(randomTables.value)
  }

  function random(name: string) {
    const table = get(name)

    if (!table) {
      throw new Error(`Table ${name} not found`)
    }

    return roll(table.formula, table.table)
  }

  function resolve(level: number, type?: string): RollResult {
    const oracle = type === 'oracle' ? true : false

    const table = createResolutionTable(level, oracle)
    const result = roll('1d20', table)
    if (
      result.result?.toLowerCase().includes('and') ||
      result.result?.toLowerCase().includes('but')
    ) {
      result.keywords?.push(...lists.random('keywords', 3))
    }

    if (type && type !== 'oracle') {
      result.actions = getSpecificResolutionActions(result.result, type)
    }
    return result
  }

  return { randomTables, add: add, get, delete: remove, random, resolve, init, list }
})
