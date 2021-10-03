<template>
  <v-chip draggable color="green" :small="isSmall">
    <v-avatar size="30x" left>
      <clue-icon :size="size" :src="character.iconUrl" />
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
    character: Object,
    size: {
      type: String,
      default: 'default',
    },
  },
  data() {
    return {}
  },
  computed: {
    isSmall() {
      return this.size !== 'default'
    },
  },
  watch: {},
  methods: {},
}
</script>
