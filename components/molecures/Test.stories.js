// import { action } from '@storybook/addon-actions'
import Test from './Test.vue'

export default {
  title: 'molecures/Test',
}

export const NuxtWebsite = () => ({
  components: {
    Test,
  },
  template: '<v-app><Test/></v-app>',
  data() {
    return {
      // status: 'グレー',
    }
  },
  methods: {},
})
