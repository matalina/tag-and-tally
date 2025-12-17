import type { Creature, NPC } from './creatures'
import type { Dungeon, Encounter, Lair } from './locations'
import type { Tag, TagAndTallyObject } from './tag-and-tally'

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

export const pointOfInterestTypes = ['Clue', 'Creature', 'NPC', 'Dungeon', 'Lair', 'Encounter']
export type PointOfInterestTypes = (typeof pointOfInterestTypes)[number]

export interface PointOfInterest extends TagAndTallyObject {
  type: PointOfInterestTypes
  link: PointOfInterestLink
}
export type PointOfInterestLink = Clue[] | Creature | NPC | Dungeon | Encounter | Lair | string

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
