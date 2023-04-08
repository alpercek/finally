import MyComponent from '../../../../slices/ContactInfo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ContactInfo'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"text":[{"type":"paragraph","text":"Amet in aliquip consequat laborum adipisicing labore amet culpa adipisicing.","spans":[]}]}],"primary":{"title":[{"type":"paragraph","text":"Commodo incididunt aliqua deserunt.","spans":[]}]},"id":"_Default","slice_type":"about_info"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
