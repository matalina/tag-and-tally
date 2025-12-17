import type { Creature, NPC } from '@/types/creatures'
import { useTablesStore } from '@/stores/random-tables'
import type { Dungeon, Encounter, Lair, Room } from '@/types/locations'
import { DiceRoll } from '@dice-roller/rpg-dice-roller'
import type { GeneratorOptions } from '@/types/generators'
import type { Clue } from '@/types/terrain'

export const pointOfInterestGenerator = {
  name: 'point-of-interest',
  generator: (options: GeneratorOptions) => {
    void options
    const tables = useTablesStore()

    const type = tables.random('point-of-interest').result
    switch (type) {
      case 'Clue':
        const result = new DiceRoll('1d4')
        const count = result.total
        const clues: Clue[] = []
        for (let i = 0; i < count; i++) {
          // generate clue
        }
        return clues
      case 'Creature':
        // generate creature
        return {} as Creature
      case 'NPC':
        // generate npc
        return {} as NPC
      case 'Dungeon':
        const dungeon = {} as Dungeon
        // generate dungeon name
        let roomCount = new DiceRoll('2d10-4').total
        dungeon.rooms = [] as Room[]
        for (let i = 0; i < roomCount; i++) {
          // generate room
        }
        return dungeon
      case 'Lair':
        const lair = {} as Lair
        // generate dungeon name
        roomCount = new DiceRoll('1d6+4').total
        lair.rooms = [] as Room[]
        for (let i = 0; i < roomCount; i++) {
          // generate room
        }
        return lair
      case 'Encounter':
        // generate encounter
        return {} as Encounter
      default:
        return 'Nothing of Note'
    }
  },
}
