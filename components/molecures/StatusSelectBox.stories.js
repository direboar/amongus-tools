// import { action } from '@storybook/addon-actions'
import StatusSelectBox from './StatusSelectBox.vue'

export default {
  title: 'molecures/StatusSelectBox',
}

export const NuxtWebsite = () => ({
  components: {
    StatusSelectBox,
  },
  template: '<v-app><StatusSelectBox :status.sync="status"/></v-app>',
  data() {
    return {
      status: 'グレー',
    }
  },
  methods: {},
})
