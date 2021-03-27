// import { action } from '@storybook/addon-actions'
import MapSelectButton from './MapSelectButton.vue'

export default {
  title: 'molecures/MapSelectButton',
}

export const NuxtWebsite = () => ({
  components: {
    MapSelectButton,
  },
  template:
    '<v-app><MapSelectButton :mapIndex="mapIndex" :currentIndex="currentIndex" @updateMapIndex="updateMapIndex"/>{{currentIndex}}</v-app>',
  data() {
    return {
      mapIndex: 5,
      currentIndex: 10,
    }
  },
  methods: {
    updateMapIndex(val) {
      this.currentIndex = val
    },
  },
})
