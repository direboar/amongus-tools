// import { action, configureActions } from '@storybook/addon-actions'
import CharacterAliveButton from './CharacterAliveButton.vue'

export default {
  title: 'molecures/CharacterAliveButton',
}

export const NuxtWebsite = () => ({
  components: {
    CharacterAliveButton,
  },
  template: '<v-app><CharacterAliveButton :alive.sync="alive"/></v-app>',
  data() {
    return {
      alive: true,
    }
  },
  methods: {},
})
