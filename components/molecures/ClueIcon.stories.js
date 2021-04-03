// import { action, configureActions } from '@storybook/addon-actions'
import ClueIcon from './ClueIcon.vue'
import Character from '~/domain/character'
export default {
  title: 'molecures/ClueIcon',
}

export const NuxtWebsite = () => ({
  components: {
    ClueIcon,
  },
  template: '<v-app><ClueIcon :character="character"/></v-app>',
  data() {
    return {
      character: new Character('blue', 'minokuba'),
    }
  },
  methods: {},
})
