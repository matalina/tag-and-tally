import type { TagAndTallyObject } from '@/types/tag-and-tally'
import type { Sides } from './locations'

export interface Generators {
  [name: string]: TagAndTallyGenerator
}

export interface TagAndTallyGenerator {
  name: string
  generator: (options: GeneratorOptions) => TagAndTallyObject
}

export type GeneratorOptions = {
  previousLevel?: number;
  terrain?: {
    type: string;
    previous: string;
  }
  sides?: Sides;
  [key: string]: unknown;
}
