// import { action, configureActions } from '@storybook/addon-actions'
import ClueChip from './ClueChip.vue'

export default {
  title: 'molecures/ClueChip',
}

export const NuxtWebsite = () => ({
  components: {
    ClueChip,
  },
  template: '<v-app><ClueChip :type="type" :name="name"/></v-app>',
  data() {
    return {
      type: '/icon/clue/red.png',
      name: 'minokuba',
    }
  },
  methods: {},
})
