<template>
  <v-card :color="color" hover ripple rounded>
    <v-container fluid fill-height>
      <v-row>
        <v-col cols="2">{{ title }}</v-col>
        <v-col cols="10">
          <draggable v-model="characterList" group="clues">
            <clue-chip
              v-for="(character, i) in characterList"
              :key="i"
              :character="character"
              :size="size"
            />
          </draggable>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style lang="scss" scoped></style>

<script>
import ClueChip from '~/components/molecures/ClueChip'

export default {
  components: {
    ClueChip,
  },
  props: {
    title: String,
    color: String,
    characters: Array,
    size: {
      type: String,
      default: 'default',
    },
  },
  data() {
    return {
      selection: null,
    }
  },
  computed: {
    characterList: {
      get() {
        return this.characters.filter((c) => c.join)
      },
      set(val) {
        this.$emit('updateCharacters', val)
      },
    },
  },
  watch: {},
  methods: {},
}
</script>
