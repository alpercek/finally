<template>
  <Bounded as="section" class="bg-white relative">
    <!--Code for 100 section-->
    <div v-if="slice.variation === 'default'">
      <div class="grid grid-cols-1 items-center gap-4 justify-items-center md:justify-items-start">
        <div v-if="slice.primary.image.url" class="bg-gray-100">
          <button @click="showEnlarge=true, computed()" class="hidden md:block"><PrismicImage :field="slice.primary.image" /></button><PrismicImage :field="slice.primary.image" class="md:hidden"/>
        </div>
          <div class="max-w-xs text-center md:text-left"><PrismicRichText :field="slice.primary.fig"/></div>
      </div>
  
  
    <div :class="{ bigg: showEnlarge}" class="pb-96 hidden px-4 grid-cols-1 justify-items-center fixed h-screen w-screen z-40 bg-white inset-0 overflow-y-scroll kaykay">
        <div class="w-full px-0 pt-5 flex flex-wrap items-baseline justify-between leading-none"><p class="text-xl tracking-tight nuxt-link-active">Pip Passchier</p><div class="flex flex-wrap gap-6 md:gap-10 pr-8 hidden md:flex"><a href="/" class="tracking-tight text-slate-800 nuxt-link-exact-active">WORKS</a><a href="projects" class="tracking-tight text-slate-800">PROJECTS</a><a href="about" class="tracking-tight text-slate-800">ABOUT</a></div></div>
      <div class="gap-4 grid-cols-1 justify-items-center grid">
        <button @click="showEnlarge=false, computed()">&#x2715</button>
      <div class="max-w-xs text-center"><PrismicRichText :field="slice.primary.fig" class="no-underline"/></div>
      <div v-if="slice.primary.image.url" class="bg-gray-100">
        <PrismicImage :field="slice.primary.image" />
      </div>
    </div>
  </div>
  
  
  </div>
    <!--Code for 33/66 section-->
    <div v-if="slice.variation === '3366'"><div class="md:flex md:flex-wrap items-start gap-4 grid px-0">
        <div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-4 md:w-[33.33%]">
    <div v-if="slice.primary.image.url" class="bg-gray-100 h-full">
      <button @click="showEnlarge=true, computed()" class="hidden md:block"><PrismicImage :field="slice.primary.image33" /></button><PrismicImage :field="slice.primary.image33" class="md:hidden"/>
      </div>
      <div class="max-w-xs text-center md:text-left">
    <PrismicRichText :field="slice.primary.fig33"/></div>
  </div><div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-4 md:w-[calc(66.66%-1rem)]">
      <div v-if="slice.primary.image.url" class="bg-gray-100 h-full">
        <button @click="showEnlarge=true, computed()" class="hidden md:block"><PrismicImage :field="slice.primary.image" /></button><PrismicImage :field="slice.primary.image" class="md:hidden"/>
      </div>
      <div class="max-w-xs text-center md:text-left">
    <PrismicRichText :field="slice.primary.fig"/></div>
  </div>
  </div>

    <div :class="{ bigg: showEnlarge}" class="pb-96 hidden px-4 grid-cols-1 justify-items-center fixed h-screen w-screen z-40 bg-white inset-0 overflow-y-scroll kaykay">
      <div class="w-full px-0 pt-5 flex flex-wrap items-baseline justify-between leading-none"><p class="text-xl tracking-tight nuxt-link-exact-active nuxt-link-active">Pip Passchier</p><div class="flex flex-wrap gap-6 md:gap-10 pr-8 hidden md:flex"><a href="/" class="tracking-tight text-slate-800 nuxt-link-exact-active">WORKS</a><a href="projects" class="tracking-tight text-slate-800">PROJECTS</a><a href="about" class="tracking-tight text-slate-800">ABOUT</a></div></div>
      <div class="gap-4 grid-cols-1 justify-items-center grid">
        <button @click="showEnlarge=false, computed()">&#x2715</button>

      
      <VueSlickCarousel ref="carousel" :arrows="false" :dots="true" :adaptiveHeight="true" :autoplay="true" class="z-60 h-full w-full" style="-webkit-transform: scaleY(-1); transform: scaleY(-1);">
        <template #customPaging="page">
      <div class="custom-dot translate-y-14">
        {{ page+1 }}
      </div>
    </template>
        <div class="!relative !grid items-center aaaslick-list gap-8">
          <PrismicRichText :field="slice.primary.fig" class="max-w-xs !no-underline text-center justify-self-center"/>    
          <PrismicImage :field="slice.primary.image" class="bg-sky-500/100"/>
          
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
      </div>
      <div class="!relative !grid items-center aaaslick-list gap-8">
          <PrismicRichText :field="slice.primary.fig33" class="max-w-xs !no-underline text-center justify-self-center"/>    
          <PrismicImage :field="slice.primary.image33" />
          
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
      </div>
    
    </VueSlickCarousel><div class="flex justify-between px-4 h-12 w-full -translate-y-1/2 absolute top-1/2"> <button @click="showPrev" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow left "></i></button><button @click="showNext" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow right"></i></button></div>
    </div>
  </div>
  

</div>
    <!--Code for 50/50 section-->
    <div v-if="slice.variation === '5050'"><div class="md:flex md:flex-wrap md:justify-between items-start gap-4 grid px-0">
        <div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-4 md:w-[calc(50%-0.5rem)]">
    <div v-if="slice.primary.image.url" class="bg-gray-100 h-full">
      <button @click="showEnlarge=true, computed()" class="hidden md:block"><PrismicImage :field="slice.primary.imageBig" /></button><PrismicImage :field="slice.primary.imageBig" class="md:hidden"/>
      </div>
      <div class="max-w-xs text-center md:text-left">
    <PrismicRichText :field="slice.primary.figBig"/></div>
  </div>
  
  <div class="md:w-[calc(50%-0.5rem)] md:grid md:gap-4">
  <div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-4 md:w-full">
      <div v-if="slice.primary.image.url" class="bg-gray-100 h-full">
        <button @click="showEnlarge=true, computed()" class="hidden md:block"><PrismicImage :field="slice.primary.image" /></button><PrismicImage :field="slice.primary.image" class="md:hidden"/>
      </div>
      <div class="max-w-xs text-center md:text-left">
    <PrismicRichText :field="slice.primary.fig"/></div>
  </div><div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-4 md:w-full">
      <div v-if="slice.primary.image.url" class="bg-gray-100 h-full">
        <button @click="showEnlarge=true, computed()" class="hidden md:block"><PrismicImage :field="slice.primary.image2" /></button><PrismicImage :field="slice.primary.image2" class="md:hidden"/>
      </div>
      <div class="max-w-xs text-center md:text-left">
    <PrismicRichText :field="slice.primary.fig2"/></div>
  </div></div>
  </div>

  <div :class="{ bigg: showEnlarge}" class="pb-96 hidden px-4 grid-cols-1 justify-items-center fixed h-screen w-screen z-40 bg-white inset-0 overflow-y-scroll kaykay">
      <div class="w-full px-0 pt-5 flex flex-wrap items-baseline justify-between leading-none"><p class="text-xl tracking-tight nuxt-link-exact-active nuxt-link-active">Pip Passchier</p><div class="flex flex-wrap gap-6 md:gap-10 pr-8 hidden md:flex"><a href="/" class="tracking-tight text-slate-800 nuxt-link-exact-active">WORKS</a><a href="projects" class="tracking-tight text-slate-800">PROJECTS</a><a href="about" class="tracking-tight text-slate-800">ABOUT</a></div></div>
      <div class="gap-4 grid-cols-1 justify-items-center grid">
        <button @click="showEnlarge=false, computed()">&#x2715</button>

      
      <VueSlickCarousel ref="carousel" :arrows="false" :dots="true" :adaptiveHeight="true" :autoplay="true" class="z-60 h-full w-full" style="-webkit-transform: scaleY(-1); transform: scaleY(-1);">
        <template #customPaging="page">
      <div class="custom-dot translate-y-14">
        {{ page+1 }}
      </div>
    </template>
        <div class="!relative !grid items-center aaaslick-list gap-8">
          <PrismicRichText :field="slice.primary.fig" class="max-w-xs !no-underline text-center justify-self-center"/>    
          <PrismicImage :field="slice.primary.image" class="bg-sky-500/100"/>
          
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
      </div>
      <div class="!relative !grid items-center aaaslick-list gap-8">
          <PrismicRichText :field="slice.primary.fig2" class="max-w-xs !no-underline text-center justify-self-center"/>    
          <PrismicImage :field="slice.primary.image2" />
          
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
      </div>
      <div class="!relative !grid items-center aaaslick-list gap-8">
          <PrismicRichText :field="slice.primary.figBig" class="max-w-xs !no-underline text-center justify-self-center"/>    
          <PrismicImage :field="slice.primary.imageBig" />
          
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
      </div>
    
    </VueSlickCarousel><div class="flex justify-between px-4 h-12 w-full -translate-y-1/2 absolute top-1/2"> <button @click="showPrev" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow left "></i></button><button @click="showNext" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow right"></i></button></div>
    </div>
  </div>




</div>
    <!--Code for 33/33/33 section-->
    <div v-if="slice.variation === '333333'"><div class="md:flex md:flex-wrap md:justify-between items-start gap-4 grid px-0">
        <div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-4 md:w-[calc(33%-0.6rem)]">
    <div v-if="slice.primary.image.url" class="bg-gray-100 h-full">
      <button @click="showEnlarge=true, computed()" class="hidden md:block"><PrismicImage :field="slice.primary.image" /></button><PrismicImage :field="slice.primary.image" class="md:hidden"/>
      </div>
      <div class="max-w-xs text-center md:text-left">
    <PrismicRichText :field="slice.primary.fig"/></div>
  </div><div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-4 md:w-[calc(33%-0.6rem)]">
      <div v-if="slice.primary.image.url" class="bg-gray-100 h-full">
        <button @click="showEnlarge=true, computed()" class="hidden md:block"><PrismicImage :field="slice.primary.image2" /></button><PrismicImage :field="slice.primary.image2" class="md:hidden"/>
      </div>
      <div class="max-w-xs text-center md:text-left">
    <PrismicRichText :field="slice.primary.fig2"/></div>
  </div><div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-4 md:w-[calc(33%-0.6rem)]">
      <div v-if="slice.primary.image.url" class="bg-gray-100 h-full">
        <button @click="showEnlarge=true, computed()" class="hidden md:block"><PrismicImage :field="slice.primary.image3" /></button><PrismicImage :field="slice.primary.image3" class="md:hidden"/>
      </div>
      <div class="max-w-xs text-center md:text-left">
    <PrismicRichText :field="slice.primary.fig3"/></div>
  </div>
  </div>

  <div :class="{ bigg: showEnlarge}" class="pb-96 hidden px-4 grid-cols-1 justify-items-center fixed h-screen w-screen z-40 bg-white inset-0 overflow-y-scroll kaykay">
      <div class="w-full px-0 pt-5 flex flex-wrap items-baseline justify-between leading-none"><p class="text-xl tracking-tight nuxt-link-exact-active nuxt-link-active">Pip Passchier</p><div class="flex flex-wrap gap-6 md:gap-10 pr-8 hidden md:flex"><a href="/" class="tracking-tight text-slate-800 nuxt-link-exact-active">WORKS</a><a href="projects" class="tracking-tight text-slate-800">PROJECTS</a><a href="about" class="tracking-tight text-slate-800">ABOUT</a></div></div>
      <div class="gap-4 grid-cols-1 justify-items-center grid">
        <button @click="showEnlarge=false, computed()">&#x2715</button>

      
      <VueSlickCarousel ref="carousel" :arrows="false" :dots="true" :adaptiveHeight="true" :autoplay="true" class="z-60 h-full w-full" style="-webkit-transform: scaleY(-1); transform: scaleY(-1);">
        <template #customPaging="page">
      <div class="custom-dot translate-y-14">
        {{ page+1 }}
      </div>
    </template>
        <div class="!relative !grid items-center aaaslick-list gap-8">
          <PrismicRichText :field="slice.primary.fig" class="max-w-xs !no-underline text-center justify-self-center"/>    
          <PrismicImage :field="slice.primary.image" class="bg-sky-500/100"/>
          
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
      </div>
      <div class="!relative !grid items-center aaaslick-list gap-8">
          <PrismicRichText :field="slice.primary.fig2" class="max-w-xs !no-underline text-center justify-self-center"/>    
          <PrismicImage :field="slice.primary.image2" />
          
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
      </div>
      <div class="!relative !grid items-center aaaslick-list gap-8">
          <PrismicRichText :field="slice.primary.fig3" class="max-w-xs !no-underline text-center justify-self-center"/>    
          <PrismicImage :field="slice.primary.image3" />
          
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
      </div>
    
    </VueSlickCarousel><div class="flex justify-between px-4 h-12 w-full -translate-y-1/2 absolute top-1/2"> <button @click="showPrev" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow left "></i></button><button @click="showNext" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow right"></i></button></div>
    </div>
  </div>


</div>
    <!--Code for 40/60 section-->
    <div v-if="slice.variation === '4060'"><div class="md:flex md:flex-wrap items-start gap-4 grid px-0">
        <div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-4 md:w-[40%]">
    <div v-if="slice.primary.image.url" class="bg-gray-100 h-full">
      <button @click="showEnlarge=true, computed()" class="hidden md:block"><PrismicImage :field="slice.primary.image" /></button><PrismicImage :field="slice.primary.image" class="md:hidden"/>
      </div>
      <div class="max-w-xs text-center md:text-left">
    <PrismicRichText :field="slice.primary.fig"/></div>
  </div><div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-4 md:w-[calc(60%-1rem)]">
      <div v-if="slice.primary.image.url" class="bg-gray-100 h-full">
        <button @click="showEnlarge=true, computed()" class="hidden md:block"><PrismicImage :field="slice.primary.image60" /></button><PrismicImage :field="slice.primary.image60" class="md:hidden"/>
      </div>
      <div class="max-w-xs text-center md:text-left">
    <PrismicRichText :field="slice.primary.fig60"/></div>
  </div>
  </div>

  <div :class="{ bigg: showEnlarge}" class="pb-96 hidden px-4 grid-cols-1 justify-items-center fixed h-screen w-screen z-40 bg-white inset-0 overflow-y-scroll kaykay">
      <div class="w-full px-0 pt-5 flex flex-wrap items-baseline justify-between leading-none"><p class="text-xl tracking-tight nuxt-link-exact-active nuxt-link-active">Pip Passchier</p><div class="flex flex-wrap gap-6 md:gap-10 pr-8 hidden md:flex"><a href="/" class="tracking-tight text-slate-800 nuxt-link-exact-active">WORKS</a><a href="projects" class="tracking-tight text-slate-800">PROJECTS</a><a href="about" class="tracking-tight text-slate-800">ABOUT</a></div></div>
      <div class="gap-4 grid-cols-1 justify-items-center grid">
        <button @click="showEnlarge=false, computed()">&#x2715</button>

      
      <VueSlickCarousel ref="carousel" :arrows="false" :dots="true" :adaptiveHeight="true" :autoplay="true" class="z-60 h-full w-full" style="-webkit-transform: scaleY(-1); transform: scaleY(-1);">
        <template #customPaging="page">
      <div class="custom-dot translate-y-14">
        {{ page+1 }}
      </div>
    </template>
        <div class="!relative !grid items-center aaaslick-list gap-8">
          <PrismicRichText :field="slice.primary.fig" class="max-w-xs !no-underline text-center justify-self-center"/>    
          <PrismicImage :field="slice.primary.image" class="bg-sky-500/100"/>
          
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
      </div>
      <div class="!relative !grid items-center aaaslick-list gap-8">
          <PrismicRichText :field="slice.primary.fig60" class="max-w-xs !no-underline text-center justify-self-center"/>    
          <PrismicImage :field="slice.primary.image60" />
          
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
      </div>
    
    </VueSlickCarousel><div class="flex justify-between px-4 h-12 w-full -translate-y-1/2 absolute top-1/2"> <button @click="showPrev" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow left "></i></button><button @click="showNext" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow right"></i></button></div>
    </div>
  </div>


</div>
    <!--Code for 60/40section-->
    <div v-if="slice.variation === '6040'"><div class="md:flex md:flex-wrap items-start gap-4 grid px-0">
        <div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-4 md:w-[calc(60%-1rem)]">
    <div v-if="slice.primary.image.url" class="bg-gray-100 h-full">
      <button @click="showEnlarge=true, computed()" class="hidden md:block"><PrismicImage :field="slice.primary.image60" /></button><PrismicImage :field="slice.primary.image60" class="md:hidden"/>
      </div>
      <div class="max-w-xs text-center md:text-left">
    <PrismicRichText :field="slice.primary.fig60"/></div>
  </div><div class="grid grid-cols-1 items-center justify-items-center md:justify-items-start gap-4 md:w-[40%]">
      <div v-if="slice.primary.image.url" class="bg-gray-100 h-full">
        <button @click="showEnlarge=true, computed()" class="hidden md:block"><PrismicImage :field="slice.primary.image" /></button><PrismicImage :field="slice.primary.image" class="md:hidden"/>
      </div>
      <div class="max-w-xs text-center md:text-left">
    <PrismicRichText :field="slice.primary.fig"/></div>
  </div>
  </div>

  <div :class="{ bigg: showEnlarge}" class="pb-96 hidden px-4 grid-cols-1 justify-items-center fixed h-screen w-screen z-40 bg-white inset-0 overflow-y-scroll kaykay">
      <div class="w-full px-0 pt-5 flex flex-wrap items-baseline justify-between leading-none"><p class="text-xl tracking-tight nuxt-link-exact-active nuxt-link-active">Pip Passchier</p><div class="flex flex-wrap gap-6 md:gap-10 pr-8 hidden md:flex"><a href="/" class="tracking-tight text-slate-800 nuxt-link-exact-active">WORKS</a><a href="projects" class="tracking-tight text-slate-800">PROJECTS</a><a href="about" class="tracking-tight text-slate-800">ABOUT</a></div></div>
      <div class="gap-4 grid-cols-1 justify-items-center grid">
        <button @click="showEnlarge=false, computed()">&#x2715</button>

      
      <VueSlickCarousel ref="carousel" :arrows="false" :dots="true" :adaptiveHeight="true" :autoplay="true" class="z-60 h-full w-full" style="-webkit-transform: scaleY(-1); transform: scaleY(-1);">
        <template #customPaging="page">
      <div class="custom-dot translate-y-14">
        {{ page+1 }}
      </div>
    </template>
        <div class="!relative !grid items-center aaaslick-list gap-8">
          <PrismicRichText :field="slice.primary.fig" class="max-w-xs !no-underline text-center justify-self-center"/>    
          <PrismicImage :field="slice.primary.image" class="bg-sky-500/100"/>
          
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
      </div>
      <div class="!relative !grid items-center aaaslick-list gap-8">
          <PrismicRichText :field="slice.primary.fig60" class="max-w-xs !no-underline text-center justify-self-center"/>    
          <PrismicImage :field="slice.primary.image60" />
          
          <div class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block"></div>
      </div>
    
    </VueSlickCarousel><div class="flex justify-between px-4 h-12 w-full -translate-y-1/2 absolute top-1/2"> <button @click="showPrev" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow left "></i></button><button @click="showNext" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow right"></i></button></div>
    </div>
  </div>


</div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  
  data(){
    return{
    showEnlarge: false,
    }
  },
  
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  methods: {
    computed(){
      if (this.showEnlarge === true){
    document.getElementsByTagName("html")[0].style.overflow = "hidden"}
     else{document.getElementsByTagName("html")[0].style.overflow = "auto"}
  },
  showNext() {
        this.$refs.carousel.next()
        
      },
      showPrev() {
        
        this.$refs.carousel.prev()
      },
    },
    name: 'MyComponent',
    components: { VueSlickCarousel },
}
</script>
<style>
.bigg{
  display: grid;
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
.slick-dots .slick-active {
  text-decoration-line: underline;
}
.custom-dot{
  font-weight: 700;
 
}
ul.slick-dots{
  -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
}
.aaaslick-list{
  -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
}
</style>