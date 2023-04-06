<template><Bounded as="section" :style="{'border-top-color':slice.primary.color}" class="bg-white border-t-2 !pb-0">
  <div v-if="slice.primary.open" class="hidden md:block">
    <div @click="sshowMobileMenu = !sshowMobileMenu" class="flex justify-between"><PrismicRichText :field="slice.primary.namedateyear" class="px-4 md:px-0"/><b v-if="sshowMobileMenu">&#9660;</b><b v-else>&#9650;</b></div><div :class="{ aactive: !sshowMobileMenu}" class="max-h-0 transition-all overflow-hidden relative">
      
    <VueSlickCarousel ref="acarousel" :variableWidth="true" :centerMode="true" :arrows="false" :autoplay="true" >
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="relative">    
          <PrismicImage :field="item.image" class="h-96 pl-4"/>
          <PrismicRichText :field="item.fig" class="px-4 md:px-0 max-w-xs text-gray-300 !pl-6"/>
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
        </div>
    </VueSlickCarousel><div v-if="slice.items.length > 1" class="flex justify-between px-4 h-12 w-full -translate-y-1/2 absolute top-1/3"> <button @click="ashowPrev" ><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow left "></i></button><button @click="ashowNext" ><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow right"></i></button></div>
  <div :class="{ aaaaactive: ssshowMobileMenu}" class="transition-all max-h-0 md:max-h-none grid grid-cols-1 items-center gap-4 justify-items-start pt-6 px-4 md:px-0"><PrismicRichText :field="slice.primary.title" class="!text-xl hidden md:block"/><div class="block md:hidden items-baseline flex gap-2"><PrismicRichText :field="slice.primary.title" class="!text-xl pb-4" @click="ssshowMobileMenu = !ssshowMobileMenu"/><b v-if="ssshowMobileMenu">(-)</b><b v-else>(+)</b></div>
      <PrismicRichText :field="slice.primary.description" class="max-w-2xl" /></div>
  </div></div>
  <div v-if="!slice.primary.open" class="hidden md:block">
    <div @click="sshowMobileMenu = !sshowMobileMenu" class="flex justify-between"><PrismicRichText :field="slice.primary.namedateyear" class="px-4 md:px-0"/><b v-if="sshowMobileMenu">&#9650;</b><b v-else>&#9660;</b></div><div :class="{ aactive: sshowMobileMenu}" class="max-h-0 transition-all overflow-hidden relative">
      
    <VueSlickCarousel ref=uid :variableWidth="true" :centerMode="true" :arrows="false" :autoplay="true" >
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="relative">    
          <PrismicImage :field="item.image" class="h-96 pl-4"/>
          <PrismicRichText :field="item.fig" class="px-4 md:px-0 max-w-xs text-gray-300 !pl-6"/>
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
        </div>
    </VueSlickCarousel><div v-if="slice.items.length > 1" class="flex justify-between px-4 h-12 w-full -translate-y-1/2 absolute top-1/3"> <button @click="showPrev" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow left "></i></button><button @click="showNext" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow right"></i></button></div>
  <div :class="{ aaaaactive: ssshowMobileMenu}" class="transition-all max-h-0 md:max-h-none grid grid-cols-1 items-center gap-4 justify-items-start pt-6 px-4 md:px-0"><PrismicRichText :field="slice.primary.title" class="!text-xl hidden md:block"/><div class="block md:hidden items-baseline flex gap-2"><PrismicRichText :field="slice.primary.title" class="!text-xl pb-4" @click="ssshowMobileMenu = !ssshowMobileMenu"/><b v-if="ssshowMobileMenu">(-)</b><b v-else>(+)</b></div>
      <PrismicRichText :field="slice.primary.description" class="max-w-2xl" /></div>
  </div></div>
  <div class="md:hidden block">
    <div @click="sshowMobileMenu = !sshowMobileMenu" ><PrismicRichText :field="slice.primary.namedateyear" class="px-4 text-lg font-medium"/></div><div :class="{ aactive: sshowMobileMenu}" class="max-h-0 transition-all overflow-hidden relative">
      
    <VueSlickCarousel ref="mcarousel" :arrows="false" :autoplay="true" >
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="relative">    
          <div class="max-h-96 overflow-hidden"><PrismicImage :field="item.image" class="h-96 w-screen"/></div>
          <PrismicRichText :field="item.fig" class="px-4 md:px-0 max-w-xs text-gray-300 !pl-6"/>
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
        </div>
    </VueSlickCarousel>
  <div :class="{ aaaaactive: ssshowMobileMenu}" class="transition-all max-h-0 md:max-h-none grid grid-cols-1 items-center gap-4 justify-items-start pt-6 px-4 md:px-0"><PrismicRichText :field="slice.primary.title" class="!text-xl hidden md:block"/><div class="block md:hidden items-baseline flex gap-2"><PrismicRichText :field="slice.primary.title" class="!text-xl pb-4" @click="ssshowMobileMenu = !ssshowMobileMenu"/><b v-if="ssshowMobileMenu">(-)</b><b v-else>(+)</b></div>
      <PrismicRichText :field="slice.primary.description" class="max-w-2xl" /></div>
  </div></div></Bounded>
</template>

<script>
  import { getSliceComponentProps } from '@prismicio/vue/components'

  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { slice } from 'lodash'
 
  export default {
    data(){
    return{
    sshowMobileMenu: false,
    ssshowMobileMenu: false,
    uid: slice.id
    }
  },
  methods: {
      showNext() {
        this.$refs.uid.next()
        
      },
      showPrev() {
        
        this.$refs.uid.prev()
      },
      ashowNext() {
        
        this.$refs.acarousel.next()
      },
      ashowPrev() {
        
        this.$refs.acarousel.prev()
      },


    },
    name: 'MyComponent',
    components: { VueSlickCarousel },
    props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
  }
</script> 
<style>
.aactive{
  max-height: 200rem;
  padding-bottom: 4rem;
}
.aaaaactive{
  max-height: 200rem;
}
.arrow {
  border: solid;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 12px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

</style>