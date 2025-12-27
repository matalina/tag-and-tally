import type { RandomTable } from '@/types/random-tables'
import { useTablesStore } from '@/stores/random-tables'

/* Discovery Tables */

export const urbanDiscoveryVerb: RandomTable = {
  name: 'urban-discovery-verb',
  formula: '1d20',
  table: [
    { min: 1, max: 1, value: 'Whispers' },
    { min: 2, max: 2, value: 'Flickers' },
    { min: 3, max: 3, value: 'Lurks' },
    { min: 4, max: 4, value: 'Glimmers' },
    { min: 5, max: 5, value: 'Watches' },
    { min: 6, max: 6, value: 'Murmurs' },
    { min: 7, max: 7, value: 'Echoes' },
    { min: 8, max: 8, value: 'Flickers' },
    { min: 9, max: 9, value: 'Radiates' },
    { min: 10, max: 10, value: 'Drifts' },
    { min: 11, max: 11, value: 'Pulses' },
    { min: 12, max: 12, value: 'Smolders' },
    { min: 13, max: 13, value: 'Crawls' },
    { min: 14, max: 14, value: 'Flickers' },
    { min: 15, max: 15, value: 'Hums' },
    { min: 16, max: 16, value: 'Shimmers' },
    { min: 17, max: 17, value: 'Shifts' },
    { min: 18, max: 18, value: 'Flickers' },
    { min: 19, max: 19, value: 'Quivers' },
    { min: 20, max: 20, value: 'Breathes' },
  ],
}

export const urbanDiscoveryAdjective: RandomTable = {
  name: 'urban-discovery-adjective',
  formula: '1d20',
  table: [
    { min: 1, max: 1, value: 'Shadowed' },
    { min: 2, max: 2, value: 'Haunted' },
    { min: 3, max: 3, value: 'Forgotten' },
    { min: 4, max: 4, value: 'Ethereal' },
    { min: 5, max: 5, value: 'Cursed' },
    { min: 6, max: 6, value: 'Shimmering' },
    { min: 7, max: 7, value: 'Abandoned' },
    { min: 8, max: 8, value: 'Veiled' },
    { min: 9, max: 9, value: 'Enchanted' },
    { min: 10, max: 10, value: 'Flickering' },
    { min: 11, max: 11, value: 'Ancient' },
    { min: 12, max: 12, value: 'Tainted' },
    { min: 13, max: 13, value: 'Grim' },
    { min: 14, max: 14, value: 'Eerie' },
    { min: 15, max: 15, value: 'Glowing' },
    { min: 16, max: 16, value: 'Twisted' },
    { min: 17, max: 17, value: 'Bleeding' },
    { min: 18, max: 18, value: 'Veiled' },
    { min: 19, max: 19, value: 'Corrupted' },
    { min: 20, max: 20, value: 'Misty' },
  ],
}

export const urbanDiscoveryNoun: RandomTable = {
  name: 'urban-discovery-noun',
  formula: '1d20',
  table: [
    { min: 1, max: 1, value: 'Alley' },
    { min: 2, max: 2, value: 'Streetlamp' },
    { min: 3, max: 3, value: 'Shrine' },
    { min: 4, max: 4, value: 'Graffiti' },
    { min: 5, max: 5, value: 'Statue' },
    { min: 6, max: 6, value: 'Portal' },
    { min: 7, max: 7, value: 'Warehouse' },
    { min: 8, max: 8, value: 'Market' },
    { min: 9, max: 9, value: 'Fountain' },
    { min: 10, max: 10, value: 'Lantern' },
    { min: 11, max: 11, value: 'Clocktower' },
    { min: 12, max: 12, value: 'Pile' },
    { min: 13, max: 13, value: 'Tunnel' },
    { min: 14, max: 14, value: 'Window' },
    { min: 15, max: 15, value: 'Sign' },
    { min: 16, max: 16, value: 'Vine' },
    { min: 17, max: 17, value: 'Mural' },
    { min: 18, max: 18, value: 'Subway Platform' },
    { min: 19, max: 19, value: 'Monument' },
    { min: 20, max: 20, value: 'Bridge' },
  ],
}

/* Terrain Tables */

export const urbanTerrain: RandomTable = {
  name: 'urban-terrain',
  formula: '1d12',
  table: [
    { min: 1, max: 1, value: 'Narrow Alleys (Rough)' },
    { min: 2, max: 2, value: 'Crowded Streets (Rough)' },
    { min: 3, max: 3, value: 'Broad Avenues (Easy)' },
    { min: 4, max: 4, value: 'Walled Courtyards (Easy)' },
    { min: 5, max: 5, value: 'Ruined Streets (Dangerous)' },
    { min: 6, max: 6, value: 'Sloped Walkways (Rough)' },
    { min: 7, max: 7, value: 'Elevated Platforms (Dangerous)' },
    { min: 8, max: 8, value: 'Tree-Lined Roads (Easy)' },
    { min: 9, max: 9, value: 'Labyrinthine Passages (Dangerous)' },
    { min: 10, max: 10, value: 'Cracked Pavement (Rough)' },
    { min: 11, max: 11, value: 'Flooded Walks (Dangerous)' },
    { min: 12, max: 12, value: 'Cobblestone Paths (Easy)' },
  ],
}

function rollUrbanDistrictAgain(): string {
  const tables = useTablesStore()
  return tables.random('urban-district').result
}

export const urbanDistrict: RandomTable = {
  name: 'urban-district',
  formula: '2d8',
  table: [
    { min: 2, max: 2, value: 'High Class' },
    { min: 3, max: 3, value: 'Financial' },
    { min: 4, max: 4, value: 'Middle Class' },
    { min: 5, max: 5, value: 'Slums' },
    { min: 6, max: 6, value: 'Park' },
    { min: 7, max: 7, value: 'Medical Park' },
    { min: 8, max: 8, value: 'Commercial' },
    { min: 9, max: 9, value: 'Downtown' },
    { min: 10, max: 10, value: 'Government' },
    { min: 11, max: 11, value: 'University' },
    { min: 12, max: 12, value: 'Entertainment' },
    { min: 13, max: 13, value: 'Tech' },
    { min: 14, max: 14, value: 'Warehouse' },
    { min: 15, max: 15, value: 'Industrial' },
    { min: 16, max: 16, value: rollUrbanDistrictAgain },
  ],
}

export const highClassAdjacency: RandomTable = {
  name: 'High Class Adjacency',
  formula: '2d6',
  table: [
    { min: 2, max: 3, value: 'Financial' },
    { min: 4, max: 5, value: 'Government' },
    { min: 6, max: 6, value: 'University' },
    { min: 7, max: 7, value: 'High Class' },
    { min: 8, max: 8, value: 'Park' },
    { min: 9, max: 10, value: 'Commercial' },
    { min: 11, max: 12, value: 'Downtown' },
  ],
}

export const financialAdjacency: RandomTable = {
  name: 'Financial Adjacency',
  formula: '2d6',
  table: [
    { min: 2, max: 3, value: 'Downtown' },
    { min: 4, max: 5, value: 'Commercial' },
    { min: 6, max: 6, value: 'High Class' },
    { min: 7, max: 7, value: 'Financial' },
    { min: 8, max: 8, value: 'Government' },
    { min: 9, max: 10, value: 'Tech' },
    { min: 11, max: 12, value: 'Warehouse' },
  ],
}

export const middleClassAdjacency: RandomTable = {
  name: 'Middle Class Adjacency',
  formula: '2d6',
  table: [
    { min: 2, max: 3, value: 'Commercial' },
    { min: 4, max: 5, value: 'Park' },
    { min: 6, max: 6, value: 'University' },
    { min: 7, max: 7, value: 'Middle Class' },
    { min: 8, max: 8, value: 'Downtown' },
    { min: 9, max: 10, value: 'Slums' },
    { min: 11, max: 12, value: 'Medical Park' },
  ],
}

export const slumsAdjacency: RandomTable = {
  name: 'Slums Adjacency',
  formula: '2d6',
  table: [
    { min: 2, max: 3, value: 'Industrial' },
    { min: 4, max: 5, value: 'Warehouse' },
    { min: 6, max: 6, value: 'Commercial' },
    { min: 7, max: 7, value: 'Slums' },
    { min: 8, max: 8, value: 'Middle Class' },
    { min: 9, max: 10, value: 'Entertainment' },
    { min: 11, max: 12, value: 'Downtown' },
  ],
}

export const parkAdjacency: RandomTable = {
  name: 'Park Adjacency',
  formula: '2d6',
  table: [
    { min: 2, max: 3, value: 'Middle Class' },
    { min: 4, max: 5, value: 'High Class' },
    { min: 6, max: 6, value: 'University' },
    { min: 7, max: 7, value: 'Park' },
    { min: 8, max: 8, value: 'Medical Park' },
    { min: 9, max: 10, value: 'Downtown' },
    { min: 11, max: 12, value: 'Entertainment' },
  ],
}

export const medicalParkAdjacency: RandomTable = {
  name: 'Medical Park Adjacency',
  formula: '2d6',
  table: [
    { min: 2, max: 3, value: 'University' },
    { min: 4, max: 5, value: 'Park' },
    { min: 6, max: 6, value: 'Middle Class' },
    { min: 7, max: 7, value: 'Medical Park' },
    { min: 8, max: 8, value: 'Government' },
    { min: 9, max: 10, value: 'Downtown' },
    { min: 11, max: 12, value: 'Commercial' },
  ],
}

export const commercialAdjacency: RandomTable = {
  name: 'Commercial Adjacency',
  formula: '2d6',
  table: [
    { min: 2, max: 3, value: 'Downtown' },
    { min: 4, max: 5, value: 'Middle Class' },
    { min: 6, max: 6, value: 'Financial' },
    { min: 7, max: 7, value: 'Commercial' },
    { min: 8, max: 8, value: 'Entertainment' },
    { min: 9, max: 10, value: 'Warehouse' },
    { min: 11, max: 12, value: 'Slums' },
  ],
}

export const downtownAdjacency: RandomTable = {
  name: 'Downtown Adjacency',
  formula: '2d6',
  table: [
    { min: 2, max: 3, value: 'Commercial' },
    { min: 4, max: 5, value: 'Financial' },
    { min: 6, max: 6, value: 'Government' },
    { min: 7, max: 7, value: 'Downtown' },
    { min: 8, max: 8, value: 'Entertainment' },
    { min: 9, max: 10, value: 'Middle Class' },
    { min: 11, max: 12, value: 'Tech' },
  ],
}

export const governmentAdjacency: RandomTable = {
  name: 'Government Adjacency',
  formula: '2d6',
  table: [
    { min: 2, max: 3, value: 'Downtown' },
    { min: 4, max: 5, value: 'Financial' },
    { min: 6, max: 6, value: 'High Class' },
    { min: 7, max: 7, value: 'Government' },
    { min: 8, max: 8, value: 'Medical Park' },
    { min: 9, max: 10, value: 'University' },
    { min: 11, max: 12, value: 'Commercial' },
  ],
}

export const universityAdjacency: RandomTable = {
  name: 'University Adjacency',
  formula: '2d6',
  table: [
    { min: 2, max: 3, value: 'Tech' },
    { min: 4, max: 5, value: 'Medical Park' },
    { min: 6, max: 6, value: 'Middle Class' },
    { min: 7, max: 7, value: 'University' },
    { min: 8, max: 8, value: 'Park' },
    { min: 9, max: 10, value: 'Downtown' },
    { min: 11, max: 12, value: 'Commercial' },
  ],
}

export const entertainmentAdjacency: RandomTable = {
  name: 'Entertainment Adjacency',
  formula: '2d6',
  table: [
    { min: 2, max: 3, value: 'Downtown' },
    { min: 4, max: 5, value: 'Commercial' },
    { min: 6, max: 6, value: 'Slums' },
    { min: 7, max: 7, value: 'Entertainment' },
    { min: 8, max: 8, value: 'Middle Class' },
    { min: 9, max: 10, value: 'Park' },
    { min: 11, max: 12, value: 'Warehouse' },
  ],
}

export const techAdjacency: RandomTable = {
  name: 'Tech Adjacency',
  formula: '2d6',
  table: [
    { min: 2, max: 3, value: 'University' },
    { min: 4, max: 5, value: 'Financial' },
    { min: 6, max: 6, value: 'Downtown' },
    { min: 7, max: 7, value: 'Tech' },
    { min: 8, max: 8, value: 'Industrial' },
    { min: 9, max: 10, value: 'Warehouse' },
    { min: 11, max: 12, value: 'Commercial' },
  ],
}

export const warehouseAdjacency: RandomTable = {
  name: 'Warehouse Adjacency',
  formula: '2d6',
  table: [
    { min: 2, max: 3, value: 'Industrial' },
    { min: 4, max: 5, value: 'Slums' },
    { min: 6, max: 6, value: 'Commercial' },
    { min: 7, max: 7, value: 'Warehouse' },
    { min: 8, max: 8, value: 'Tech' },
    { min: 9, max: 10, value: 'Downtown' },
    { min: 11, max: 12, value: 'Entertainment' },
  ],
}

export const industrialAdjacency: RandomTable = {
  name: 'Industrial Adjacency',
  formula: '2d6',
  table: [
    { min: 2, max: 3, value: 'Warehouse' },
    { min: 4, max: 5, value: 'Slums' },
    { min: 6, max: 6, value: 'Tech' },
    { min: 7, max: 7, value: 'Industrial' },
    { min: 8, max: 8, value: 'Commercial' },
    { min: 9, max: 10, value: 'Downtown' },
    { min: 11, max: 12, value: 'Middle Class' },
  ],
}


// TODO: Generate Functions
export const urbanPointsOfInterest: RandomTable = {
  name: 'urban-points-of-interest',
  formula: '1d20',
  table: [
    { min: 1, max: 3, value: '1d4 Clues' },
    { min: 4, max: 7, value: 'Nothing' },
    { min: 8, max: 9, value: 'Wandering Creature' },
    { min: 10, max: 15, value: 'Wandering NPC' },
    { min: 16, max: 16, value: '1d8+4 Room Dungeon' },
    { min: 17, max: 17, value: '1d4-1 Room Creature Lair' },
    { min: 18, max: 20, value: 'District Specific Encounter' },
  ],
}

// TODO: Generate NPCs
export const urbanNPC: RandomTable = {
  name: 'urban-npc',
  formula: '1d6',
  table: [
    { min: 1, max: 1, value: 'Street Vender' },
    { min: 2, max: 2, value: 'A Rival NPC' },
    { min: 3, max: 3, value: 'A Ally NPC' },
    { min: 4, max: 4, value: 'Known NPC' },
    { min: 5, max: 5, value: 'Hostile NPC' },
    { min: 6, max: 6, value: 'Friendly NPC' },
  ],
}

export const urbanDungeonThemeFlavor: RandomTable = {
  name: 'urban-dungeon-theme-flavor',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Forsaken' },
    { min: 2, max: 2, value: 'Cult' },
    { min: 3, max: 3, value: 'Smuggler' },
    { min: 4, max: 4, value: 'Abandoned' },
    { min: 5, max: 5, value: 'Biohazard' },
    { min: 6, max: 6, value: 'Haunted' },
    { min: 7, max: 7, value: 'Glitched' },
    { min: 8, max: 8, value: 'Possessed' },
    { min: 9, max: 9, value: 'Infernal' },
    { min: 10, max: 10, value: 'Cursed' },
  ],
}

export const urbanDungeonThemeSetting: RandomTable = {
  name: 'urban-dungeon-theme-setting',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Subway' },
    { min: 2, max: 2, value: 'Sewer' },
    { min: 3, max: 3, value: 'Warehouse' },
    { min: 4, max: 4, value: 'Skyscraper' },
    { min: 5, max: 5, value: 'Clinic' },
    { min: 6, max: 6, value: 'Nightclub' },
    { min: 7, max: 7, value: 'Arcade' },
    { min: 8, max: 8, value: 'Apartment' },
    { min: 9, max: 9, value: 'Transit Hub' },
    { min: 10, max: 10, value: 'Museum' },
  ],
}

export const urbanDungeonThemeType: RandomTable = {
  name: 'urban-dungeon-theme-type',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Station' },
    { min: 2, max: 2, value: 'Hideout' },
    { min: 3, max: 3, value: 'Cache' },
    { min: 4, max: 4, value: 'Office' },
    { min: 5, max: 5, value: 'Lab' },
    { min: 6, max: 6, value: 'Basement' },
    { min: 7, max: 7, value: 'Network Hub' },
    { min: 8, max: 8, value: 'Complex' },
    { min: 9, max: 9, value: 'Access Tunnel' },
    { min: 10, max: 10, value: 'Exhibit Hall' },
  ],
}

export const urbanDungeonThemeCreatureType: RandomTable = {
  name: 'urban-dungeon-theme-creature-type',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Ferai (NPC)' },
    { min: 2, max: 2, value: 'Drakari (NPC)' },
    { min: 3, max: 3, value: 'Animal' },
    { min: 4, max: 4, value: 'Automation' },
    { min: 5, max: 5, value: 'Mechanical' },
    { min: 6, max: 6, value: 'Ghost' },
    { min: 7, max: 7, value: 'Undead' },
    { min: 8, max: 8, value: 'Draconic' },
    { min: 9, max: 9, value: 'Ooze/Slime' },
    { min: 10, max: 10, value: 'Insect' },
  ],
}

// TODO: Generate functions
export const urbanContents: RandomTable = {
  name: 'urban-contents',
  formula: '1d20',
  table: [
    { min: 1, max: 3, value: 'Nothing' },
    { min: 4, max: 5, value: 'Trap' },
    { min: 5, max: 9, value: '1d4 Level 3 Creatures' },
    { min: 10, max: 11, value: 'Ally NPC' },
    { min: 12, max: 15, value: 'Rival NPC' },
    { min: 16, max: 17, value: 'Secret' },
    { min: 13, max: 20, value: 'Survivor' },
  ],
}

export const urbanDoor: RandomTable = {
  name: 'urban-door',
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

export const urbanSecrets: RandomTable = {
  name: 'urban-secrets',
  formula: '1d8',
  table: [
    { min: 1, max: 1, value: 'Hidden Door' },
    { min: 2, max: 2, value: 'Hidden Chest' },
    { min: 3, max: 3, value: 'Hidden Room' },
    { min: 4, max: 4, value: 'Dungeon Secret' },
    { min: 5, max: 5, value: 'World Secret' },
    { min: 6, max: 8, value: 'Nothing' },
  ],
}

/* Encounter Tables */

export const slumsEncounterVerb: RandomTable = {
  name: 'slums-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Chase' },
    { min: 2, max: 2, value: 'Steal' },
    { min: 3, max: 3, value: 'Guard' },
    { min: 4, max: 4, value: 'Follow' },
    { min: 5, max: 5, value: 'Break' },
    { min: 6, max: 6, value: 'Avoid' },
    { min: 7, max: 7, value: 'Interrogate' },
    { min: 8, max: 8, value: 'Rescue' },
    { min: 9, max: 9, value: 'Bargain' },
    { min: 10, max: 10, value: 'Evade' },
  ],
}

export const slumsEncounterAdjective: RandomTable = {
  name: 'slums-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Frantic' },
    { min: 2, max: 2, value: 'Desperate' },
    { min: 3, max: 3, value: 'Dilapidated' },
    { min: 4, max: 4, value: 'Twitchy' },
    { min: 5, max: 5, value: 'Shattered' },
    { min: 6, max: 6, value: 'Enraged' },
    { min: 7, max: 7, value: 'Cunning' },
    { min: 8, max: 8, value: 'Injured' },
    { min: 9, max: 9, value: 'Unstable' },
    { min: 10, max: 10, value: 'Masked' },
  ],
}

export const slumsEncounterNoun: RandomTable = {
  name: 'slums-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Courier' },
    { min: 2, max: 2, value: 'Vendor' },
    { min: 3, max: 3, value: 'Shrine' },
    { min: 4, max: 4, value: 'Informant' },
    { min: 5, max: 5, value: 'Ward' },
    { min: 6, max: 6, value: 'Monster' },
    { min: 7, max: 7, value: 'Pickpocket' },
    { min: 8, max: 8, value: 'Child' },
    { min: 9, max: 9, value: 'Alchemist' },
    { min: 10, max: 10, value: 'Authority' },
  ],
}

export const highClassEncounterVerb: RandomTable = {
  name: 'high-class-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Observe' },
    { min: 2, max: 2, value: 'Interrupt' },
    { min: 3, max: 3, value: 'Escort' },
    { min: 4, max: 4, value: 'Eavesdrop' },
    { min: 5, max: 5, value: 'Rescue' },
    { min: 6, max: 6, value: 'Blackmail' },
    { min: 7, max: 7, value: 'Track' },
    { min: 8, max: 8, value: 'Protect' },
    { min: 9, max: 9, value: 'Investigate' },
    { min: 10, max: 10, value: 'Bargain' },
  ],
}

export const highClassEncounterAdjective: RandomTable = {
  name: 'high-class-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Suspicious' },
    { min: 2, max: 2, value: 'Lavish' },
    { min: 3, max: 3, value: 'Nervous' },
    { min: 4, max: 4, value: 'Arrogant' },
    { min: 5, max: 5, value: 'Cornered' },
    { min: 6, max: 6, value: 'Desperate' },
    { min: 7, max: 7, value: 'Enchanted' },
    { min: 8, max: 8, value: 'Exotic' },
    { min: 9, max: 9, value: 'Clandestine' },
    { min: 10, max: 10, value: 'Influential' },
  ],
}

export const highClassEncounterNoun: RandomTable = {
  name: 'high-class-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Butler' },
    { min: 2, max: 2, value: 'Gala' },
    { min: 3, max: 3, value: 'Heiress' },
    { min: 4, max: 4, value: 'Investor' },
    { min: 5, max: 5, value: 'Socialite' },
    { min: 6, max: 6, value: 'Councilman' },
    { min: 7, max: 7, value: 'Garden' },
    { min: 8, max: 8, value: 'Artifact' },
    { min: 9, max: 9, value: 'Affair' },
    { min: 10, max: 10, value: 'Matron' },
  ],
}

export const financialEncounterVerb: RandomTable = {
  name: 'financial-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Audit' },
    { min: 2, max: 2, value: 'Infiltrate' },
    { min: 3, max: 3, value: 'Bribe' },
    { min: 4, max: 4, value: 'Trail' },
    { min: 5, max: 5, value: 'Disrupt' },
    { min: 6, max: 6, value: 'Expose' },
    { min: 7, max: 7, value: 'Decode' },
    { min: 8, max: 8, value: 'Apprehend' },
    { min: 9, max: 9, value: 'Interrogate' },
    { min: 10, max: 10, value: 'Broker' },
  ],
}

export const financialEncounterAdjective: RandomTable = {
  name: 'financial-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Unlicensed' },
    { min: 2, max: 2, value: 'Gilded' },
    { min: 3, max: 3, value: 'Reluctant' },
    { min: 4, max: 4, value: 'Ambitious' },
    { min: 5, max: 5, value: 'High-Stakes' },
    { min: 6, max: 6, value: 'Corrupt' },
    { min: 7, max: 7, value: 'Obscure' },
    { min: 8, max: 8, value: 'Fraudulent' },
    { min: 9, max: 9, value: 'Nervous' },
    { min: 10, max: 10, value: 'Risky' },
  ],
}

export const financialEncounterNoun: RandomTable = {
  name: 'financial-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Broker' },
    { min: 2, max: 2, value: 'Boardroom' },
    { min: 3, max: 3, value: 'Accountant' },
    { min: 4, max: 4, value: 'Intern' },
    { min: 5, max: 5, value: 'Merger' },
    { min: 6, max: 6, value: 'Hedge Fund' },
    { min: 7, max: 7, value: 'Ledger' },
    { min: 8, max: 8, value: 'Consultant' },
    { min: 9, max: 9, value: 'Auditor' },
    { min: 10, max: 10, value: 'Deal' },
  ],
}

export const middleClassEncounterVerb: RandomTable = {
  name: 'middle-class-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Investigate' },
    { min: 2, max: 2, value: 'Assist' },
    { min: 3, max: 3, value: 'Defuse' },
    { min: 4, max: 4, value: 'Track' },
    { min: 5, max: 5, value: 'Protect' },
    { min: 6, max: 6, value: 'Confront' },
    { min: 7, max: 7, value: 'Deliver' },
    { min: 8, max: 8, value: 'Observe' },
    { min: 9, max: 9, value: 'Follow' },
    { min: 10, max: 10, value: 'Intervene' },
  ],
}

export const middleClassEncounterAdjective: RandomTable = {
  name: 'middle-class-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Anxious' },
    { min: 2, max: 2, value: 'Overworked' },
    { min: 3, max: 3, value: 'Escalating' },
    { min: 4, max: 4, value: 'Missing' },
    { min: 5, max: 5, value: 'Harassed' },
    { min: 6, max: 6, value: 'Suspicious' },
    { min: 7, max: 7, value: 'Confidential' },
    { min: 8, max: 8, value: 'Quiet' },
    { min: 9, max: 9, value: 'Unregistered' },
    { min: 10, max: 10, value: 'Desperate' },
  ],
}

export const middleClassEncounterNoun: RandomTable = {
  name: 'middle-class-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Neighbor' },
    { min: 2, max: 2, value: 'Teacher' },
    { min: 3, max: 3, value: 'Dispute' },
    { min: 4, max: 4, value: 'Child' },
    { min: 5, max: 5, value: 'Clerk' },
    { min: 6, max: 6, value: 'Realtor' },
    { min: 7, max: 7, value: 'Letter' },
    { min: 8, max: 8, value: 'Surveillance Van' },
    { min: 9, max: 9, value: 'Courier' },
    { min: 10, max: 10, value: 'Protester' },
  ],
}

export const parkEncounterVerb: RandomTable = {
  name: 'park-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Discover' },
    { min: 2, max: 2, value: 'Calm' },
    { min: 3, max: 3, value: 'Observe' },
    { min: 4, max: 4, value: 'Investigate' },
    { min: 5, max: 5, value: 'Aid' },
    { min: 6, max: 6, value: 'Question' },
    { min: 7, max: 7, value: 'Interrupt' },
    { min: 8, max: 8, value: 'Chase' },
    { min: 9, max: 9, value: 'Examine' },
    { min: 10, max: 10, value: 'Protect' },
  ],
}

export const parkEncounterAdjective: RandomTable = {
  name: 'park-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Hidden' },
    { min: 2, max: 2, value: 'Agitated' },
    { min: 3, max: 3, value: 'Ritualistic' },
    { min: 4, max: 4, value: 'Disturbed' },
    { min: 5, max: 5, value: 'Lost' },
    { min: 6, max: 6, value: 'Wandering' },
    { min: 7, max: 7, value: 'Unauthorized' },
    { min: 8, max: 8, value: 'Elusive' },
    { min: 9, max: 9, value: 'Overgrown' },
    { min: 10, max: 10, value: 'Fragile' },
  ],
}

export const parkEncounterNoun: RandomTable = {
  name: 'park-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Grove' },
    { min: 2, max: 2, value: 'Animal' },
    { min: 3, max: 3, value: 'Gathering' },
    { min: 4, max: 4, value: 'Shrine' },
    { min: 5, max: 5, value: 'Child' },
    { min: 6, max: 6, value: 'Elder' },
    { min: 7, max: 7, value: 'Performance' },
    { min: 8, max: 8, value: 'Shadow' },
    { min: 9, max: 9, value: 'Statue' },
    { min: 10, max: 10, value: 'Ecosystem' },
  ],
}

export const commercialEncounterVerb: RandomTable = {
  name: 'commercial-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Haggle' },
    { min: 2, max: 2, value: 'Follow' },
    { min: 3, max: 3, value: 'Break Up' },
    { min: 4, max: 4, value: 'Investigate' },
    { min: 5, max: 5, value: 'Assist' },
    { min: 6, max: 6, value: 'Uncover' },
    { min: 7, max: 7, value: 'Witness' },
    { min: 8, max: 8, value: 'Evade' },
    { min: 9, max: 9, value: 'Trail' },
    { min: 10, max: 10, value: 'Expose' },
  ],
}

export const commercialEncounterAdjective: RandomTable = {
  name: 'commercial-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Shifty' },
    { min: 2, max: 2, value: 'Nervous' },
    { min: 3, max: 3, value: 'Heated' },
    { min: 4, max: 4, value: 'Locked' },
    { min: 5, max: 5, value: 'Overwhelmed' },
    { min: 6, max: 6, value: 'Illegal' },
    { min: 7, max: 7, value: 'Flashy' },
    { min: 8, max: 8, value: 'Watchful' },
    { min: 9, max: 9, value: 'Masked' },
    { min: 10, max: 10, value: 'Counterfeit' },
  ],
}

export const commercialEncounterNoun: RandomTable = {
  name: 'commercial-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Vendor' },
    { min: 2, max: 2, value: 'Courier' },
    { min: 3, max: 3, value: 'Argument' },
    { min: 4, max: 4, value: 'Storage Unit' },
    { min: 5, max: 5, value: 'Shopkeeper' },
    { min: 6, max: 6, value: 'Transaction' },
    { min: 7, max: 7, value: 'Promotion' },
    { min: 8, max: 8, value: 'Security Drone' },
    { min: 9, max: 9, value: 'Performer' },
    { min: 10, max: 10, value: 'Goods' },
  ],
}

export const medicalParkEncounterVerb: RandomTable = {
  name: 'medical-park-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Escort' },
    { min: 2, max: 2, value: 'Overhear' },
    { min: 3, max: 3, value: 'Investigate' },
    { min: 4, max: 4, value: 'Intervene' },
    { min: 5, max: 5, value: 'Retrieve' },
    { min: 6, max: 6, value: 'Assist' },
    { min: 7, max: 7, value: 'Confront' },
    { min: 8, max: 8, value: 'Secure' },
    { min: 9, max: 9, value: 'Report' },
    { min: 10, max: 10, value: 'Observe' },
  ],
}

export const medicalParkEncounterAdjective: RandomTable = {
  name: 'medical-park-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Injured' },
    { min: 2, max: 2, value: 'Desperate' },
    { min: 3, max: 3, value: 'Unattended' },
    { min: 4, max: 4, value: 'Hostile' },
    { min: 5, max: 5, value: 'Misplaced' },
    { min: 6, max: 6, value: 'Panicked' },
    { min: 7, max: 7, value: 'Shady' },
    { min: 8, max: 8, value: 'Restricted' },
    { min: 9, max: 9, value: 'Mutating' },
    { min: 10, max: 10, value: 'Experimental' },
  ],
}

export const medicalParkEncounterNoun: RandomTable = {
  name: 'medical-park-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Patient' },
    { min: 2, max: 2, value: 'Diagnosis' },
    { min: 3, max: 3, value: 'Lab' },
    { min: 4, max: 4, value: 'Treatment' },
    { min: 5, max: 5, value: 'Medical File' },
    { min: 6, max: 6, value: 'Nurse' },
    { min: 7, max: 7, value: 'Doctor' },
    { min: 8, max: 8, value: 'Sample' },
    { min: 9, max: 9, value: 'Disease' },
    { min: 10, max: 10, value: 'Procedure' },
  ],
}

export const downtownEncounterVerb: RandomTable = {
  name: 'downtown-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Chase' },
    { min: 2, max: 2, value: 'Navigate' },
    { min: 3, max: 3, value: 'Disrupt' },
    { min: 4, max: 4, value: 'Aid' },
    { min: 5, max: 5, value: 'Catch' },
    { min: 6, max: 6, value: 'Follow' },
    { min: 7, max: 7, value: 'Evade' },
    { min: 8, max: 8, value: 'Interrogate' },
    { min: 9, max: 9, value: 'Monitor' },
    { min: 10, max: 10, value: 'Witness' },
  ],
}

export const downtownEncounterAdjective: RandomTable = {
  name: 'downtown-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Masked' },
    { min: 2, max: 2, value: 'Packed' },
    { min: 3, max: 3, value: 'Unauthorized' },
    { min: 4, max: 4, value: 'Confused' },
    { min: 5, max: 5, value: 'Escaping' },
    { min: 6, max: 6, value: 'Mysterious' },
    { min: 7, max: 7, value: 'Aggressive' },
    { min: 8, max: 8, value: 'Nervous' },
    { min: 9, max: 9, value: 'Suspicious' },
    { min: 10, max: 10, value: 'Explosive' },
  ],
}

export const downtownEncounterNoun: RandomTable = {
  name: 'downtown-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Thief' },
    { min: 2, max: 2, value: 'Intersection' },
    { min: 3, max: 3, value: 'Demonstration' },
    { min: 4, max: 4, value: 'Tourist' },
    { min: 5, max: 5, value: 'Suspect' },
    { min: 6, max: 6, value: 'Courier' },
    { min: 7, max: 7, value: 'Protesters' },
    { min: 8, max: 8, value: 'Vendor' },
    { min: 9, max: 9, value: 'Crowd' },
    { min: 10, max: 10, value: 'Incident' },
  ],
}

export const governmentEncounterVerb: RandomTable = {
  name: 'government-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Petition' },
    { min: 2, max: 2, value: 'Follow' },
    { min: 3, max: 3, value: 'Deliver' },
    { min: 4, max: 4, value: 'Hack' },
    { min: 5, max: 5, value: 'Bribe' },
    { min: 6, max: 6, value: 'Disrupt' },
    { min: 7, max: 7, value: 'Eavesdrop' },
    { min: 8, max: 8, value: 'Sneak' },
    { min: 9, max: 9, value: 'Protect' },
    { min: 10, max: 10, value: 'Infiltrate' },
  ],
}

export const governmentEncounterAdjective: RandomTable = {
  name: 'government-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Indifferent' },
    { min: 2, max: 2, value: 'Shielded' },
    { min: 3, max: 3, value: 'Sealed' },
    { min: 4, max: 4, value: 'Encrypted' },
    { min: 5, max: 5, value: 'Corrupt' },
    { min: 6, max: 6, value: 'Private' },
    { min: 7, max: 7, value: 'High-ranking' },
    { min: 8, max: 8, value: 'Heavily-guarded' },
    { min: 9, max: 9, value: 'Visiting' },
    { min: 10, max: 10, value: 'Secure' },
  ],
}

export const governmentEncounterNoun: RandomTable = {
  name: 'government-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Bureaucrat' },
    { min: 2, max: 2, value: 'Motorcade' },
    { min: 3, max: 3, value: 'Documents' },
    { min: 4, max: 4, value: 'Database' },
    { min: 5, max: 5, value: 'Official' },
    { min: 6, max: 6, value: 'Meeting' },
    { min: 7, max: 7, value: 'Advisor' },
    { min: 8, max: 8, value: 'Facility' },
    { min: 9, max: 9, value: 'Dignitary' },
    { min: 10, max: 10, value: 'Archives' },
  ],
}

export const universityEncounterVerb: RandomTable = {
  name: 'university-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Attend' },
    { min: 2, max: 2, value: 'Investigate' },
    { min: 3, max: 3, value: 'Debate' },
    { min: 4, max: 4, value: 'Steal' },
    { min: 5, max: 5, value: 'Protect' },
    { min: 6, max: 6, value: 'Uncover' },
    { min: 7, max: 7, value: 'Disrupt' },
    { min: 8, max: 8, value: 'Recruit' },
    { min: 9, max: 9, value: 'Escape' },
    { min: 10, max: 10, value: 'Navigate' },
  ],
}

export const universityEncounterAdjective: RandomTable = {
  name: 'university-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Crowded' },
    { min: 2, max: 2, value: 'Forbidden' },
    { min: 3, max: 3, value: 'Radical' },
    { min: 4, max: 4, value: 'Experimental' },
    { min: 5, max: 5, value: 'Naive' },
    { min: 6, max: 6, value: 'Hidden' },
    { min: 7, max: 7, value: 'Secret' },
    { min: 8, max: 8, value: 'Gifted' },
    { min: 9, max: 9, value: 'Malfunctioning' },
    { min: 10, max: 10, value: 'Twisting' },
  ],
}

export const universityEncounterNoun: RandomTable = {
  name: 'university-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Lecture' },
    { min: 2, max: 2, value: 'Wing' },
    { min: 3, max: 3, value: 'Student' },
    { min: 4, max: 4, value: 'Formula' },
    { min: 5, max: 5, value: 'Researcher' },
    { min: 6, max: 6, value: 'Manuscript' },
    { min: 7, max: 7, value: 'Symposium' },
    { min: 8, max: 8, value: 'Graduate' },
    { min: 9, max: 9, value: 'Lab' },
    { min: 10, max: 10, value: 'Library Stacks' },
  ],
}

export const entertainmentEncounterVerb: RandomTable = {
  name: 'entertainment-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Watch' },
    { min: 2, max: 2, value: 'Chase' },
    { min: 3, max: 3, value: 'Participate' },
    { min: 4, max: 4, value: 'Avoid' },
    { min: 5, max: 5, value: 'Meet' },
    { min: 6, max: 6, value: 'Steal' },
    { min: 7, max: 7, value: 'Interrupt' },
    { min: 8, max: 8, value: 'Smuggle' },
    { min: 9, max: 9, value: 'Befriend' },
    { min: 10, max: 10, value: 'Investigate' },
  ],
}

export const entertainmentEncounterAdjective: RandomTable = {
  name: 'entertainment-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Raucous' },
    { min: 2, max: 2, value: 'Drunken' },
    { min: 3, max: 3, value: 'Flashy' },
    { min: 4, max: 4, value: 'Rowdy' },
    { min: 5, max: 5, value: 'Masked' },
    { min: 6, max: 6, value: 'Distracted' },
    { min: 7, max: 7, value: 'Wild' },
    { min: 8, max: 8, value: 'Hidden' },
    { min: 9, max: 9, value: 'Eccentric' },
    { min: 10, max: 10, value: 'Mysterious' },
  ],
}

export const entertainmentEncounterNoun: RandomTable = {
  name: 'entertainment-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Street Performer' },
    { min: 2, max: 2, value: 'Crowd' },
    { min: 3, max: 3, value: 'Dance Contest' },
    { min: 4, max: 4, value: 'Street Vendor' },
    { min: 5, max: 5, value: 'Patron' },
    { min: 6, max: 6, value: 'Spectator' },
    { min: 7, max: 7, value: 'Magic Show' },
    { min: 8, max: 8, value: 'Contraband' },
    { min: 9, max: 9, value: 'Musician' },
    { min: 10, max: 10, value: 'Backstage Room' },
  ],
}

export const techEncounterVerb: RandomTable = {
  name: 'tech-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Hack' },
    { min: 2, max: 2, value: 'Debug' },
    { min: 3, max: 3, value: 'Infiltrate' },
    { min: 4, max: 4, value: 'Test' },
    { min: 5, max: 5, value: 'Evade' },
    { min: 6, max: 6, value: 'Upgrade' },
    { min: 7, max: 7, value: 'Sabotage' },
    { min: 8, max: 8, value: 'Analyze' },
    { min: 9, max: 9, value: 'Trade' },
    { min: 10, max: 10, value: 'Collaborate' },
  ],
}

export const techEncounterAdjective: RandomTable = {
  name: 'tech-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Encrypted' },
    { min: 2, max: 2, value: 'Malfunctioning' },
    { min: 3, max: 3, value: 'Secure' },
    { min: 4, max: 4, value: 'Experimental' },
    { min: 5, max: 5, value: 'Surveillance' },
    { min: 6, max: 6, value: 'Cutting-edge' },
    { min: 7, max: 7, value: 'Faulty' },
    { min: 8, max: 8, value: 'Enigmatic' },
    { min: 9, max: 9, value: 'Illegal' },
    { min: 10, max: 10, value: 'Innovative' },
  ],
}

export const techEncounterNoun: RandomTable = {
  name: 'tech-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Terminal' },
    { min: 2, max: 2, value: 'Drone' },
    { min: 3, max: 3, value: 'Data Vault' },
    { min: 4, max: 4, value: 'Prototype' },
    { min: 5, max: 5, value: 'Security Bot' },
    { min: 6, max: 6, value: 'Software' },
    { min: 7, max: 7, value: 'Network Node' },
    { min: 8, max: 8, value: 'Algorithm' },
    { min: 9, max: 9, value: 'Cyberware' },
    { min: 10, max: 10, value: 'Engineer' },
  ],
}

export const warehouseEncounterVerb: RandomTable = {
  name: 'warehouse-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Guard' },
    { min: 2, max: 2, value: 'Inspect' },
    { min: 3, max: 3, value: 'Smuggle' },
    { min: 4, max: 4, value: 'Load' },
    { min: 5, max: 5, value: 'Ambush' },
    { min: 6, max: 6, value: 'Hide' },
    { min: 7, max: 7, value: 'Chase' },
    { min: 8, max: 8, value: 'Sabotage' },
    { min: 9, max: 9, value: 'Retrieve' },
    { min: 10, max: 10, value: 'Negotiate' },
  ],
}

export const warehouseEncounterAdjective: RandomTable = {
  name: 'warehouse-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Stacked' },
    { min: 2, max: 2, value: 'Dusty' },
    { min: 3, max: 3, value: 'Hidden' },
    { min: 4, max: 4, value: 'Heavy' },
    { min: 5, max: 5, value: 'Abandoned' },
    { min: 6, max: 6, value: 'Cramped' },
    { min: 7, max: 7, value: 'Frantic' },
    { min: 8, max: 8, value: 'Faulty' },
    { min: 9, max: 9, value: 'Locked' },
    { min: 10, max: 10, value: 'Secretive' },
  ],
}

export const warehouseEncounterNoun: RandomTable = {
  name: 'warehouse-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Crates' },
    { min: 2, max: 2, value: 'Shipping Container' },
    { min: 3, max: 3, value: 'Contraband' },
    { min: 4, max: 4, value: 'Pallet' },
    { min: 5, max: 5, value: 'Loading Dock' },
    { min: 6, max: 6, value: 'Storage Room' },
    { min: 7, max: 7, value: 'Courier' },
    { min: 8, max: 8, value: 'Forklift' },
    { min: 9, max: 9, value: 'Shipment' },
    { min: 10, max: 10, value: 'Deal' },
  ],
}

export const industrialEncounterVerb: RandomTable = {
  name: 'industrial-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Repair' },
    { min: 2, max: 2, value: 'Operate' },
    { min: 3, max: 3, value: 'Inspect' },
    { min: 4, max: 4, value: 'Smuggle' },
    { min: 5, max: 5, value: 'Evade' },
    { min: 6, max: 6, value: 'Sabotage' },
    { min: 7, max: 7, value: 'Secure' },
    { min: 8, max: 8, value: 'Clash' },
    { min: 9, max: 9, value: 'Discover' },
    { min: 10, max: 10, value: 'Negotiate' },
  ],
}

export const industrialEncounterAdjective: RandomTable = {
  name: 'industrial-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Grinding' },
    { min: 2, max: 2, value: 'Blazing' },
    { min: 3, max: 3, value: 'Rusty' },
    { min: 4, max: 4, value: 'Toxic' },
    { min: 5, max: 5, value: 'Noisy' },
    { min: 6, max: 6, value: 'Faulty' },
    { min: 7, max: 7, value: 'Heavy' },
    { min: 8, max: 8, value: 'Tense' },
    { min: 9, max: 9, value: 'Hazardous' },
    { min: 10, max: 10, value: 'Gruff' },
  ],
}

export const industrialEncounterNoun: RandomTable = {
  name: 'industrial-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Machine' },
    { min: 2, max: 2, value: 'Furnace' },
    { min: 3, max: 3, value: 'Pipe' },
    { min: 4, max: 4, value: 'Chemicals' },
    { min: 5, max: 5, value: 'Foreman' },
    { min: 6, max: 6, value: 'Conveyor Belt' },
    { min: 7, max: 7, value: 'Machinery' },
    { min: 8, max: 8, value: 'Workers' },
    { min: 9, max: 9, value: 'Waste Dump' },
    { min: 10, max: 10, value: 'Contract' },
  ],
}

export const subwayStationEncounterVerb: RandomTable = {
  name: 'subway-station-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Wait' },
    { min: 2, max: 2, value: 'Chase' },
    { min: 3, max: 3, value: 'Escape' },
    { min: 4, max: 4, value: 'Hide' },
    { min: 5, max: 5, value: 'Confront' },
    { min: 6, max: 6, value: 'Rescue' },
    { min: 7, max: 7, value: 'Investigate' },
    { min: 8, max: 8, value: 'Barter' },
    { min: 9, max: 9, value: 'Sabotage' },
    { min: 10, max: 10, value: 'Discover' },
  ],
}

export const subwayStationEncounterAdjective: RandomTable = {
  name: 'subway-station-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Crowded' },
    { min: 2, max: 2, value: 'Flickering' },
    { min: 3, max: 3, value: 'Stalled' },
    { min: 4, max: 4, value: 'Graffiti-covered' },
    { min: 5, max: 5, value: 'Nervous' },
    { min: 6, max: 6, value: 'Stranded' },
    { min: 7, max: 7, value: 'Strange' },
    { min: 8, max: 8, value: 'Dimly-lit' },
    { min: 9, max: 9, value: 'Locked' },
    { min: 10, max: 10, value: 'Hidden' },
  ],
}

export const subwayStationEncounterNoun: RandomTable = {
  name: 'subway-station-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Platform' },
    { min: 2, max: 2, value: 'Shadow' },
    { min: 3, max: 3, value: 'Train' },
    { min: 4, max: 4, value: 'Tunnel' },
    { min: 5, max: 5, value: 'Commuter' },
    { min: 6, max: 6, value: 'Passenger' },
    { min: 7, max: 7, value: 'Sound' },
    { min: 8, max: 8, value: 'Vendor' },
    { min: 9, max: 9, value: 'Control Room' },
    { min: 10, max: 10, value: 'Passage' },
  ],
}

export const homeEncounterVerb: RandomTable = {
  name: 'home-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Visit' },
    { min: 2, max: 2, value: 'Confront' },
    { min: 3, max: 3, value: 'Borrow' },
    { min: 4, max: 4, value: 'Deliver' },
    { min: 5, max: 5, value: 'Repair' },
    { min: 6, max: 6, value: 'Meet' },
    { min: 7, max: 7, value: 'Hear' },
    { min: 8, max: 8, value: 'Help' },
    { min: 9, max: 9, value: 'Receive' },
    { min: 10, max: 10, value: 'Deal with' },
  ],
}

export const homeEncounterAdjective: RandomTable = {
  name: 'home-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Nosy' },
    { min: 2, max: 2, value: 'Noisy' },
    { min: 3, max: 3, value: 'Friendly' },
    { min: 4, max: 4, value: 'Unexpected' },
    { min: 5, max: 5, value: 'Old' },
    { min: 6, max: 6, value: 'Suspicious' },
    { min: 7, max: 7, value: 'Loud' },
    { min: 8, max: 8, value: 'Elderly' },
    { min: 9, max: 9, value: 'Strange' },
    { min: 10, max: 10, value: 'Mischievous' },
  ],
}

export const homeEncounterNoun: RandomTable = {
  name: 'home-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Neighbor' },
    { min: 2, max: 2, value: 'Pet' },
    { min: 3, max: 3, value: 'Tool' },
    { min: 4, max: 4, value: 'Package' },
    { min: 5, max: 5, value: 'Fence' },
    { min: 6, max: 6, value: 'Stranger' },
    { min: 7, max: 7, value: 'Argument' },
    { min: 8, max: 8, value: 'Resident' },
    { min: 9, max: 9, value: 'Letter' },
    { min: 10, max: 10, value: 'Child' },
  ],
}

export const workEncounterVerb: RandomTable = {
  name: 'work-encounter-verb',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Negotiate' },
    { min: 2, max: 2, value: 'Confront' },
    { min: 3, max: 3, value: 'Impress' },
    { min: 4, max: 4, value: 'Cover' },
    { min: 5, max: 5, value: 'Discover' },
    { min: 6, max: 6, value: 'Manage' },
    { min: 7, max: 7, value: 'Handle' },
    { min: 8, max: 8, value: 'Attend' },
    { min: 9, max: 9, value: 'Deal with' },
    { min: 10, max: 10, value: 'Receive' },
  ],
}

export const workEncounterAdjective: RandomTable = {
  name: 'work-encounter-adjective',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Tense' },
    { min: 2, max: 2, value: 'Frustrated' },
    { min: 3, max: 3, value: 'Important' },
    { min: 4, max: 4, value: 'Last-minute' },
    { min: 5, max: 5, value: 'Confidential' },
    { min: 6, max: 6, value: 'Overworked' },
    { min: 7, max: 7, value: 'Angry' },
    { min: 8, max: 8, value: 'Boring' },
    { min: 9, max: 9, value: 'Suspicious' },
    { min: 10, max: 10, value: 'Unexpected' },
  ],
}

export const workEncounterNoun: RandomTable = {
  name: 'work-encounter-noun',
  formula: '1d10',
  table: [
    { min: 1, max: 1, value: 'Meeting' },
    { min: 2, max: 2, value: 'Coworker' },
    { min: 3, max: 3, value: 'Client' },
    { min: 4, max: 4, value: 'Deadline' },
    { min: 5, max: 5, value: 'Document' },
    { min: 6, max: 6, value: 'Team' },
    { min: 7, max: 7, value: 'Complaint' },
    { min: 8, max: 8, value: 'Seminar' },
    { min: 9, max: 9, value: 'Visitor' },
    { min: 10, max: 10, value: 'Assignment' },
  ],
}
