<template><div><Bounded as="section" class=" w-screen -translate-y-6">
  <div class="relative"><div class="gap-0 grid-cols-1 justify-items-center grid">
        <a href="/" class=" text-gray-400 !z-40 absolute -translate-y-6">&#x2715</a>
   
      
    <VueSlickCarousel ref="carousel" :arrows="false" :dots="true" :adaptiveHeight="true" :autoplay="true" class="z-0 h-full w-full" style="-webkit-transform: scaleY(-1); transform: scaleY(-1);">
        <template #customPaging="page">
      <div class="custom-dot translate-y-16 font-circular !font-normal text-lg">
        {{ page+1 }}
      </div>
    </template>
      <div v-for="(item, i) in slice.items" :key="`slice-item-${i}` " class="!relative !grid items-center aaaslick-list gap-0">    
          
          <div class="max-w-xs !no-underline text-center justify-self-center mb-6 h-12 text-xs font-metrik">{{ $prismic.asText(item.title) }}<span v-if="$prismic.asText(item.year) !== ''"> ({{ $prismic.asText(item.year) }})</span> - {{ $prismic.asText(item.materials) }}<span v-if="$prismic.asText(item.dimentions) !== '' && $prismic.asText(item.materials) !== '' ">,</span> {{ $prismic.asText(item.dimentions) }}<span v-if="$prismic.asText(item.location) !== ''"> ({{ $prismic.asText(item.location) }})</span></div>
          <PrismicImage :field="item.image" class="w-screen"/>
          <div :id="i"  class="absolute inline-0 z-40 h-full w-full top-0 hidden md:block cursor-zoom-in misir"></div>
        </div>
    </VueSlickCarousel><div class="flex justify-between px-4 h-12 w-full -translate-y-1/2 absolute top-1/2" v-if="slice.items.length > 1"> <button @click="showPrev" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow left "></i></button><button @click="showNext" class="hidden md:block"><i :style="{'border-color':slice.primary.arrowcolor}" class="arrow right"></i></button></div>
  
  </div></div></Bounded><div v-for="(item, i) in slice.items" :key="`slice-item-${i}` " id="bilem"><div :id="i+'a'" @click="sakla" class="overflow-scroll hidden h-screen w-screen inset-0 fixed z-50 cursor-crosshair kaykay"><PrismicImage :field="item.image" class="w-[200%] z-60 !max-w-none"/></div></div></div>
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
    sshowMobileMenu: false,
    goster: false,
    }
  },
  mounted(){
    document.getElementById("bilem").firstChild.addEventListener('mousemove', function(){
      document.getElementById("bilem").firstChild.scrollTo({
  top: `${event.y}`/(window.innerHeight*2)*10000,
  left: `${event.x}`/(window.innerWidth*2)*10000,
});
    });


let fed = document.getElementsByClassName("misir")
 
for (let index = 0; index < fed.length; index++) {
  
  fed[index].addEventListener("click", function(){
    document.getElementById(event.target.id + "a").style.display = "block"
  
  },false);
}

  },
  methods: {
      showNext() {
        this.$refs.carousel.next()
        
      },
      showPrev() {
        
        this.$refs.carousel.prev()
      },
      sakla(){
        event.target.parentElement.style.display = "none"
      }
      },
    
    name: 'MyComponent',
    components: { VueSlickCarousel },
    props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
  }
</script> 
<style>
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
.aaaslick-list{
  -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
}
.giz{
  display: none;
}
</style>