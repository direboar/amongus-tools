// import { action, configureActions } from '@storybook/addon-actions'
import ClueChip from './ClueChip.vue'
import Character from '~/domain/character'
export default {
  title: 'molecures/ClueChip',
}

export const NuxtWebsite = () => ({
  components: {
    ClueChip,
  },
  template: '<v-app><ClueChip :character="character"/></v-app>',
  data() {
    return {
      character: new Character('blue', 'minokuba'),
    }
  },
  methods: {},
})
