import MyComponent from '../../../../slices/Education';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Education'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"date":[{"type":"paragraph","text":"Labore cillum cupidatat amet aute. Ut laboris pariatur sit mollit non dolore officia id eu cillum.","spans":[]}],"text":[{"type":"paragraph","text":"Commodo occaecat adipisicing magna qui non nulla.","spans":[]}]}],"primary":{},"id":"_Default","slice_type":"education"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
