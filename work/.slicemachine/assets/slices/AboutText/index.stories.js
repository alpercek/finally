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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"text":[{"type":"paragraph","text":"Qui in adipisicing laboris. Irure aliquip deserunt ad amet aute consequat tempor laborum eu tempor duis.","spans":[]}]}],"primary":{"title":[{"type":"paragraph","text":"Non Lorem mollit irure duis voluptate amet esse pariatur cillum adipisicing do reprehenderit. Et deserunt cupidatat occaecat dolor.","spans":[]}]},"id":"_Default","slice_type":"about_text"}
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
      mock: {"variation":"date","version":"sktwi1xtmkfgx8626","items":[{"date":[{"type":"paragraph","text":"Eu ipsum commodo nulla ut duis nulla adipisicing nulla eiusmod cillum adipisicing in. Cupidatat laborum mollit labore veniam. Irure sit laborum amet reprehenderit magna elit sit voluptate irure.","spans":[]}],"text":[{"type":"paragraph","text":"Incididunt ad proident excepteur do consectetur eiusmod officia do quis esse magna irure. Voluptate aliquip est ipsum occaecat ullamco proident dolor est sint.","spans":[]}]}],"primary":{"title":[{"type":"paragraph","text":"Laboris irure officia voluptate. Incididunt culpa dolor anim deserunt ullamco magna laborum eu reprehenderit minim culpa nulla adipisicing laboris.","spans":[]}]},"id":"_Date","slice_type":"about_text"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Date.storyName = ''
