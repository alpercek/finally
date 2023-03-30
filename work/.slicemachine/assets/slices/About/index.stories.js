import MyComponent from '../../../../slices/About';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/About'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{},"id":"_Default","slice_type":"about"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

export const _Image = () => ({
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
      mock: {"variation":"image","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{},"id":"_Image","slice_type":"about"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Image.storyName = ''

export const _DatedText = () => ({
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
      mock: {"variation":"datedText","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{},"id":"_DatedText","slice_type":"about"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DatedText.storyName = ''
