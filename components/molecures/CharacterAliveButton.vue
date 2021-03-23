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
      if (this.alive === '生') {
        return 'green darken-3'
      } else if (this.alive === 'KILL') {
        return 'red darken-4'
      } else {
        return 'light-blue brown darken-2'
      }
      // return this.alive ? 'green darken-3' : 'red darken-4'
    },
    buttonname() {
      // return this.alive ? '生' : '死'
      return this.alive
    },
  },
  watch: {},
  methods: {
    click() {
      let nextVal
      if (this.alive === '生') {
        nextVal = 'KILL'
      } else if (this.alive === 'KILL') {
        nextVal = '吊られ'
      } else {
        nextVal = '生'
      }
      this.$emit('update:alive', nextVal)
    },
  },
}
</script>
