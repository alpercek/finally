import MyComponent from '../../../../slices/Project';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Project'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":12288,"height":16384},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab"},"fig":[{"type":"paragraph","text":"Voluptate duis sit id magna sunt duis minim ea eiusmod deserunt. Mollit consequat aliquip qui in nostrud et fugiat amet eu ad tempor sint duis minim.","spans":[]}]}],"primary":{"namedateyear":[{"type":"paragraph","text":"Anim aute sint qui ea voluptate in tempor cupidatat amet. Lorem commodo amet in exercitation culpa cillum anim incididunt.","spans":[]}],"title":[{"type":"paragraph","text":"Consectetur nostrud laboris aliqua eiusmod.","spans":[]}],"description":[{"type":"paragraph","text":"Cupidatat ea sunt minim est quis deserunt consectetur dolor enim aliqua nulla culpa consectetur.","spans":[]}],"color":"#158419","arrowcolor":"#4a77d1"},"id":"_Default","slice_type":"project"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
