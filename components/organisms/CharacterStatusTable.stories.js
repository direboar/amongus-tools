// import { action, configureActions } from '@storybook/addon-actions'
import CharacterStatusTable from './CharacterStatusTable.vue'
import Character from '~/domain/character'

export default {
  title: 'organisms/CharacterStatusTable',
}

export const NuxtWebsite = () => ({
  components: {
    CharacterStatusTable,
  },
  template:
    '<v-app><CharacterStatusTable :marks="marks" :characters="characters"/></v-app>',
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
      marks: [
        { mark: '―', color: 'brown darken-3' },
        { mark: '◎', color: 'light-blue  darken-2' },
        { mark: '〇', color: 'green darken-3' },
        { mark: '✕', color: 'red darken-4' },
      ],
      // dbid: 'xxx',
    }
  },
  methods: {
    // editNewItem: action('editNewItem'),
    // reload: action('reload'),
  },
})
