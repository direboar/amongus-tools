// import { action, configureActions } from '@storybook/addon-actions'
import CharacterClassifyArea from './CharacterClassifyArea.vue'
import Character from '~/domain/character'

export default {
  title: 'organisms/CharacterClassifyArea',
}

export const NuxtWebsite = () => ({
  components: {
    CharacterClassifyArea,
  },
  template:
    '<v-app><CharacterClassifyArea :gray="gray" :maybeClue="maybeClue" :maybeImpostor="maybeImpostor" :killed="killed" :hunged="hunged"/></v-app>',
  data() {
    return {
      gray: [
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
      maybeClue: [],
      maybeImpostor: [],
      killed: [],
      hunged: [],
    }
  },
  methods: {
    // editNewItem: action('editNewItem'),
    // reload: action('reload'),
  },
})
