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
    character: Object,
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>
