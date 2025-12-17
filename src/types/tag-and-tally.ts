import type { CharacterDescription } from './characters'

export interface TagType {
  name:
    | 'background'
    | 'trait'
    | 'skill'
    | 'ability'
    | 'flaw'
    | 'weakness'
    | 'reputation'
    | 'condition'
  type: 'generic' | 'umbrella'
  tiered: boolean
  duration: 'temporary' | 'permanent'
}

export type Tag = {
  tag: string
  type: TagType
  tier?: number
  tags?: { [name: string]: Tag | TagAndTallyObject | string }
  mastery?: Tally
}

export type Tally = {
  name: string
  max: number
  current: number
  result: string
  tallys: string[]
}

export interface TagAndTallySentence {
  structure: string
  tags: { [name: string]: Tag | TagAndTallyObject | string }
}

export interface TagAndTallyObject {
  name: string
  level: number
  sentence: TagAndTallySentence
  description?: string | CharacterDescription
  toString: () => string
}

export interface TagAndTallyLocation extends TagAndTallyObject {
  sentence: {
    structure: '[Name] is a [descriptive] [location] that [feature] and [role].'
    tags: {
      descriptive: Tag
      location: Tag
      feature: Tag
      role: Tag
    }
  }
}
