import MyComponent from '../../../../slices/AboutImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/AboutImage'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"image":{"dimensions":{"width":4380,"height":2895},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db"},"fig":[{"type":"paragraph","text":"Tempor quis duis dolore voluptate excepteur sint commodo elit occaecat nisi. Pariatur nisi sint deserunt voluptate eiusmod ex do nostrud nulla minim voluptate. Laborum sint exercitation ut aliqua nisi.","spans":[]}]}],"primary":{},"id":"_Default","slice_type":"about_image"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
