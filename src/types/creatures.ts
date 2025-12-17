import type { CharacterDescription } from './characters'
import type { Tag, TagAndTallyObject } from './tag-and-tally'

export interface Creature extends TagAndTallyObject {
  sentence: {
    structure: '[Name] is a [disposition] [descriptor] [type] who [motivation] and does [basicAttack] [damage] damage.'
    tags: {
      disposition: Tag
      descriptor: Tag
      type: Tag
      motivation: Tag
      basicAttack: Tag
      damage: Tag
    }
  }
  weaknesses: {
    physical: Tag
    behavioral: Tag
  }
  baskicAttack: Tag
  tags: CreatureTags[]
}

export interface CreatureTags {
  level: number
  tag: Tag
}

export interface NPC extends TagAndTallyObject {
  sentence: {
    structure: '[Name] is a [descriptor] [type] who [verbs] [something] and does [damage] damage.'
    tags: {
      descriptor: Tag
      type: Tag
      verbs: Tag
      something: Tag
      damage: Tag
    }
  }
  description: CharacterDescription
  flaw: Tag
  occupation: Tag
  background: Tag
  tags: CreatureTags[]
}
