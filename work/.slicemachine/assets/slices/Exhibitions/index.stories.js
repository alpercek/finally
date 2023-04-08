import MyComponent from '../../../../slices/Exhibitions';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Exhibitions'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"field":"Solo","date":[{"type":"paragraph","text":"Nisi cillum duis irure non nisi.","spans":[]}],"title":[{"type":"paragraph","text":"Esse aliquip id nostrud amet occaecat est fugiat adipisicing culpa cupidatat amet. Lorem incididunt esse amet voluptate aute nisi ea.","spans":[]}]}],"primary":{},"id":"_Default","slice_type":"exhibitions"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
