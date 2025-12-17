import type { RandomTable } from '@/types/random-tables'
import { useTablesStore } from '@/stores/random-tables'
import { DiceRoll } from '@dice-roller/rpg-dice-roller'

/* Discovery Tables */

export const fantasyDiscoveryVerb: RandomTable = {
  name: 'fantasy-discovery-verb',
  formula: '1d20',
  table: [
    { min: 1, max: 1, value: 'Whisper' },
    { min: 2, max: 2, value: 'Stumble' },
    { min: 3, max: 3, value: 'Observe' },
    { min: 4, max: 4, value: 'Hear' },
    { min: 5, max: 5, value: 'Unearth' },
    { min: 6, max: 6, value: 'Touch' },
    { min: 7, max: 7, value: 'Discover' },
    { min: 8, max: 8, value: 'Smell' },
    { min: 9, max: 9, value: 'Catch' },
    { min: 10, max: 10, value: 'Approach' },
    { min: 11, max: 11, value: 'Follow' },
    { min: 12, max: 12, value: 'Sense' },
    { min: 13, max: 13, value: 'Notice' },
    { min: 14, max: 14, value: 'Listen' },
    { min: 15, max: 15, value: 'Encounter' },
    { min: 16, max: 16, value: 'Trace' },
    { min: 17, max: 17, value: 'Step Over' },
    { min: 18, max: 18, value: 'Glimpse' },
    { min: 19, max: 19, value: 'Feel' },
    { min: 20, max: 20, value: 'Awaken' },
  ],
}

export const fantasyDiscoveryAdjective: RandomTable = {
  name: 'fantasy-discovery-adjective',
  formula: '1d20',
  table: [
    { min: 1, max: 1, value: 'Cracked' },
    { min: 2, max: 2, value: 'Silver' },
    { min: 3, max: 3, value: 'Hollow' },
    { min: 4, max: 4, value: 'Chiming' },
    { min: 5, max: 5, value: 'Twisted' },
    { min: 6, max: 6, value: 'Slick' },
    { min: 7, max: 7, value: 'Looming' },
    { min: 8, max: 8, value: 'Bitter' },
    { min: 9, max: 9, value: 'Pale' },
    { min: 10, max: 10, value: 'Broken' },
    { min: 11, max: 11, value: 'Faint' },
    { min: 12, max: 12, value: 'Burning' },
    { min: 13, max: 13, value: 'Tangled' },
    { min: 14, max: 14, value: 'Distant' },
    { min: 15, max: 15, value: 'Withered' },
    { min: 16, max: 16, value: 'Glowing' },
    { min: 17, max: 17, value: 'Ancient' },
    { min: 18, max: 18, value: 'Shifting' },
    { min: 19, max: 19, value: 'Prickling' },
    { min: 20, max: 20, value: 'Dormant' },
  ],
}

export const fantasyDiscoveryNoun: RandomTable = {
  name: 'fantasy-discovery-noun',
  formula: '1d20',
  table: [
    { min: 1, max: 1, value: 'Idol' },
    { min: 2, max: 2, value: 'Tracks' },
    { min: 3, max: 3, value: 'Tree' },
    { min: 4, max: 4, value: 'Wind' },
    { min: 5, max: 5, value: 'Relic' },
    { min: 6, max: 6, value: 'Stone' },
    { min: 7, max: 7, value: 'Shadow' },
    { min: 8, max: 8, value: 'Smoke' },
    { min: 9, max: 9, value: 'Glimmer' },
    { min: 10, max: 10, value: 'Archway' },
    { min: 11, max: 11, value: 'Light' },
    { min: 12, max: 12, value: 'Echo' },
    { min: 13, max: 13, value: 'Roots' },
    { min: 14, max: 14, value: 'Voice' },
    { min: 15, max: 15, value: 'Traveler' },
    { min: 16, max: 16, value: 'Markings' },
    { min: 17, max: 17, value: 'Threshold' },
    { min: 18, max: 18, value: 'Reflection' },
    { min: 19, max: 19, value: 'Presence' },
    { min: 20, max: 20, value: 'Spirit' },
  ],
}

/* Terrain Tables */

// TODO: on an 8 we need to roll again on this table and on a magical aspects table to generate the type of terrain
export const terrain: RandomTable = {
  name: 'terrain',
  formula: '1d8',
  table: [
    { min: 1, max: 1, value: 'Forest' },
    { min: 2, max: 2, value: 'Plains' },
    { min: 3, max: 3, value: 'Mountain' },
    { min: 4, max: 4, value: 'Swamp' },
    { min: 5, max: 5, value: 'Island' },
    { min: 6, max: 6, value: 'Desert' },
    { min: 7, max: 7, value: 'Wastelands' },
    { min: 8, max: 8, value: 'Magiclands' },
  ],
}

export const terrainFeature: RandomTable = {
  name: 'terrain-feature',
  formula: '1d12',
  table: [
    { min: 1, max: 1, value: 'Open Ground (Easy)' },
    { min: 2, max: 2, value: 'Elevated Paths (Easy)' },
    { min: 3, max: 3, value: 'Worn Trails (Easy)' },
    { min: 4, max: 4, value: 'Uneven Terrain (Rough)' },
    { min: 5, max: 5, value: 'Overgrown Passage (Rough)' },
    { min: 6, max: 6, value: 'Slippery Ground (Rough)' },
    { min: 7, max: 7, value: 'Rocky or Cracked Surface (Rough)' },
    { min: 8, max: 8, value: 'Dense Obstacles (Rough)' },
    { min: 9, max: 9, value: 'Hazardous Wildlife (Dangerous)' },
    { min: 10, max: 10, value: 'Environmental Hazard (Dangerous)' },
    { min: 11, max: 11, value: 'Unstable Ground (Dangerous)' },
    { min: 12, max: 12, value: 'Supernatural Distortion (Dangerous)' },
  ],
}

// TODO: Generate Functions
export const fantasyPointsOfInterest: RandomTable = {
  name: 'fantasy-points-of-interest',
  formula: '1d20',
  table: [
    { min: 1, max: 3, value: '1d4 Clues' },
    { min: 4, max: 7, value: 'Nothing' },
    { min: 8, max: 9, value: 'Wandering Creature' },
    { min: 10, max: 15, value: 'Wandering NPC' },
    { min: 16, max: 16, value: '1d8+4 Room Fantasy Dungeon' },
    { min: 17, max: 17, value: '1d4-1 Room Creature Lair' },
    { min: 18, max: 20, value: 'Terrain Specific Encounter' },
  ],
}

/* Dungeon Tables */

export const fantasyDungeonNameType: RandomTable = {
  name: 'fantasy-dungeon-name-type',
  formula: '1d20',
  table: [
    { min: 1, max: 1, value: 'Vault' },
    { min: 2, max: 2, value: 'Tomb' },
    { min: 3, max: 3, value: 'Labyrinth' },
    { min: 4, max: 4, value: 'Catacombs' },
    { min: 5, max: 5, value: 'Temple' },
    { min: 6, max: 6, value: 'Fortress' },
    { min: 7, max: 7, value: 'Mausoleum' },
    { min: 8, max: 8, value: 'Keep' },
    { min: 9, max: 9, value: 'Caverns' },
    { min: 10, max: 10, value: 'Sepulcher' },
    { min: 11, max: 11, value: 'Halls' },
    { min: 12, max: 12, value: 'Shrine' },
    { min: 13, max: 13, value: 'Crypt' },
    { min: 14, max: 14, value: 'Dungeon' },
    { min: 15, max: 15, value: 'Sanctum' },
    { min: 16, max: 16, value: 'Ruins' },
    { min: 17, max: 17, value: 'Caverns' },
    { min: 18, max: 18, value: 'Asylum' },
    { min: 19, max: 19, value: 'Tower' },
    { min: 20, max: 20, value: 'Spire' },
  ],
}

export const fantasyDungeonNameDescriptor: RandomTable = {
  name: 'fantasy-dungeon-name-descriptor',
  formula: '1d20',
  table: [
    { min: 1, max: 1, value: 'Forsaken' },
    { min: 2, max: 2, value: 'Forgotten' },
    { min: 3, max: 3, value: 'Sunken' },
    { min: 4, max: 4, value: 'Shattered' },
    { min: 5, max: 5, value: 'Echoing' },
    { min: 6, max: 6, value: 'Ruined' },
    { min: 7, max: 7, value: 'Blackened' },
    { min: 8, max: 8, value: 'Hollow' },
    { min: 9, max: 9, value: 'Burning' },
    { min: 10, max: 10, value: 'Icy' },
    { min: 11, max: 11, value: 'Crumbling' },
    { min: 12, max: 12, value: 'Weeping' },
    { min: 13, max: 13, value: 'Bloodstained' },
    { min: 14, max: 14, value: 'Whispering' },
    { min: 15, max: 15, value: 'Desecrated' },
    { min: 16, max: 16, value: 'Chained' },
    { min: 17, max: 17, value: 'Unholy' },
    { min: 18, max: 18, value: 'Silent' },
    { min: 19, max: 19, value: 'Wailing' },
    { min: 20, max: 20, value: 'Eldritch' },
  ],
}

export const fantasyDungeonNameThreat: RandomTable = {
  name: 'fantasy-dungeon-name-threat',
  formula: '1d20',
  table: [
    { min: 1, max: 1, value: 'Shadows' },
    { min: 2, max: 2, value: 'the Lost' },
    { min: 3, max: 3, value: 'Wrath' },
    { min: 4, max: 4, value: 'the Forsaken' },
    { min: 5, max: 5, value: 'Madness' },
    { min: 6, max: 6, value: 'the Damned' },
    { min: 7, max: 7, value: 'Nightmares' },
    { min: 8, max: 8, value: 'the Fallen' },
    { min: 9, max: 9, value: 'Curses' },
    { min: 10, max: 10, value: 'the Betrayed' },
    { min: 11, max: 11, value: 'Agony' },
    { min: 12, max: 12, value: 'the Doomed' },
    { min: 13, max: 13, value: 'Elders' },
    { min: 14, max: 14, value: 'the Sealed' },
    { min: 15, max: 15, value: 'the Banished' },
    { min: 16, max: 16, value: 'Torment' },
    { min: 17, max: 17, value: 'the Bound' },
    { min: 18, max: 18, value: 'Whispers' },
    { min: 19, max: 19, value: 'Chaos' },
    { min: 20, max: 20, value: 'the Devoured' },
  ],
}

export const fantasyDungeonNameAdjective: RandomTable = {
  name: 'fantasy-dungeon-name-adjective',
  formula: '1d20',
  table: [
    { min: 1, max: 1, value: 'Twisted' },
    { min: 2, max: 2, value: 'Cursed' },
    { min: 3, max: 3, value: 'Haunted' },
    { min: 4, max: 4, value: 'Ancient' },
    { min: 5, max: 5, value: 'Abyssal' },
    { min: 6, max: 6, value: 'Eldritch' },
    { min: 7, max: 7, value: 'Dreaded' },
    { min: 8, max: 8, value: 'Forgotten' },
    { min: 9, max: 9, value: 'Shadowed' },
    { min: 10, max: 10, value: 'Forbidden' },
    { min: 11, max: 11, value: 'Sinister' },
    { min: 12, max: 12, value: 'Malevolent' },
    { min: 13, max: 13, value: 'Blighted' },
    { min: 14, max: 14, value: 'Ominous' },
    { min: 15, max: 15, value: 'Eternal' },
    { min: 16, max: 16, value: 'Infernal' },
    { min: 17, max: 17, value: 'Hollow' },
    { min: 18, max: 18, value: 'Doomed' },
    { min: 19, max: 19, value: 'Malevolent' },
    { min: 20, max: 20, value: 'Black' },
  ],
}

function generateFantasyDungeonNamePattern1(): string {
  const tables = useTablesStore()
  const descriptor = tables.random('fantasy-dungeon-name-descriptor').result
  const type = tables.random('fantasy-dungeon-name-type').result
  return `The ${descriptor} ${type}`
}

function generateFantasyDungeonNamePattern2(): string {
  const tables = useTablesStore()
  const type = tables.random('fantasy-dungeon-name-type').result
  const threat = tables.random('fantasy-dungeon-name-threat').result
  return `The ${type} of ${threat}`
}

function generateFantasyDungeonNamePattern3(): string {
  const tables = useTablesStore()
  const adjective = tables.random('fantasy-dungeon-name-adjective').result
  const type = tables.random('fantasy-dungeon-name-type').result
  return `${adjective} ${type}`
}

export const fantasyDungeonNamePattern: RandomTable = {
  name: 'fantasy-dungeon-name-pattern',
  formula: '1d6',
  table: [
    { min: 1, max: 2, value: generateFantasyDungeonNamePattern1 },
    { min: 3, max: 4, value: generateFantasyDungeonNamePattern2 },
    { min: 5, max: 6, value: generateFantasyDungeonNamePattern3 },
  ],
}

function fantasyFindSomething(): string {
  const tables = useTablesStore()
  const artifact = tables.random('fantasy-objective-artifact').result
  return `Find ${artifact}`
}

function fantasyCollectThings(): string {
  const tables = useTablesStore()
  const diceRoll = new DiceRoll('2d4')
  const count = diceRoll.total
  const thing = tables.random('fantasy-objective-things').result
  return `Collect ${count} ${thing}`
}

function fantasyKillCreatures(): string {
  const tables = useTablesStore()
  const creatures = tables.random('fantasy-objective-creatures').result
  return `Kill the ${creatures}`
}

function fantasyRescueSomeone(): string {
  const tables = useTablesStore()
  const someone = tables.random('fantasy-objective-someone').result
  return `Rescue ${someone}`
}

function fantasyClearDungeon(): string {
  const tables = useTablesStore()
  const dungeonName = tables.random('fantasy-dungeon-name-pattern').result
  return `Clear the ${dungeonName} (Dungeon)`
}

function fantasyKillBoss(): string {
  const tables = useTablesStore()
  const boss = tables.random('fantasy-objective-boss').result
  return `Kill the ${boss}`
}

export const fantasyObjectivePattern: RandomTable = {
  name: 'fantasy-objective-pattern',
  formula: '1d6',
  table: [
    { min: 1, max: 1, value: fantasyFindSomething },
    { min: 2, max: 2, value: fantasyCollectThings },
    { min: 3, max: 3, value: fantasyKillCreatures },
    { min: 4, max: 4, value: fantasyRescueSomeone },
    { min: 5, max: 5, value: fantasyClearDungeon },
    { min: 6, max: 6, value: fantasyKillBoss },
  ],
}

export const fantasyObjectiveArtifact: RandomTable = {
  name: 'fantasy-objective-artifact',
  formula: '1d20',
  table: [
    { min: 1, max: 1, value: 'Orb of Eternity' },
    { min: 2, max: 2, value: 'Crown of Shadows' },
    { min: 3, max: 3, value: 'Blade of the Void' },
    { min: 4, max: 4, value: 'Phoenix Heart' },
    { min: 5, max: 5, value: 'Arcane Codex' },
    { min: 6, max: 6, value: 'Sunstone Amulet' },
    { min: 7, max: 7, value: 'Bloodstone Dagger' },
    { min: 8, max: 8, value: 'Rune-Carved Shield' },
    { min: 9, max: 9, value: 'Shard of Oblivion' },
    { min: 10, max: 10, value: 'Chalice of Ages' },
    { min: 11, max: 11, value: 'Starforged Gauntlet' },
    { min: 12, max: 12, value: 'Blackened Grimoire' },
    { min: 13, max: 13, value: 'Heart of the Forest' },
    { min: 14, max: 14, value: 'Emberforged Helm' },
    { min: 15, max: 15, value: 'Mask of Whispers' },
    { min: 16, max: 16, value: 'Crown of the Undying' },
    { min: 17, max: 17, value: 'Twilight Lantern' },
    { min: 18, max: 18, value: 'Everfrost Crystal' },
    { min: 19, max: 19, value: 'Doomforged Talisman' },
    { min: 20, max: 20, value: 'Tome of the Ancients' },
  ],
}

export const fantasyObjectiveThings: RandomTable = {
  name: 'fantasy-objective-things',
  formula: '1d20',
  table: [
    { min: 1, max: 1, value: 'Ancient Tomes' },
    { min: 2, max: 2, value: 'Cursed Relics' },
    { min: 3, max: 3, value: 'Stolen Soul Shards' },
    { min: 4, max: 4, value: 'Dragon Scales' },
    { min: 5, max: 5, value: 'Ghostly Essences' },
    { min: 6, max: 6, value: 'Mystic Runes' },
    { min: 7, max: 7, value: 'Forbidden Idols' },
    { min: 8, max: 8, value: 'Essence Vials' },
    { min: 9, max: 9, value: 'Arcane Crystals' },
    { min: 10, max: 10, value: 'Dark Artifacts' },
    { min: 11, max: 11, value: 'Moonflower Petals' },
    { min: 12, max: 12, value: 'Fungal Spores' },
    { min: 13, max: 13, value: 'Enchanted Roots' },
    { min: 14, max: 14, value: 'Sacred Relics' },
    { min: 15, max: 15, value: 'Phantom Eyes' },
    { min: 16, max: 16, value: 'Obsidian Shards' },
    { min: 17, max: 17, value: 'Shattered Sigils' },
    { min: 18, max: 18, value: 'Fey Trinkets' },
    { min: 19, max: 19, value: 'Blood-Soaked Scrolls' },
    { min: 20, max: 20, value: 'Warding Stones' },
  ],
}

export const fantasyObjectiveCreatures: RandomTable = {
  name: 'fantasy-objective-creatures',
  formula: '1d20',
  table: [
    { min: 1, max: 1, value: 'Skeleton Warriors' },
    { min: 2, max: 2, value: 'Wraiths' },
    { min: 3, max: 3, value: 'Specters' },
    { min: 4, max: 4, value: 'Ghouls' },
    { min: 5, max: 5, value: 'Restless Spirits' },
    { min: 6, max: 6, value: 'Basilisks' },
    { min: 7, max: 7, value: 'Undead Horrors' },
    { min: 8, max: 8, value: 'Infernal Hounds' },
    { min: 9, max: 9, value: 'Cultists' },
    { min: 10, max: 10, value: 'Mummified Priests' },
    { min: 11, max: 11, value: 'Oozes' },
    { min: 12, max: 12, value: 'Cursed Knights' },
    { min: 13, max: 13, value: 'Poisonous Serpents' },
    { min: 14, max: 14, value: 'Elemental Guardians' },
    { min: 15, max: 15, value: 'Cursed Beasts' },
    { min: 16, max: 16, value: 'Werewolves' },
    { min: 17, max: 17, value: 'Animated Statues' },
    { min: 18, max: 18, value: 'Harpies' },
    { min: 19, max: 19, value: 'Shadow Beasts' },
    { min: 20, max: 20, value: 'Arcane Sentinels' },
  ],
}

export const fantasyObjectiveSomeone: RandomTable = {
  name: 'fantasy-objective-someone',
  formula: '1d20',
  table: [
    { min: 1, max: 1, value: 'Trapped Noble' },
    { min: 2, max: 2, value: 'Lost Scholar' },
    { min: 3, max: 3, value: 'Kidnapped Child' },
    { min: 4, max: 4, value: 'Fae Prisoner' },
    { min: 5, max: 5, value: 'Stolen Heir' },
    { min: 6, max: 6, value: 'Trapped Mage' },
    { min: 7, max: 7, value: "Merchant's Daughter" },
    { min: 8, max: 8, value: 'Sealed Guardian' },
    { min: 9, max: 9, value: 'Doomed Prince' },
    { min: 10, max: 10, value: 'Forgotten Hero' },
    { min: 11, max: 11, value: 'Bound Celestial' },
    { min: 12, max: 12, value: 'Fading Ghost' },
    { min: 13, max: 13, value: 'Runaway Prince' },
    { min: 14, max: 14, value: 'Hidden Oracle' },
    { min: 15, max: 15, value: 'Captured Ranger' },
    { min: 16, max: 16, value: 'Forgotten Monk' },
    { min: 17, max: 17, value: 'Broken Construct' },
    { min: 18, max: 18, value: 'Wandering Scribe' },
    { min: 19, max: 19, value: 'Missing Alchemist' },
    { min: 20, max: 20, value: 'Exiled Heir' },
  ],
}

export const fantasyObjectiveBoss: RandomTable = {
  name: 'fantasy-objective-boss',
  formula: '1d20',
  table: [
    { min: 1, max: 1, value: 'Vampire Lord' },
    { min: 2, max: 2, value: 'Demon Overlord' },
    { min: 3, max: 3, value: 'Corrupted Paladin' },
    { min: 4, max: 4, value: 'Fallen Knight' },
    { min: 5, max: 5, value: 'Mad Sorcerer' },
    { min: 6, max: 6, value: 'Necromancer' },
    { min: 7, max: 7, value: 'Shadow Queen' },
    { min: 8, max: 8, value: 'Ancient Dragon' },
    { min: 9, max: 9, value: 'Warlock Lord' },
    { min: 10, max: 10, value: 'Lich-King' },
    { min: 11, max: 11, value: 'Chaos Entity' },
    { min: 12, max: 12, value: 'Infernal Tyrant' },
    { min: 13, max: 13, value: 'Bloodthirsty Warlord' },
    { min: 14, max: 14, value: 'Fey Trickster' },
    { min: 15, max: 15, value: 'Living Nightmare' },
    { min: 16, max: 16, value: 'Undead Pharaoh' },
    { min: 17, max: 17, value: 'Demon Prince' },
    { min: 18, max: 18, value: 'Eldritch Horror' },
    { min: 19, max: 19, value: 'The Devourer' },
    { min: 20, max: 20, value: 'Fallen God' },
  ],
}

// TODO: Generate functions
export const fantasyContents: RandomTable = {
  name: 'fantasy-contents',
  formula: '1d20',
  table: [
    { min: 1, max: 3, value: 'Nothing' },
    { min: 4, max: 5, value: 'Trap' },
    { min: 5, max: 9, value: '1d4 Level 3 Creatures' },
    { min: 10, max: 11, value: 'Ally NPC' },
    { min: 12, max: 15, value: 'Rival NPC' },
    { min: 16, max: 17, value: 'Trick/First Encounter' },
    { min: 13, max: 20, value: 'Survivor' },
  ],
}

export const fantasyDoor: RandomTable = {
  name: 'fantasy-door',
  formula: '1d6',
  table: [
    { min: 1, max: 1, value: 'Regular (L0) unlocked door' },
    { min: 2, max: 2, value: 'Regular (L1) locked door' },
    { min: 3, max: 3, value: 'Trapped regular(L3) door' },
    { min: 4, max: 4, value: 'Reinforced (L2) unlocked door' },
    { min: 5, max: 5, value: 'Reinforced (L4) locked door' },
    { min: 6, max: 6, value: 'Trapped (L5) reinforced door' },
  ],
}

export const fantasySecrets: RandomTable = {
  name: 'fantasy-secrets',
  formula: '1d6',
  table: [
    { min: 1, max: 1, value: 'Hidden Door' },
    { min: 2, max: 2, value: 'Hidden Chest' },
    { min: 3, max: 3, value: 'Hidden Room' },
    { min: 4, max: 4, value: 'Dungeon Secret' },
    { min: 5, max: 5, value: 'World Secret' },
    { min: 6, max: 6, value: 'Nothing' },
  ],
}

/* Terrian Specific Tables */

// TODO: Create terrain specific noun, verb, and adjective tables like in modern.ts
