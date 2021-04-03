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
    // 緊急ボタン使用済み。
    useEmergencyButton: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    color() {
      return !this.useEmergencyButton ? 'green darken-3' : 'red darken-4'
    },
    buttonname() {
      return !this.useEmergencyButton ? '未使用' : '使用済'
    },
  },
  watch: {},
  methods: {
    click() {
      this.$emit('update:useEmergencyButton', !this.useEmergencyButton)
    },
  },
}
</script>
