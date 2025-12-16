import type { GeneratorOptions, Hex } from '@/types'
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

    switch (options.terrain) {
      case 'urban':
        terrain = tables.random('urban-district').result
        feature = tables.random('urban-terrain').result
        break
      case 'overland':
      default:
        terrain = tables.random('overland-terrain').result
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
