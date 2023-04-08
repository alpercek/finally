import MyComponent from '../../../../slices/Bibliography';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Bibliography'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"date":[{"type":"paragraph","text":"Reprehenderit nisi enim laboris in cupidatat amet officia est. Laboris magna anim qui irure officia cupidatat laborum occaecat. Aliquip duis nulla non occaecat ad.","spans":[]}],"text":[{"type":"paragraph","text":"Ut Lorem eiusmod minim nulla irure incididunt ut et culpa consectetur nisi. Magna velit nisi aliquip anim et et adipisicing proident pariatur quis. Eiusmod fugiat aliquip tempor sit veniam do laboris elit.","spans":[]}]}],"primary":{},"id":"_Default","slice_type":"bibliography"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
