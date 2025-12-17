import type { GeneratorOptions, Generators, TagAndTallyGenerator } from '@/types/generators'
import type { TagAndTallyObject } from '@/types/tag-and-tally'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { generators as generatorsData } from '@/data/generators'

export const useGeneratorsStore = defineStore('generators', () => {
  const generators = ref<Generators>({} as Generators)

  function init() {
    generators.value = generatorsData
  }

  function add(generator: TagAndTallyGenerator) {
    generators.value[generator.name] = generator
  }

  function remove(name: string) {
    delete generators.value[name]
  }

  function list() {
    return Object.keys(generators.value)
  }

  function generate(
    name: keyof Generators,
    count = 1,
    options: GeneratorOptions = {},
  ): TagAndTallyObject[] {
    const results: TagAndTallyObject[] = []
    for (let i = 0; i < count; i++) {
      const generator = generators.value[name]
      if (!generator) {
        throw new Error(`Generator ${name} not found`)
      }
      const result = generator.generator(options)
      results.push(result)
    }
    return results
  }

  return { generators, add, generate, delete: remove, init, list }
})
