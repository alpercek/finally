<template>
  <Bounded as="section" class="bg-white px-4 overflow-hidden"><div :class="{ aaactive: sshowMobileMenu}" class="transition-all max-h-0 md:max-h-none">
    <div><PrismicRichText :field="slice.primary.title" @click="sshowMobileMenu = !sshowMobileMenu" class="!text-xl pb-4 hidden md:block"/>
      <div class="block md:hidden items-baseline flex gap-2" @click="sshowMobileMenu = !sshowMobileMenu"><PrismicRichText :field="slice.primary.title" class="!text-xl pb-4" /><b v-if="sshowMobileMenu">(-)</b><b v-else>(+)</b></div>
      <div v-if="slice.variation === 'default'" class="max-w-sm md:max-w-4xl grid grid-cols-1 items-center gap-0 justify-items-start"><div v-for="(item, i) in slice.items" :key="`slice-item-${i}` ">    
          <PrismicRichText :field="item.text" class=""/>
        </div></div>
        <div v-if="slice.variation === 'date'" class="max-w-sm md:max-w-4xl grid grid-cols-1 md:justify-items-stretch items-center gap-0 justify-items-start"><div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">    
          <div class="flex  gap-4"><PrismicRichText :field="item.date" class="w-1/2 md:flex-[1_0_auto] md:w-auto"/>
          <PrismicRichText :field="item.text" class="md:w-full"/></div>
        </div></div></div></div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  data(){
    return{
    sshowMobileMenu: false,
    }
  },
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
}
</script>
<style>
p{
  margin-bottom: 0px !important;
}
.aaactive{
  max-height: 200rem;
}

</style>