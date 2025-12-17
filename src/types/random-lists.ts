export interface RandomListState {
  [name: string]: RandomList
}

export interface RandomList {
  name: string
  list: string[]
}
