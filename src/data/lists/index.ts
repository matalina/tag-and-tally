import {
  districtTypes,
  overlandFeatures,
  overlandTerrain,
  pointOfInterestTypes,
  urbanFeatures,
} from '@/types/terrain'
import { keywords } from './keywords'
import type { RandomListState } from '@/types/random-lists'
import { exitDirections } from '@/types/locations'
import { relationshipStatus, woundTypes } from '@/types/characters'
import {
  armorMaterial,
  armorType,
  consumableType,
  damageType,
  itemType,
  weaponMaterial,
  weaponType,
} from '@/types/gear'
import { trapType } from '@/types/gear'
import { spellBase } from '@/types/spells'
import { spellType } from '@/types/spells'
import { spellAspect } from '@/types/spells'
import { questType, rewardType, sceneType } from '@/types/scene'
import { rarity, resourceType } from '@/types/resources'

export const lists: RandomListState = {
  [keywords.name]: keywords,
  'points-of-interest': { name: 'points-of-interest', list: pointOfInterestTypes },
  'overland-featuers': { name: 'overland-features', list: overlandFeatures },
  'overland-terrain': { name: 'overland-terrain', list: overlandTerrain },
  'district-types': { name: 'district-types', list: districtTypes },
  'urban-features': { name: 'urban-features', list: urbanFeatures },
  'exit-directions': { name: 'exit-directions', list: exitDirections },
  'wound-types': { name: 'wound-types', list: woundTypes },
  'armor-material': { name: 'armor-material', list: armorMaterial },
  'armor-type': { name: 'armor-type', list: armorType },
  'weapon-material': { name: 'weapon-material', list: weaponMaterial },
  'weapon-type': { name: 'weapon-type', list: weaponType },
  'damage-type': { name: 'damage-type', list: damageType },
  'item-type': { name: 'item-type', list: itemType },
  'consumable-type': { name: 'consumable-type', list: consumableType },
  'trap-type': { name: 'trap-type', list: trapType },
  'spell-base': { name: 'spell-base', list: spellBase },
  'spell-type': { name: 'spell-type', list: spellType },
  'spell-aspect': { name: 'spell-aspect', list: spellAspect },
  'quest-type': { name: 'quest-type', list: questType },
  'scene-type': { name: 'scene-type', list: sceneType },
  'reward-type': { name: 'reward-type', list: rewardType },
  'relationship-status': { name: 'relationship-status', list: relationshipStatus },
  rarity: { name: 'rarity', list: rarity },
  'resource-type': { name: 'resource-type', list: resourceType },
}
