import type { Tag, TagAndTallyLocation, TagAndTallyObject } from './tag-and-tally'
import type {
  DistrictTypes,
  OverlandFeatures,
  OverlandTerrain,
  PointOfInterest,
  UrbanFeatures,
} from './terrain'
import type { Creature, NPC } from './creatures'
import type { Resource } from './resources'
import type { Character } from './characters'

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

export const sides = ['1', '2', '3', '4', '5', '6']
export type SidesNumber = (typeof sides)[number]

export interface Sides {
  [side: SidesNumber]: OverlandTerrain | DistrictTypes
}

export interface Hex extends TagAndTallyObject {
  terrain: OverlandTerrain | DistrictTypes
  feature: OverlandFeatures | UrbanFeatures
  pointOfInterest: PointOfInterest
  resources: Resource[]
  sides: Sides
}

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
