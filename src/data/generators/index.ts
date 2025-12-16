import { hexGenerator } from './hex'
import type { Generators } from '@/types/index'

export const generators: Generators = {
  [hexGenerator.name]: hexGenerator,
}
