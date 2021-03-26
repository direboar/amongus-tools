// import { action, configureActions } from '@storybook/addon-actions'
import ZoomableMap from './ZoomableMap.vue'
import Character from '~/domain/character'

export default {
  title: 'organisms/ZoomableMap',
}

export const NuxtWebsite = () => ({
  components: {
    ZoomableMap,
  },
  template: '<v-app><ZoomableMap :src="src" :characters="characters"/></v-app>',
  data() {
    return {
      src: '/map/skeld.png',
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
    }
  },
  methods: {},
})
