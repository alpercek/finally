import MyComponent from '../../../../slices/Text';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Text'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"qwd1":true}],"primary":{"text":[{"type":"paragraph","text":"Laboris id adipisicing ullamco sunt aliqua laborum ut fugiat in deserunt est. Proident in do cillum minim in veniam elit enim laborum fugiat culpa ut in veniam nostrud.","spans":[]},{"type":"paragraph","text":"Voluptate cupidatat deserunt pariatur elit exercitation mollit nostrud occaecat anim irure labore id. Duis quis in eu dolor anim veniam dolore laborum ex. Aliqua proident Lorem laboris ullamco proident consequat ad.","spans":[]},{"type":"paragraph","text":"Irure ad sunt eiusmod sint eiusmod excepteur anim consequat officia quis in aute aute excepteur.","spans":[]},{"type":"paragraph","text":"Culpa esse tempor ipsum do anim excepteur officia dolore dolore magna sit quis cillum non amet. Anim laborum est est. Anim magna fugiat dolor.","spans":[]}]},"id":"_Default","slice_type":"text"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

export const _TwoColumns = () => ({
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
      mock: {"variation":"twoColumns","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"text":[{"type":"paragraph","text":"Sit quis dolor exercitation nulla nostrud amet dolor sit et. Officia reprehenderit consectetur cupidatat culpa nulla dolor reprehenderit. Proident culpa do laboris mollit.","spans":[]}]},"id":"_TwoColumns","slice_type":"text"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TwoColumns.storyName = ''
