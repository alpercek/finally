<template>
  <Bounded as="section" class="bg-white px-4 overflow-hidden">
    <div><PrismicRichText :field="slice.primary.title" class=""/>
      <div v-if="slice.variation === 'default'" class="max-w-sm grid grid-cols-1 items-center gap-4 justify-items-start"><div v-for="(item, i) in slice.items" :key="`slice-item-${i}` ">    
          <PrismicRichText :field="item.text" class=""/>
        </div></div>
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
<style>
p{
  margin-bottom: 0px !important;
}

</style>