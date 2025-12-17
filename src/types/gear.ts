import type { Tag } from './tag-and-tally'

import type { TagAndTallyObject } from './tag-and-tally'

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
