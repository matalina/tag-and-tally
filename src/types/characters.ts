import type { Creature, NPC } from './creatures'
import type { Equipment } from './gear'
import type { Faction } from './locations'
import type { Quest } from './scene'
import type { Tag, TagAndTallyObject } from './tag-and-tally'
import type { Tally } from './tag-and-tally'

export interface CharacterDescription {
  description?: string
  age?: number
  gender?: string
  hair?: string
  eyes?: string
  height?: string
  weight?: string
  definingFeature?: string
  personality?: string
  voice?: string
  quirks?: string
  factions?: Faction[]
  motivation?: string
  relationships?: Relationship[]
}

export interface Relationship {
  who: Character | NPC | Faction | Creature
  status: RelationshipStatus
}

export const relationshipStatus = [
  'Unbreakable Bond',
  'Unyielding Loyalty',
  'Enduring Trust',
  'Loyal',
  'Reliable',
  'Indifferent',
  'Irritated',
  'Conflict',
  'Rivalry',
  'Hostility',
  'Loathing',
]
export type RelationshipStatus = (typeof relationshipStatus)[number]

export interface Species extends TagAndTallyObject {
  sentence: {
    structure: '[Name] are a [descriptor] people who [culturalTrait] and [feature].'
    tags: {
      descriptor: Tag
      culturalTrait: Tag
      feature: Tag
    }
  }
}

export interface CharacterType extends TagAndTallyObject {
  sentence: {
    structure: '[Name] is an [descriptor] [type] who [special].'
    tags: {
      descriptor: Tag
      type: Tag
      special: Tag
    }
  }
}

export interface Character extends TagAndTallyObject {
  sentence: {
    structure: '[Name] is a [descriptor] [species] [type] who [specializes].'
    tags: {
      descriptor: Tag
      species: Species
      type: CharacterType
      specializes: Tag
    }
  }
  childhood: CharacterLifeStage
  adolescence: CharacterLifeStage
  youngAdult: CharacterLifeStage
  adult: CharacterLifeStage[]
  elder: CharacterElderStage[]
  description: CharacterDescription
  tags: Tag[] // tags earned from other sources
  gear: Equipment[]
  quests: Quest[]
  relationships: Relationship[]
  arcs: Quest[]
  wounds?: Wounds
}

export const woundTypes = ['Strain', 'Lingering Trauma', 'Debilitating Injury', 'Lasting Scar']
export type WoundTypes = (typeof woundTypes)[number]

export interface Wounds {
  [woundType: WoundTypes]: Tally
}

export interface CharacterLifeStage {
  flaw: Tag
  background: Tag
  tags: Tag[] // 2 additional tags
}

export interface CharacterElderStage {
  flaw: Tag
  experience: Tag
}
