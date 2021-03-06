// import { action, configureActions } from '@storybook/addon-actions'
import FieldMap from './FieldMap.vue'
import Character from '~/domain/character'

export default {
  title: 'molecures/FieldMap',
}

export const NuxtWebsite = () => ({
  components: {
    FieldMap,
  },
  template:
    '<v-app><FieldMap :characters="characters" :zoom="zoom" :mapIndex="mapIndex" @updateMapIndex="updateMapIndex"/></v-app>',
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
      zoom: true,
      mapIndex: 1,
    }
  },
  methods: {
    updateMapIndex(index) {
      this.mapIndex = index
    },
  },
})
