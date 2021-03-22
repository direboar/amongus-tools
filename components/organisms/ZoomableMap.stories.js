// import { action, configureActions } from '@storybook/addon-actions'
import ZoomableMap from './ZoomableMap.vue'
export default {
  title: 'organisms/ZoomableMap',
}

export const NuxtWebsite = () => ({
  components: {
    ZoomableMap,
  },
  template: '<v-app><ZoomableMap :src="src"/></v-app>',
  data() {
    return {
      src: '/map/skeld.png',
    }
  },
  methods: {},
})
