// import { action } from '@storybook/addon-actions'
import HelloDialog from './HelloDialog.vue'

export default {
  title: 'organisms/HelloDialog',
}

export const NuxtWebsite = () => ({
  components: {
    HelloDialog,
  },
  template: '<v-app><HelloDialog/></v-app>',
  data() {
    return {}
  },
  methods: {},
})
