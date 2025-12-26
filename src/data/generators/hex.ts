import type { GeneratorOptions } from '@/types/generators'
import type { Hex, Sides } from '@/types/locations'
import { sides as sidesNumbers } from '@/types/locations'
import { DiceRoll } from '@dice-roller/rpg-dice-roller'
import { useTablesStore } from '@/stores/random-tables'

export const hexGenerator = {
  name: 'hex',
  generator: (options: GeneratorOptions) => {
    const level = generateLevel(options?.previousLevel);
    const terrain = generateTerrain(options?.terrain);
    const feature = generateFeature(options?.terrain);
    const sides = generateSides(options?.terrain, options?.sides as Sides);

    //name: string
    //sentence: TagAndTallySentence
    //description?: string | CharacterDescription
    //pointOfInterest: PointOfInterest
    //resources: Resource[]
    return {
      level,
      terrain,
      feature,
      sides,
    } as Hex
  },
}

function generateLevel(level?: number) {
  switch (level) {
    case 9:
    case 10:
      const total = new DiceRoll('1d10+2').total;
      return total > 10 ? 10 : total;
    case 7:
    case 8:
      return new DiceRoll('1d8+2').total;
    case 5:
    case 6:
      return new DiceRoll('1d6+2').total;
    case 3:
    case 4:
    default:
      return new DiceRoll('1d4+2').total;
  }
}

function generateTerrain(terrain?: { type: string, previous: string }) {
  const tables = useTablesStore();
  switch (terrain?.type) {
    case 'urban':
      return tables.random('urban-district').result;
    case 'overland':
    default:
      return tables.random('overland-terrain').result;
  }
}

function generateFeature(terrain?: { type: string, previous: string }) {
  const tables = useTablesStore();
  switch (terrain?.type) {
    case 'urban':
      return tables.random('urban-terrain').result;
    case 'overland':
    default:
      return tables.random('terrain-feature').result;
  }
}

function generateSides(terrain?: { type: string, previous: string }, sides?: Sides) {
  const tables = useTablesStore();
  if (!sides)
    sides = {};
  switch (terrain?.type) {
    case 'urban':
      for (const side of sidesNumbers)
        if (!sides?.[side])
          sides[side] = tables.random('urban-district').result;
        break;
    case 'overland':
    default:
      for (const side of sidesNumbers)
        if (!sides?.[side])
          sides[side] = tables.random('overland-terrain').result;
        break;
  }
  return sides;
}
