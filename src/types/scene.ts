import type { Creature, NPC } from './creatures'
import type { Gear, Trap } from './gear'
import type { Encounter } from './locations'
import type { Tag, TagAndTallyLocation } from './tag-and-tally'

import type { TagAndTallyObject } from './tag-and-tally'

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
