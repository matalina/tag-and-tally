import type { RandomTable } from '@/types/random-tables'
import { useTablesStore } from '@/stores/random-tables'

export const tier1SceneState: RandomTable = {
  name: 'tier1-scene-state',
  formula: '1d4+2',
  table: [
    { min: 3, max: 3, value: 'Demanding' },
    { min: 4, max: 4, value: 'Difficult' },
    { min: 5, max: 5, value: 'Challenging' },
    { min: 6, max: 6, value: 'Intimidating' },
  ],
}

export const tier2SceneState: RandomTable = {
  name: 'tier2-scene-state',
  formula: '1d6+2',
  table: [
    { min: 3, max: 3, value: 'Demanding' },
    { min: 4, max: 4, value: 'Difficult' },
    { min: 5, max: 5, value: 'Challenging' },
    { min: 6, max: 6, value: 'Intimidating' },
    { min: 7, max: 7, value: 'Formidable' },
    { min: 8, max: 8, value: 'Heroic' },
  ],
}

export const tier3SceneState: RandomTable = {
  name: 'tier3-scene-state',
  formula: '1d8+2',
  table: [
    { min: 3, max: 3, value: 'Demanding' },
    { min: 4, max: 4, value: 'Difficult' },
    { min: 5, max: 5, value: 'Challenging' },
    { min: 6, max: 6, value: 'Intimidating' },
    { min: 7, max: 7, value: 'Formidable' },
    { min: 8, max: 8, value: 'Heroic' },
    { min: 9, max: 9, value: 'Immortal' },
    { min: 10, max: 10, value: 'Divine' },
  ],
}

export const tier4SceneState: RandomTable = {
  name: 'tier4-scene-state',
  formula: '1d10+2',
  table: [
    { min: 3, max: 3, value: 'Demanding' },
    { min: 4, max: 4, value: 'Difficult' },
    { min: 5, max: 5, value: 'Challenging' },
    { min: 6, max: 6, value: 'Intimidating' },
    { min: 7, max: 7, value: 'Formidable' },
    { min: 8, max: 8, value: 'Heroic' },
    { min: 9, max: 9, value: 'Immortal' },
    { min: 10, max: 12, value: 'Divine' },
  ],
}

export const naturalDisaster: RandomTable = {
  name: 'natural-disaster',
  formula: '1d8',
  table: [
    { min: 1, max: 1, value: 'Wildfire' },
    { min: 2, max: 2, value: 'Flood' },
    { min: 3, max: 3, value: 'Drought' },
    { min: 4, max: 4, value: 'Hurricane' },
    { min: 5, max: 5, value: 'Earthquake' },
    { min: 6, max: 6, value: 'Blight' },
    { min: 7, max: 7, value: 'Volcanic Eruption' },
    { min: 8, max: 8, value: 'Blizzard' },
  ],
}

export const artificialDisaster: RandomTable = {
  name: 'artificial-disaster',
  formula: '1d8',
  table: [
    { min: 1, max: 1, value: 'Dimensional Tear' },
    { min: 2, max: 2, value: 'Environmental Collapse' },
    { min: 3, max: 3, value: 'Temporal Anomaly' },
    { min: 4, max: 4, value: 'Energy Surge' },
    { min: 5, max: 5, value: 'Memory Distortion' },
    { min: 6, max: 6, value: 'Mechanical Breakdown' },
    { min: 7, max: 7, value: 'Biohazard Release' },
    { min: 8, max: 8, value: 'Signal Blackout' },
  ],
}

function rollNaturalDisaster(): string {
  const tables = useTablesStore()
  return tables.random('natural-disaster').result
}

function rollArtificialDisaster(): string {
  const tables = useTablesStore()
  return tables.random('artificial-disaster').result
}

export const season: RandomTable = {
  name: 'season',
  formula: '1d6',
  table: [
    { min: 1, max: 1, value: 'Spring' },
    { min: 2, max: 2, value: 'Summer' },
    { min: 3, max: 3, value: 'Fall' },
    { min: 4, max: 4, value: 'Winter' },
    { min: 5, max: 5, value: rollNaturalDisaster },
    { min: 6, max: 6, value: rollArtificialDisaster },
  ],
}

export const weather: RandomTable = {
  name: 'weather',
  formula: '1d12',
  table: [
    { min: 1, max: 1, value: 'Clear skies (Easy)' },
    { min: 2, max: 2, value: 'Light clouds (Easy)' },
    { min: 3, max: 3, value: 'Strong winds (Rough)' },
    { min: 4, max: 4, value: 'Overcast (Easy)' },
    { min: 5, max: 5, value: 'Light Percipitation (Easy)' },
    { min: 6, max: 6, value: 'Heavy Percipitation (Rough)' },
    { min: 7, max: 7, value: 'Major Storm (Rough)' },
    { min: 8, max: 8, value: 'Foggy (Rough)' },
    { min: 9, max: 9, value: 'Uncharastically Hot (Dangerous)' },
    { min: 10, max: 10, value: 'Uncharastically Cold (Dangerous)' },
    { min: 11, max: 11, value: 'Flashflood (Dangerous)' },
    { min: 12, max: 12, value: 'Artificial Storm (Dangerous)' },
  ],
}

export const timeDay: RandomTable = {
  name: 'time-day',
  formula: '1d8',
  table: [
    { min: 1, max: 1, value: 'Dawn (Rough)' },
    { min: 2, max: 2, value: 'Dusk (Rough)' },
    { min: 3, max: 3, value: 'Midnight (Dangerous)' },
    { min: 4, max: 4, value: 'Highnoon (Easy)' },
    { min: 5, max: 5, value: 'Twilight (Rough)' },
    { min: 6, max: 6, value: 'Morning (Easy)' },
    { min: 7, max: 7, value: 'Afternoon (Easy)' },
    { min: 8, max: 8, value: 'Late Night (Dangerous)' },
  ],
}

function rollDayOfWeekAgain(): string {
  const tables = useTablesStore()
  return tables.random('day-of-week').result
}

export const dayOfWeek: RandomTable = {
  name: 'day-of-week',
  formula: '1d8',
  table: [
    { min: 1, max: 1, value: 'Monday' },
    { min: 2, max: 2, value: 'Tuesday' },
    { min: 3, max: 3, value: 'Wednesday' },
    { min: 4, max: 4, value: 'Thursday' },
    { min: 5, max: 5, value: 'Friday' },
    { min: 6, max: 6, value: 'Saturday' },
    { min: 7, max: 7, value: 'Sunday' },
    { min: 8, max: 8, value: rollDayOfWeekAgain },
  ],
}

export const moonPhases: RandomTable = {
  name: 'moon-phases',
  formula: '1d8',
  table: [
    { min: 1, max: 1, value: 'New Moon' },
    { min: 2, max: 2, value: 'Waxing Crescent' },
    { min: 3, max: 3, value: 'First Quarter' },
    { min: 4, max: 4, value: 'Waxing Gibbous' },
    { min: 5, max: 5, value: 'Full Moon' },
    { min: 6, max: 6, value: 'Waning Gibbous' },
    { min: 7, max: 7, value: 'Last Quarter' },
    { min: 8, max: 8, value: 'Waning Crescent' },
  ],
}

export const pointOfInterest: RandomTable = {
  name: 'point-of-interest',
  formula: '1d20',
  table: [
    { min: 1, max: 3, value: 'Clue' },
    { min: 4, max: 7, value: 'Nothing' },
    { min: 8, max: 9, value: 'Creature' },
    { min: 10, max: 15, value: 'NPC' },
    { min: 16, max: 16, value: 'Dungeon' },
    { min: 17, max: 17, value: 'Lair' },
    { min: 18, max: 20, value: 'Encounter' },
  ],
}
