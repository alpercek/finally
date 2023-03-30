<template>
  <div><SliceZone :slices="page.data.slices" :components="components" /><div class="fixed flex top-2/3 z-40 w-screen justify-end"><button class="" @click="toTop()">&#8593;</button></div></div>
</template>

<script>
import { components } from '~/slices'

export default {
  async asyncData ({ $prismic, params, store }) {
    const page = await $prismic.api.getByUID('page', params.uid)
    await store.dispatch('prismic/load')
    return {
      page
    }
  },
  data () {
    return { components }
  },
  head () {
    return {
      title: `${this.$prismic.asText(this.page.data.title)} | ${this.$prismic.asText(this.$store.state.prismic.settings.data.siteTitle)}`
    }
  },
  methods: { 
  toTop() {
    window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
});
  }
}
}
</script>
