import MyComponent from '../../../../slices/EnlargedSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/EnlargedSlider'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":3882,"height":2584},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085"},"title":[{"type":"paragraph","text":"Consectetur tempor anim irure dolore consequat nisi sit laborum Lorem deserunt. Irure non incididunt nostrud duis aute et ad mollit Lorem cillum aliquip velit laborum officia.","spans":[]}],"year":[{"type":"paragraph","text":"Consectetur non ex amet occaecat proident sunt esse occaecat nulla. Excepteur aliquip aliquip nulla ea ut. Tempor officia duis ex nostrud sunt.","spans":[]}],"materials":[{"type":"paragraph","text":"Nisi ex nulla ullamco. Sit et aute Lorem ex labore consequat nisi sunt velit consequat eu anim proident elit fugiat.","spans":[]}],"dimentions":[{"type":"paragraph","text":"Consectetur sunt laborum ea ipsum velit esse in laborum dolore sit ut fugiat sint. Nostrud nostrud dolor occaecat voluptate id mollit consequat ad id do. Laborum nulla in in nisi occaecat nisi do voluptate ea exercitation fugiat pariatur.","spans":[]}],"location":[{"type":"paragraph","text":"Veniam esse proident occaecat laborum et. Aliquip tempor esse labore velit do excepteur et nulla do aliquip. Exercitation consequat pariatur mollit elit proident id proident culpa.","spans":[]}]}],"primary":{"arrowcolor":"white"},"id":"_Default","slice_type":"enlarged_slider"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
