import MyComponent from '../../../../slices/AboutInfo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/AboutInfo'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"text":[{"type":"paragraph","text":"Amet in aliquip consequat laborum adipisicing labore amet culpa adipisicing.","spans":[]}]}],"primary":{"title":[{"type":"paragraph","text":"Elit sit laborum deserunt sint ad ullamco sit ipsum culpa adipisicing nulla eiusmod ex. Exercitation ut veniam labore nulla culpa labore amet laborum ea proident consectetur dolor cupidatat.","spans":[]}]},"id":"_Default","slice_type":"about_info"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
