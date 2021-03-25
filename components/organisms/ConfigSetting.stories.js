// import { action, configureActions } from '@storybook/addon-actions'
import ConfigSetting from './ConfigSetting.vue'
import Character from '~/domain/character'

export default {
  title: 'organisms/ConfigSetting',
}

export const NuxtWebsite = () => ({
  components: {
    ConfigSetting,
  },
  template: '<v-app><ConfigSetting :characters="characters"/></v-app>',
  data() {
    return {
      characters: [
        new Character('black', 'toma'),
        new Character('blue', 'minokuba'),
        new Character('brown', 'diablo'),
        new Character('green', 'GREEEEN'),
        new Character('lime', 'mojinjp'),
        new Character('orange', 'metaB'),
        new Character('pink', 'PIIINK'),
        new Character('red', 'yuusui'),
        new Character('skyblue', 'SKYBLLUE'),
        new Character('white', 'shiromedaka'),
        new Character('yellow', 'GAU'),
      ],
      // maybeClue: [],
      // maybeImpostor: [],
      // killed: [],
      // hunged: [],
    }
  },
  methods: {
    // editNewItem: action('editNewItem'),
    // reload: action('reload'),
  },
})
