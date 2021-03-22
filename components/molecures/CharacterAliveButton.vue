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
    // ダイアログ表示フラグ。
    alive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    color() {
      return this.alive ? 'green darken-3' : 'red darken-4'
    },
    buttonname() {
      return this.alive ? '生' : '死'
    },
  },
  watch: {},
  methods: {
    click() {
      this.$emit('update:alive', !this.alive)
    },
  },
}
</script>
