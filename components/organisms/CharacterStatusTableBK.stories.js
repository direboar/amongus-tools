// import { action, configureActions } from '@storybook/addon-actions'
import CharacterStatusTable from './CharacterStatusTableBK.vue'
import Character from '~/domain/character'

export default {
  title: 'organisms/CharacterStatusTableBK',
}

export const NuxtWebsite = () => ({
  components: {
    CharacterStatusTable,
  },
  template: '<v-app><CharacterStatusTable :characters="characters"/></v-app>',
  data() {
    return {
      characters: [
        new Character('black'),
        new Character('blue'),
        new Character('brown'),
        new Character('green'),
        new Character('lime'),
        new Character('orange'),
        new Character('pink'),
        new Character('red'),
        new Character('skyblue'),
        new Character('white'),
        new Character('yellow'),
      ],
      // dbid: 'xxx',
    }
  },
  methods: {
    // editNewItem: action('editNewItem'),
    // reload: action('reload'),
  },
})
