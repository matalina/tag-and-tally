import type { GeneratorOptions } from '@/types/generators'
import type { Hex } from '@/types/locations'
import type { OverlandTerrain, DistrictTypes } from '@/types/terrain'
import { DiceRoll } from '@dice-roller/rpg-dice-roller'
import { useTablesStore } from '@/stores/random-tables'

export const hexGenerator = {
  name: 'hex',
  generator: (options: GeneratorOptions) => {
    const tables = useTablesStore()
    const result = new DiceRoll('1d10')
    const level = result.total
    let terrain: string
    let feature: string

    switch (options.terrainType) {
      case 'urban':
        terrain = options?.terrain
          ? (options.terrain as DistrictTypes)
          : tables.random('urban-district').result
        feature = tables.random('urban-terrain').result
        break
      case 'overland':
      default:
        terrain = options?.terrain
          ? (options.terrain as OverlandTerrain)
          : tables.random('overland-terrain').result
        feature = tables.random('overland-feature').result
        break
    }

    //name: string
    //sentence: TagAndTallySentence
    //description?: string | CharacterDescription
    //pointOfInterest: PointOfInterest
    return {
      level,
      terrain,
      feature,
    } as Hex
  },
}
