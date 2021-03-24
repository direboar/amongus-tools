// import { action } from '@storybook/addon-actions'
import MarkButton from './MarkButton.vue'

export default {
  title: 'molecures/MarkButton',
}

export const NuxtWebsite = () => ({
  components: {
    MarkButton,
  },
  template: '<v-app><MarkButton :mark.sync="mark"/></v-app>',
  data() {
    return {
      mark: '―',
    }
  },
  methods: {},
})
