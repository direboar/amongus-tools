// import { action, configureActions } from '@storybook/addon-actions'
import CharacterSettingPane from './CharacterSettingPane.vue'
import Character from '~/domain/character'

export default {
  title: 'molecures/CharacterSettingPane',
}

export const NuxtWebsite = () => ({
  components: {
    CharacterSettingPane,
  },
  template: '<v-app><CharacterSettingPane :character="character"/></v-app>',
  data() {
    return {}
  },
  methods: {
    character: new Character('red', 'RED'),
    // editNewItem: action('editNewItem'),
    // reload: action('reload'),
  },
})
