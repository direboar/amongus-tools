// import { action } from '@storybook/addon-actions'
import EmergencyButton from './EmergencyButton.vue'

export default {
  title: 'molecures/EmergencyButton',
}

export const NuxtWebsite = () => ({
  components: {
    EmergencyButton,
  },
  template:
    '<v-app><EmergencyButton :useEmergencyButton.sync="useEmergencyButton"/></v-app>',
  data() {
    return {
      useEmergencyButton: true,
    }
  },
  methods: {},
})
