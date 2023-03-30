import MyComponent from '../../../../slices/Hero';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Hero'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"text":[{"type":"heading1","text":"Force","spans":[]},{"type":"paragraph","text":"Consectetur esse sit adipisicing. Laborum quis esse culpa exercitation.","spans":[]}],"buttonLink":{"link_type":"Web","url":"http://google.com"},"buttonText":"careful","backgroundImage":{"dimensions":{"width":4000,"height":6000},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468"},"asdasd":66},"id":"_Default","slice_type":"hero"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
