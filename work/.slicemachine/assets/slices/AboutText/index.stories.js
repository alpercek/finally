import MyComponent from '../../../../slices/AboutText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/AboutText'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"text":[{"type":"paragraph","text":"Excepteur ut commodo do ullamco aute officia mollit Lorem dolor nostrud fugiat mollit nostrud anim.","spans":[]}]}],"primary":{"title":[{"type":"paragraph","text":"Commodo do nulla et Lorem aliquip ullamco. Velit reprehenderit culpa esse dolore est minim duis occaecat et minim commodo commodo ad magna irure.","spans":[]}]},"id":"_Default","slice_type":"about_text"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''

export const _Date = () => ({
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
      mock: {"variation":"date","version":"sktwi1xtmkfgx8626","items":[{"date":[{"type":"paragraph","text":"Eu ipsum commodo nulla ut duis nulla adipisicing nulla eiusmod cillum adipisicing in. Cupidatat laborum mollit labore veniam. Irure sit laborum amet reprehenderit magna elit sit voluptate irure.","spans":[]}],"text":[{"type":"paragraph","text":"Velit consequat laboris fugiat velit eu incididunt Lorem aute ex nisi consequat proident duis dolor.","spans":[]}]}],"primary":{"title":[{"type":"paragraph","text":"Aute adipisicing cillum veniam pariatur. Ullamco id anim officia veniam ad nostrud elit dolor quis.","spans":[]}]},"id":"_Date","slice_type":"about_text"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Date.storyName = ''
