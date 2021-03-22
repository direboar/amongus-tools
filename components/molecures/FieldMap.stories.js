// import { action, configureActions } from '@storybook/addon-actions'
import FieldMap from './FieldMap.vue'
// import Character from '~/domain/character'

export default {
  title: 'organisms/FieldMap',
}

export const NuxtWebsite = () => ({
  components: {
    FieldMap,
  },
  template: '<v-app><FieldMap/></v-app>',
  data() {
    return {}
  },
  methods: {
    // editNewItem: action('editNewItem'),
    // reload: action('reload'),
  },
})
