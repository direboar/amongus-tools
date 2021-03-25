<template>
  <v-chip draggable color="green">
    <v-avatar size="30x" left>
      <clue-icon :src="character.iconUrl" />
    </v-avatar>
    {{ character.name }}
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
    character: Object,
    // src: {
    //   type: String,
    //   default: '/icon/clue/blue.png',
    // },
    // name: {
    //   type: String,
    //   default: 'blue',
    // },
    // color: {
    //   type: String,
    //   default: 'blue',
    // },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {
    character(val) {
      console.log('watch')
    },
  },
  methods: {},
}
</script>
