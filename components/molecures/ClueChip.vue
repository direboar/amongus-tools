<template>
  <v-chip draggable>
    <v-avatar size="30x" left>
      <clue-icon :src="src" />
    </v-avatar>
    {{ name }}
  </v-chip>
</template>

<style scoped></style>

<script>
import ClueIcon from './ClueIcon'

export default {
  components: {
    ClueIcon,
  },
  props: {
    // ダイアログ表示フラグ。
    src: {
      type: String,
      default: '/icon/clue/blue.png',
    },
    name: {
      type: String,
      default: 'blue',
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>
