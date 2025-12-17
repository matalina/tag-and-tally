import type { Tag, TagAndTallyObject } from './tag-and-tally'

export interface Resource extends TagAndTallyObject {
  sentence: {
    structure: '[Name] is a [rarity] [descriptor] [resourceType] that [special].'
    tags: {
      rarity: Rarity
      descriptor: Tag
      resourceType: ResourceType
      special: Tag
    }
  }
}
export const resourceType = [
  'Ore',
  'Wood',
  'Fiber',
  'Liquid',
  'Plants',
  'Essence',
  'Creature Parts',
]
export type ResourceType = (typeof resourceType)[number]

export const rarity = ['Common', 'Uncommon', 'Rare', 'Legendary']
export type Rarity = (typeof rarity)[number]
