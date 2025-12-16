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

export interface Generators {
  [name: string]: TagAndTallyGenerator
}

export interface TagAndTallyGenerator {
  name: string
  generator: (options: GeneratorOptions) => TagAndTallyObject
}

export type GeneratorOptions = Record<string, string | number | boolean>

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

export const overlandTerrain = [
  'Forest',
  'Plains',
  'Mountain',
  'Swamp',
  'Island',
  'Desert',
  'Wastelands',
  'Magiclands',
]
export type OverlandTerrain = (typeof overlandTerrain)[number]

export const districtTypes = [
  'High Class',
  'Financial',
  'Middle Class',
  'Slums',
  'Park',
  'Medical Park',
  'Commercial',
  'Downtown',
  'Government',
  'University',
  'Entertainment',
  'Tech',
  'Warehouse',
  'Industrial',
]
export type DistrictTypes = (typeof districtTypes)[number]

export const urbanFeatures = [
  'Narrow Alleys (Rough)',
  'Crowded Streets (Rough)',
  'Broad Avenues (Easy)',
  'Walled Courtyards (Easy)',
  'Ruined Streets (Dangerous)',
  'Sloped Walkways (Rough)',
  'Elevated Platforms (Dangerous)',
  'Tree-Lined Roads (Easy)',
  'Labyrinthine Passages (Dangerous)',
  'Cracked Pavement (Rough)',
  'Flooded Walks (Dangerous)',
  'Cobblestone Paths (Easy)',
]
export type UrbanFeatures = (typeof urbanFeatures)[number]

export const overlandFeatures = [
  'Open Ground (Easy)',
  'Elevated Paths (Easy)',
  'Worn Trails (Easy)',
  'Uneven Terrain (Rough)',
  'Overgrown Passage (Rough)',
  'Slippery Ground (Rough)',
  'Rocky or Crashed Surface (Rough)',
  'Dense Obstacles (Rough)',
  'Hazardous Wildlife (Dangerous)',
  'Environmental Hazard (Dangerous)',
  'Unstable Ground (Dangerous)',
  'Supernatural Distortion (Dangerous)',
]
export type OverlandFeatures = (typeof overlandFeatures)[number]

export const pointOfInterestTypes = ['Clue', 'Creature', 'NPC', 'Dungeon', 'Encounter', 'Lair']
export type PointOfInterestTypes = (typeof pointOfInterestTypes)[number]

export interface PointOfInterest extends TagAndTallyObject {
  type: PointOfInterestTypes
  link: Clue | Creature | NPC | Dungeon | Encounter | Lair
}

export interface Clue extends TagAndTallyObject {
  sentence: {
    structure: '[Name] is a [sensory] [form] [itemType] that [behavior], leading toward [narrative].'
    tags: {
      sensory: Tag
      form: Tag
      itemType: Tag
      behavior: Tag
      narrative: Tag
    }
  }
}

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

export interface Dungeon extends TagAndTallyLocation {
  numberOfRooms: number
  theme: Tag
  objective: Encounter
  level: number
  rooms: Room[]
}

export const exitDirections = [
  'north',
  'east',
  'south',
  'west',
  'northeast',
  'southeast',
  'southwest',
  'northwest',
]
export type ExitDirections = (typeof exitDirections)[number]

export interface Room extends TagAndTallyLocation {
  exits: Exits
  contents: PointOfInterest[]
}

export interface Exits {
  [dir: ExitDirections]: Exit
}

export interface Exit {
  level: number
  reinforced?: boolean
  secret?: boolean
  locked?: boolean
  trapped?: boolean
}

export interface Encounter extends TagAndTallyObject {
  structure: '[verb] [adjective] [noun]'
  tags: {
    verb: Tag
    adjective: Tag
    noun: Tag
  }
}

export interface Lair extends TagAndTallyObject {
  sentence: {
    structure: '[Name] is a [descriptive] [location] that [feature] and [role].'
    tags: {
      descriptive: Tag
      location: Tag
      feature: Tag
      role: Tag
    }
  }
  numberOfRooms: number
  creature: Creature
  rooms: Room[]
}

export interface Hex extends TagAndTallyObject {
  terrain: OverlandTerrain | DistrictTypes
  feature: OverlandFeatures | UrbanFeatures
  pointOfInterest: PointOfInterest
  resources: Resource[]
}

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
export const resourceType = ['Ore', 'Wood', 'Fiber', 'Liquid', 'Plants']
export type ResourceType = (typeof resourceType)[number]

export const rarity = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary']
export type Rarity = (typeof rarity)[number]

export interface Faction extends TagAndTallyObject {
  sentence: {
    structure: '[Name] is a [descriptor] [organization] that [function] and [secret].'
    tags: {
      descriptor: Tag
      organization: Tag
      function: Tag
      secret: Tag
    }
  }
  leader: NPC | Character
  location: Location
}

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
  wounds?: Wound[]
}

export const woundTypes = ['Strain', 'Lingering Trauma', 'Debilitating Injury', 'Lasting Scar']
export type WoundTypes = (typeof woundTypes)[number]

export interface Wound {
  type: WoundTypes
  tag: Tag
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

export interface Equipment {
  wealth: number
  armor: Armor
  weapon: Weapon
  gear: Gear[]
  storage?: Gear[]
}

export type Gear = Armor | Weapon | Item | Trap | Consumable

export const armorMaterial = ['Ore', 'Fiber', 'Bone', 'Leather', 'Scale']
export type ArmorMaterial = (typeof armorMaterial)[number]

export const weaponMaterial = ['Ore', 'Wood', 'Bone', 'Claw', 'Fang', 'Horn']
export type WeaponMaterial = (typeof weaponMaterial)[number]

export const armorType = ['Light', 'Medium', 'Heavy']
export type ArmorType = (typeof armorType)[number]

export interface Armor extends TagAndTallyObject {
  sentence: {
    structure: '[Name] is a [descriptor] [material] [armorType] that [special].'
    tags: {
      descriptor: Tag
      material: ArmorMaterial | string
      armorType: ArmorType
      special: Tag
    }
  }
}

export const weaponType = [
  'Sword',
  'Axe',
  'Mace',
  'Bow',
  'Crossbow',
  'Staff',
  'Wand',
  'Dagger',
  'Spear',
  'Halberd',
  'Flail',
  'Morningstar',
  'Warhammer',
  'Greatsword',
]
export type WeaponType = (typeof weaponType)[number]

export const damageType = [
  'Physical',
  'Psychic',
  'Elemental',
  'Necrotic',
  'Radiant',
  'Shadow',
  'Chaos',
  'Toxic',
]
export type DamageType = (typeof damageType)[number]

export interface Weapon extends TagAndTallyObject {
  sentence: {
    structure: '[Name] is a [descriptor] [material] [weaponType] that does [damageType] damage and [special].'
    tags: {
      descriptor: Tag
      material: WeaponMaterial | string
      weaponType: WeaponType | string
      damageType: DamageType
      special: Tag
    }
  }
}

export const itemType = [
  'Cloak',
  'Helmet/Hat',
  'Guantlet/Gloves',
  'Boots/Shoes',
  'Ring',
  'Necklace',
  'Belt',
  'Container',
  'Kit/Tool',
  'Trinket',
]
export type ItemType = (typeof itemType)[number]

export interface Item extends TagAndTallyObject {
  sentence: {
    structure: '[Name] is a [descriptor] [itemType] that [special].'
    tags: {
      descriptor: Tag
      itemType: ItemType | string
      special: Tag
    }
  }
}

export interface Trap extends TagAndTallyObject {
  sentence: {
    structure: '[Name] is a [descriptor] [trapType] that [triggerCondition] and [effect].'
    tags: {
      descriptor: Tag
      trapType: TrapType | string
      triggerCondition: Tag
      effect: Tag
    }
  }
}

export const trapType = [
  'Pitfall',
  'Snare',
  'Pressure Plate',
  'Tripwire',
  'Blade Mechanism',
  'Gas Vent',
  'Rune Glyph',
  'Illusion Ward',
  'Explosive Charge',
  'Mimic Trap',
  'Collapsing Zone',
  'Magnetic Lure',
]
export type TrapType = (typeof trapType)[number]

export interface Consumable extends TagAndTallyObject {
  sentence: {
    structure: '[Name] is a [descriptor] [consumableType] that [effect] and [special].'
    tags: {
      descriptor: Tag
      consumableType: ConsumableType | string
      effect: Tag
      special: Tag
    }
  }
}

export const consumableType = ['Food/Meal/Ration', 'Potion', 'Ammunition', 'Scroll']
export type ConsumableType = (typeof consumableType)[number]

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

export const sceneType = [
  'Confrontation',
  'Discovery',
  'Connection',
  'Reflection',
  'Transition',
  'Complication',
  'Flashback',
  'Preparation',
]
export type SceneType = (typeof sceneType)[number]

export interface Scene extends TagAndTallyObject {
  sentence: {
    structure: 'This scene is a [descriptor] [sceneType] that [effect].'
    tags: {
      descriptor: Tag
      sceneType: SceneType | string
      effect: Tag
    }
  }
  weather: Tag
  timeOfDay: Tag
  dayOfWeek: Tag
  phaseOfMoon: Tag
  season: Tag
  location: TagAndTallyLocation
  npcs?: NPC[]
  creatures?: Creature[]
  items?: Gear[]
  traps?: Trap[]
  quests?: Quest[]
  hidden?: TagAndTallyObject[]
}

export interface Quest extends Encounter {
  reward: Reward[]
  start: TagAndTallyLocation | NPC
  objective: TagAndTallyLocation | NPC | Creature
  turnIn: NPC | TagAndTallyLocation
  type: QuestType
}

export const questType = [
  'Find',
  'Collect',
  'Hunt',
  'Investigate',
  'Deliver',
  'Destroy',
  'Explore',
  'Build',
  'Influence',
  'Infiltrate',
]
export type QuestType = (typeof questType)[number]

export interface Reward {
  type: RewardType
  tag: Tag
}

export const rewardType = [
  'Gold',
  'Item',
  'Knowledge',
  'Relationship',
  'Favor',
  'Status',
  'Power',
  'Influence',
  'Invisibility',
  'Invisibility',
  'Invisibility',
]
export type RewardType = (typeof rewardType)[number]
