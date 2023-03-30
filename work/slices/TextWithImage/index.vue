<template>
  <Bounded as="section" class="bg-white">
    <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <PrismicRichText :field="slice.primary.text" />
      
        <div v-if="slice.primary.image.url" class="bg-gray-100">
          <PrismicImage :field="slice.primary.image" />
        </div>
      
    </div>




    <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <PrismicRichText :field="slice.primary.namedateyear" />

      
        <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">    
          <PrismicImage :field="item.image" />
          <PrismicRichText :field="item.fig" />
        </div>
      <PrismicRichText :field="slice.primary.title" />
      <PrismicRichText :field="slice.primary.description" />
    </div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
}
</script>
