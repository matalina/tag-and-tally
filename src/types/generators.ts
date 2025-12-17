import type { TagAndTallyObject } from '@/types/tag-and-tally'

export interface Generators {
  [name: string]: TagAndTallyGenerator
}

export interface TagAndTallyGenerator {
  name: string
  generator: (options: GeneratorOptions) => TagAndTallyObject
}

export type GeneratorOptions = Record<string, string | number | boolean>
