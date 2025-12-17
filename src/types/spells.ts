import type { Tag, TagAndTallyObject } from './tag-and-tally'

export const spellBase = ['Order', 'Chaos', 'Void', 'Spirit']
export type SpellBase = (typeof spellBase)[number]

export const spellType = ['Damage', 'Counter', 'Control', 'Summon', 'Ward']
export type SpellType = (typeof spellType)[number]

export const spellAspect = [
  'Air',
  'Earth',
  'Water',
  'Fire',
  'Life',
  'Death',
  'Mind',
  'Time',
  'Space',
  'Sound',
  'Illusion',
  'Shadow',
  'Light',
]
export type SpellAspect = (typeof spellAspect)[number]

export const spellArtifact = [
  'Manifestation',
  'Lexicon Rune',
  'Proto Rune',
  'Incantation',
  'Somatic',
  'Ritual',
  'Science',
]
export type SpellArtifact = (typeof spellArtifact)[number]

export interface Spell extends TagAndTallyObject {
  sentence: {
    structure: '[Name] is a [descriptor] [base] [aspect] [type] [artifact] that targets 1 [things] and [effect].'
    tags: {
      descriptor: Tag
      base: SpellBase | string
      aspect: SpellAspect | string
      type: SpellType | string
      artifact: SpellArtifact | string
      things: string
      effect: Tag
    }
  }
  tier: number
  points: number
}
