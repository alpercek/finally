import MyComponent from '../../../../slices/Collections';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Collections'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"text":[{"type":"paragraph","text":"Et nostrud ut ex. Excepteur velit enim cillum sit amet laborum voluptate tempor reprehenderit sint laboris qui. Dolore cillum sunt sunt enim incididunt nostrud consequat consectetur aute sunt Lorem deserunt amet cupidatat elit.","spans":[]}]}],"primary":{},"id":"_Default","slice_type":"collections"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
