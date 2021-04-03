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
      marks: Object,
    },
    marks: Array,
  },

  computed: {
    color() {
      const mark = this.marks.find((mark) => mark.mark === this.mark)
      return mark ? mark.color : ''
    },
    buttonname() {
      return this.mark
    },
  },
  watch: {},
  methods: {
    click() {
      let mark = null
      const current = this.find(this.mark)
      if (current) {
        const index = this.marks.indexOf(current)
        if (index + 1 >= this.marks.length) {
          mark = this.marks[0].mark
        } else {
          mark = this.marks[index + 1].mark
        }
      }
      if (mark) {
        this.$emit('update:mark', mark)
      }
    },
    find(mark) {
      return this.marks.find((mark) => mark.mark === this.mark)
    },
  },
}
</script>
