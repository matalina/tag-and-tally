import type { Resource, ResourceType, Rarity } from '@/types/resources'
import type { Tag } from '@/types/tag-and-tally'

// Helper function to create a simple trait tag
function createTraitTag(tag: string): Tag {
  return {
    tag,
    type: {
      name: 'trait',
      type: 'generic',
      tiered: false,
      duration: 'permanent',
    },
  }
}

// Helper function to create a resource
function createResource(
  name: string,
  rarity: Rarity,
  descriptor: string,
  resourceType: ResourceType,
  special: string,
  level = 1,
): Resource {
  return {
    name,
    level,
    sentence: {
      structure: '[Name] is a [rarity] [descriptor] [resourceType] that [special].',
      tags: {
        rarity,
        descriptor: createTraitTag(descriptor),
        resourceType,
        special: createTraitTag(special),
      },
    },
    toString: function () {
      return `Level ${this.level} ${this.name} is a ${this.sentence.tags.rarity} ${this.sentence.tags.descriptor.tag} ${this.sentence.tags.resourceType} that ${this.sentence.tags.special.tag}.`
    },
  }
}

// Essence Resources
export const essenceResources: Record<string, Resource> = {
  airEssence: createResource(
    'Air Essence',
    'Rare',
    'whispering',
    'Essence',
    'shimmers with invisible currents',
  ),
  earthEssence: createResource(
    'Earth Essence',
    'Rare',
    'dense',
    'Essence',
    'feels immovably solid',
  ),
  waterEssence: createResource(
    'Water Essence',
    'Rare',
    'fluid',
    'Essence',
    'ripples with shifting depth',
  ),
  fireEssence: createResource(
    'Fire Essence',
    'Rare',
    'burning',
    'Essence',
    'glows with inner heat',
  ),
  lifeEssence: createResource(
    'Life Essence',
    'Rare',
    'vital',
    'Essence',
    'pulses with raw vitality',
  ),
  deathEssence: createResource('Death Essence', 'Rare', 'cold', 'Essence', 'saps warmth and vigor'),
  mindEssence: createResource(
    'Mind Essence',
    'Rare',
    'intricate',
    'Essence',
    'thrums with thought and awareness',
  ),
  timeEssence: createResource(
    'Time Essence',
    'Rare',
    'fluid',
    'Essence',
    'shifts subtly out of sync',
  ),
  spaceEssence: createResource(
    'Space Essence',
    'Rare',
    'distorting',
    'Essence',
    'bends perception around it',
  ),
  soundEssence: createResource(
    'Sound Essence',
    'Rare',
    'vibrating',
    'Essence',
    'echoes faintly in silence',
  ),
  illusionEssence: createResource(
    'Illusion Essence',
    'Rare',
    'shimmering',
    'Essence',
    'flickers between forms',
  ),
  shadowEssence: createResource(
    'Shadow Essence',
    'Rare',
    'darkened',
    'Essence',
    'absorbs nearby light',
  ),
  lightEssence: createResource(
    'Light Essence',
    'Rare',
    'luminous',
    'Essence',
    'glows softly in darkness',
  ),
}

// Creature Parts - Organic
export const organicCreatureParts: Record<string, Resource> = {
  eye: createResource('Eye', 'Common', 'keen', 'Creature Parts', 'captures light precisely'),
  bone: createResource(
    'Bone',
    'Common',
    'sturdy',
    'Creature Parts',
    'resists breaking under force',
  ),
  flesh: createResource('Flesh', 'Common', 'supple', 'Creature Parts', 'stretches without tearing'),
  claw: createResource('Claw', 'Common', 'hardened', 'Creature Parts', 'retains its sharpness'),
  horn: createResource('Horn', 'Uncommon', 'dense', 'Creature Parts', 'can withstand heavy impact'),
  heart: createResource('Heart', 'Rare', 'vital', 'Creature Parts', 'pulses with life energy'),
  brain: createResource(
    'Brain',
    'Legendary',
    'complex',
    'Creature Parts',
    'holds extraordinary instinct and memory',
  ),
  hair: createResource('Hair', 'Common', 'flexible', 'Creature Parts', 'shimmers in light'),
  teeth: createResource('Teeth', 'Common', 'hardened', 'Creature Parts', 'retains a sharp edge'),
  liver: createResource(
    'Liver',
    'Uncommon',
    'dense',
    'Creature Parts',
    'filters impurities efficiently',
  ),
  hide: createResource('Hide', 'Uncommon', 'tough', 'Creature Parts', 'resists cuts and abrasions'),
  pincer: createResource(
    'Pincer',
    'Uncommon',
    'strong',
    'Creature Parts',
    'closes with great force',
  ),
  stinger: createResource(
    'Stinger',
    'Rare',
    'barbed',
    'Creature Parts',
    'retains venom after removal',
  ),
  scales: createResource(
    'Scales',
    'Rare',
    'overlapping',
    'Creature Parts',
    'deflects impacts effectively',
  ),
}

// Creature Parts - Glands/Fluids
export const glandFluidCreatureParts: Record<string, Resource> = {
  blood: createResource('Blood', 'Common', 'vital', 'Creature Parts', 'pulses with life'),
  ichor: createResource('Ichor', 'Common', 'ethereal', 'Creature Parts', 'shimmers strangely'),
  acid: createResource('Acid', 'Uncommon', 'corrosive', 'Creature Parts', 'bubbles subtly'),
  undyingHeart: createResource(
    'Undying Heart',
    'Rare',
    'resilient',
    'Creature Parts',
    'beats even in death',
  ),
  congealedBlood: createResource(
    'Congealed Blood',
    'Uncommon',
    'thickened',
    'Creature Parts',
    'retains its form even when removed from the body',
  ),
  undyingFlesh: createResource(
    'Undying Flesh',
    'Rare',
    'resilient',
    'Creature Parts',
    'remains intact long after death',
  ),
  gland: createResource(
    'Gland',
    'Common',
    'secretory',
    'Creature Parts',
    'produces subtle compounds',
  ),
  mucus: createResource('Mucus', 'Common', 'slimy', 'Creature Parts', 'sticks lightly to surfaces'),
  vesicle: createResource(
    'Vesicle',
    'Uncommon',
    'fragile',
    'Creature Parts',
    'swells under pressure',
  ),
  breathSac: createResource(
    'Breath Sac',
    'Rare',
    'elastic',
    'Creature Parts',
    'expands and contracts smoothly',
  ),
}

// Creature Parts - Constructs
export const constructCreatureParts: Record<string, Resource> = {
  gears: createResource(
    'Gears',
    'Common',
    'precision',
    'Creature Parts',
    'moves smoothly under strain',
  ),
  oil: createResource('Oil', 'Common', 'viscous', 'Creature Parts', 'shines when light hits it'),
  plating: createResource(
    'Plating',
    'Uncommon',
    'reinforced',
    'Creature Parts',
    'resists wear and tear',
  ),
  lifespark: createResource(
    'Lifespark',
    'Rare',
    'volatile',
    'Creature Parts',
    'flickers unpredictably',
  ),
  instructions: createResource(
    'Instructions',
    'Legendary',
    'coded',
    'Creature Parts',
    'contains intricate operational knowledge',
  ),
  stone: createResource('Stone', 'Rare', 'dense', 'Creature Parts', 'withstands heavy impact'),
}

// Creature Parts - Magical
export const magicalCreatureParts: Record<string, Resource> = {
  primalHeart: createResource(
    'Primal Heart',
    'Legendary',
    'arcane',
    'Creature Parts',
    'thrums with raw magical energy',
  ),
  volatileMote: createResource(
    'Volatile Mote',
    'Uncommon',
    'flickering',
    'Creature Parts',
    'shifts unpredictably in energy',
  ),
  primordialDust: createResource(
    'Primordial Dust',
    'Uncommon',
    'ancient',
    'Creature Parts',
    'resonates with elemental forces',
  ),
  core: createResource(
    'Core',
    'Rare',
    'pulsing',
    'Creature Parts',
    'radiates concentrated essence',
  ),
  etherealIchor: createResource(
    'Ethereal Ichor',
    'Rare',
    'luminous',
    'Creature Parts',
    'flows like liquid light',
  ),
  psyche: createResource(
    'Psyche',
    'Legendary',
    'complex',
    'Creature Parts',
    'contains consciousness beyond the physical',
  ),
  mainEye: createResource(
    'Main Eye',
    'Legendary',
    'all-seeing',
    'Creature Parts',
    'perceives beyond normal sight',
  ),
  titanHeart: createResource(
    'Titan Heart',
    'Legendary',
    'immense',
    'Creature Parts',
    'beats with unstoppable force',
  ),
  primeBone: createResource(
    'Prime Bone',
    'Legendary',
    'dense',
    'Creature Parts',
    "stores the creature's primal strength",
  ),
  soul: createResource(
    'Soul',
    'Legendary',
    'ethereal',
    'Creature Parts',
    'lingers with undying presence',
  ),
}

// Creature Parts - Plants
export const plantCreatureParts: Record<string, Resource> = {
  leaves: createResource(
    'Leaves',
    'Common',
    'veined',
    'Creature Parts',
    'rustles with a subtle life',
  ),
  roots: createResource(
    'Roots',
    'Common',
    'fibrous',
    'Creature Parts',
    'clings firmly to surfaces',
  ),
  bark: createResource(
    'Bark',
    'Uncommon',
    'toughened',
    'Creature Parts',
    'resists tearing and abrasion',
  ),
  seeds: createResource(
    'Seeds',
    'Uncommon',
    'resilient',
    'Creature Parts',
    'survives harsh conditions',
  ),
  pollen: createResource('Pollen', 'Rare', 'dusty', 'Creature Parts', 'carries latent vitality'),
}

// Resources - Ore
export const oreResources: Record<string, Resource> = {
  // Armor/Weapon Grade Ore
  copper: createResource('Copper', 'Common', 'conductive', 'Ore', 'is easy to shape'),
  iron: createResource('Iron', 'Uncommon', 'resilient', 'Ore', 'holds an edge well'),
  mythril: createResource('Mythril', 'Rare', 'lightweight', 'Ore', 'is exceptionally strong'),
  adamantine: createResource(
    'Adamantine',
    'Legendary',
    'balanced',
    'Ore',
    'is nearly indestructible',
  ),
  // Precious Ore
  silver: createResource('Silver', 'Common', 'radiant', 'Ore', 'reflects hostile magic'),
  gold: createResource('Gold', 'Uncommon', 'malleable', 'Ore', 'amplifies enchantments'),
  platinum: createResource('Platinum', 'Rare', 'immutable', 'Ore', 'anchors powerful magic'),
  aetherium: createResource('Aetherium', 'Legendary', 'transcendent', 'Ore', 'stabilizes magic'),
}

// Resources - Wood
export const woodResources: Record<string, Resource> = {
  oak: createResource('Oak', 'Common', 'sturdy', 'Wood', 'resists splintering'),
  pine: createResource('Pine', 'Common', 'flexible', 'Wood', 'is easy to work'),
  ironwood: createResource('Ironwood', 'Uncommon', 'dense', 'Wood', 'is as strong as metal'),
  heartwood: createResource('Heartwood', 'Rare', 'vital', 'Wood', 'retains living essence'),
  elderwood: createResource('Elderwood', 'Legendary', 'ancient', 'Wood', 'remembers'),
}

// Resources - Fiber
export const fiberResources: Record<string, Resource> = {
  cotton: createResource('Cotton', 'Common', 'soft', 'Fiber', 'is easy to spin'),
  flax: createResource('Flax', 'Common', 'durable', 'Fiber', 'that is strong'),
  spidersilk: createResource(
    'Spidersilk',
    'Uncommon',
    'tensile',
    'Fiber',
    'is stronger than leather',
  ),
  twineleafe: createResource('Twineleafe', 'Rare', 'flexible', 'Fiber', 'bends without breaking'),
  moonthread: createResource(
    'Moonthread',
    'Legendary',
    'luminous',
    'Fiber',
    'retains ambient magic',
  ),
}

// Resources - Liquid
export const liquidResources: Record<string, Resource> = {
  water: createResource('Water', 'Common', 'clear', 'Liquid', 'forms the basis of life'),
  alcohol: createResource('Alcohol', 'Common', 'volatile', 'Liquid', 'burns easily'),
  acidLiquid: createResource('Acid', 'Uncommon', 'corrosive', 'Liquid', 'reacts violently'),
  essenceLiquid: createResource('Essence', 'Rare', 'mystical', 'Liquid', 'holds latent magic'),
  aether: createResource('Aether', 'Legendary', 'luminous', 'Liquid', 'channels raw magic'),
}

// Resources - Plants
export const plantResources: Record<string, Resource> = {
  // Medicinal Herbs
  wildflowers: createResource('Wildflowers', 'Common', 'soothing', 'Plants', 'eases minor aches'),
  herbs: createResource('Herbs', 'Common', 'refreshing', 'Plants', 'revitalizes the senses'),
  rootstock: createResource(
    'Rootstock',
    'Uncommon',
    'calming',
    'Plants',
    'promotes mental clarity',
  ),
  silverleaf: createResource('Silverleaf', 'Rare', 'restorative', 'Plants', 'accelerates healing'),
  lifebloom: createResource('Lifebloom', 'Legendary', 'vital', 'Plants', 'heals grievous wounds'),
  // Poisonous Plants
  berries: createResource('Berries', 'Common', 'toxic', 'Plants', 'cause mild illness'),
  nightshade: createResource('Nightshade', 'Common', 'venoumous', 'Plants', 'induces weakness'),
  hemlock: createResource('Hemlock', 'Uncommon', 'potent', 'Plants', 'causes hallucinations'),
  deathbloom: createResource('Deathbloom', 'Rare', 'deadly', 'Plants', 'can kill swiftly'),
  soulvine: createResource('Soulvine', 'Legendary', 'cursed', 'Plants', 'drains vitality'),
  // Magical Properties
  fungi: createResource('Fungi', 'Common', 'mystical', 'Plants', 'enhances minor spells'),
  wyrdroot: createResource('Wyrdroot', 'Common', 'enchanted', 'Plants', 'amplifies spellcasting'),
  mistbark: createResource('Mistbark', 'Uncommon', 'elemental', 'Plants', 'enhances the elements'),
  heartbloom: createResource('Heartbloom', 'Rare', 'arcane', 'Plants', 'stores ambient magic'),
  aetherstem: createResource(
    'Aetherstem',
    'Legendary',
    'ethereal',
    'Plants',
    'channels latent currents',
  ),
}

// Combined resources export
export const resources: Record<string, Resource> = {
  ...essenceResources,
  ...organicCreatureParts,
  ...glandFluidCreatureParts,
  ...constructCreatureParts,
  ...magicalCreatureParts,
  ...plantCreatureParts,
  ...oreResources,
  ...woodResources,
  ...fiberResources,
  ...liquidResources,
  ...plantResources,
}
