import type { DiceRoll } from '@dice-roller/rpg-dice-roller'

export interface RandomTableState {
  [name: string]: RandomTable
}

export interface TableResult {
  roll: InstanceType<typeof DiceRoll>
  result: string
  keywords?: string[]
  actions?: string[]
}

export interface RandomTable {
  name: string
  formula: string
  table: TableOption[]
}

export interface TableOption {
  min: number | null
  max: number | null
  value: string | RandomFunction
}

export type RandomFunction = () => string
