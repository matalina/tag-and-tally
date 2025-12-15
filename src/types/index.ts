/* State Types */

export interface RandomTableState {
  [name: string]: RandomTable
}

export interface RandomListState {
  [name: string]: RandomList
}

/* User Types */

export interface User {
  name: string
  email: string
  picture: string
  sub: string
}

/* Data Types */

export interface RandomList {
  name: string
  list: string[]
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

export interface RollResult {
  roll: string
  result: string
  keywords?: string[]
  actions?: string
}
