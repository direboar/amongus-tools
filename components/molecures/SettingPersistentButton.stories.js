// import { action } from '@storybook/addon-actions'
import SettingPersistentButton from './SettingPersistentButton.vue'

export default {
  title: 'molecures/SettingPersistentButton',
}

export const NuxtWebsite = () => ({
  components: {
    SettingPersistentButton,
  },
  template: '<v-app><SettingPersistentButton :index="index"/></v-app>',
  data() {
    return {
      index: 1,
    }
  },
  methods: {},
})
