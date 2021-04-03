// import { action, configureActions } from '@storybook/addon-actions'
import MarkEditDialog from './MarkEditDialog.vue'
export default {
  title: 'molecures/MarkEditDialog',
}

export const NuxtWebsite = () => ({
  components: {
    MarkEditDialog,
  },
  template:
    '<v-app><MarkEditDialog :dialog.sync="dialog" :mark.sync="mark" @updateMark="updateMark"/>{{JSON.stringify(this.mark)}}</v-app>',
  data() {
    return {
      // value: '',
      // color: '#FFFFFF',
      mark: {
        mark: 'xxx',
        color: '#FFFFFF',
      },
      dialog: false,
    }
  },
  methods: {
    updateMark(mark) {
      this.mark = mark
    },
  },
})
