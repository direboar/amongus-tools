// import { action } from '@storybook/addon-actions'
import MarkButton from './MarkButton.vue'

export default {
  title: 'molecures/MarkButton',
}

export const NuxtWebsite = () => ({
  components: {
    MarkButton,
  },
  template: '<v-app><MarkButton :marks="marks" :mark.sync="mark"/></v-app>',
  data() {
    return {
      mark: '―',
      marks: [
        { mark: '―', color: 'brown darken-3' },
        { mark: '◎', color: 'light-blue  darken-2' },
        { mark: '〇', color: 'green darken-3' },
        { mark: '✕', color: 'red darken-4' },
      ],
    }
  },
  methods: {},
})
