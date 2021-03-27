<style scoped>
.button {
  width: 100%;
  height: 100%;
  padding: 0px;
}
</style>

<script>
import CharacterStatusButtonMixin from './CharacterStatusButtonMixin'

export default {
  mixins: [CharacterStatusButtonMixin],
  props: {
    mark: {
      type: String,
    },
  },

  computed: {
    color() {
      if (this.mark === '◎') {
        return 'light-blue  darken-2'
      } else if (this.mark === '〇') {
        return 'green darken-3'
      } else if (this.mark === '―') {
        return 'brown darken-3'
      } else if (this.mark === '✕') {
        return 'red darken-4'
      }
      return ''
    },
    buttonname() {
      return this.mark
    },
  },
  watch: {},
  methods: {
    click() {
      if (this.mark === '―') {
        this.$emit('update:mark', '◎')
      } else if (this.mark === '◎') {
        this.$emit('update:mark', '〇')
      } else if (this.mark === '〇') {
        this.$emit('update:mark', '✕')
      } else if (this.mark === '✕') {
        this.$emit('update:mark', '―')
      }
    },
  },
}
</script>
