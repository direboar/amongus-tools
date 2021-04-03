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
  template:
    '<v-app><ConfigSetting :characters="characters" :marks="marks" @updateMarks = "updateMarks"/></v-app>',
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
      marks: [
        { mark: '―', color: 'brown darken-3', editable: false },
        { mark: '◎', color: 'light-blue  darken-2', editable: true },
        { mark: '〇', color: 'green darken-3', editable: true },
        { mark: '✕', color: 'red darken-4', editable: true },
      ],
    }
  },
  methods: {
    updateMarks(marks) {
      this.marks = marks
    },
  },
})
