<template>
  <Bounded as="section" class="bg-white px-4 overflow-hidden">
    <div><PrismicRichText :field="slice.primary.title" class="font-circularbold text-xl"/>
      <div class="max-w-sm grid grid-cols-1 items-center gap-10 justify-items-start">
        <a :href="'mailto:' + $prismic.asText(slice.primary.email)"><PrismicRichText :field="slice.primary.email"  class="text-xl font-metrik hover:underline"/></a>
        <div class="text-xl font-metrik flex ">Based in {{ $prismic.asText(slice.primary.base)}}<span>&nbsp;</span> <a :href="'https://www.instagram.com/' + $prismic.asText(slice.primary.instagram)" class="hover:underline"> {{ $prismic.asText(slice.primary.instagram) }}</a></div>
      </div>
        <a :href="'http://' + $prismic.asText(slice.primary.website)"><PrismicRichText :field="slice.primary.website" class="text-xl font-metrik hover:underline"/></a>
        
        </div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'


export default {
  
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
 
}

</script>
<style>
p{
  margin-bottom: 0px !important;
}

</style>