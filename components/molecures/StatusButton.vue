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
    status: {
      type: String,
    },
  },
  computed: {
    color() {
      if (this.status === 'グレー') {
        return 'blue-grey darken-1'
      }
      if (this.status === '白め') {
        return 'blue-grey lighten-3'
      }
      if (this.status === '白確') {
        return 'white'
      }
      if (this.status === '黒め') {
        return 'brown darken-1'
      }
      if (this.status === '黒確') {
        return 'grey darken-3'
      }
      return ''
    },
    buttonname() {
      return this.status
    },
  },
  watch: {},
  methods: {
    click() {
      if (this.status === 'グレー') {
        this.$emit('update:status', '白め')
      }
      if (this.status === '白め') {
        this.$emit('update:status', '白確')
      }
      if (this.status === '白確') {
        this.$emit('update:status', '黒め')
      }
      if (this.status === '黒め') {
        this.$emit('update:status', '黒確')
      }
      if (this.status === '黒確') {
        this.$emit('update:status', 'グレー')
      }
    },
  },
}
</script>
