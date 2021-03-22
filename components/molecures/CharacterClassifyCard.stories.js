// import { action, configureActions } from '@storybook/addon-actions'
import CharacterClassifyCard from './CharacterClassifyCard.vue'
import Character from '~/domain/character'
export default {
  title: 'molecures/CharacterClassifyCard',
}

export const NuxtWebsite = () => ({
  components: {
    CharacterClassifyCard,
  },
  template:
    '<v-app><CharacterClassifyCard :title="title" :color="color" :clues="clues"/></v-app>',
  data() {
    return {
      title: 'タイトル',
      color: 'blue',
      clues: [
        new Character('blue', 'minokuba'),
        new Character('red', 'yuusui'),
        new Character('black', 'toma'),
      ],
    }
  },
  methods: {},
})
