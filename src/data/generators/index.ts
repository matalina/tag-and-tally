import { hexGenerator } from './hex'
import type { Generators } from '@/types/generators'

export const generators: Generators = {
  [hexGenerator.name]: hexGenerator,
}
