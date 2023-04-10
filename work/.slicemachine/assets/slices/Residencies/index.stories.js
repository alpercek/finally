import MyComponent from '../../../../slices/Residencies';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Residencies'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"field":"Solo","date":[{"type":"paragraph","text":"Irure quis est enim ea.","spans":[]}],"title":[{"type":"paragraph","text":"Id eu excepteur incididunt est. Pariatur ad id cillum aliqua ullamco ad labore cupidatat in excepteur irure voluptate minim. Ullamco labore ipsum ullamco.","spans":[]}]}],"primary":{},"id":"_Default","slice_type":"residencies"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
