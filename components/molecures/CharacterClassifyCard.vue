<template>
  <v-card :color="color" hover ripple rounded>
    <v-container fluid fill-height>
      <v-row>
        <v-col cols="2">{{ title }}</v-col>
        <v-col cols="10">
          <draggable
            v-model="characterList"
            group="clues"
            @start="drag = true"
            @end="onEnd(value)"
          >
            <clue-chip
              v-for="(character, i) in characters"
              :key="i"
              :character="character"
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
  },
  computed: {
    characterList: {
      get() {
        return this.characters
      },
      set(val) {
        this.$emit('updateCharacters', val)
      },
    },
  },
  data() {
    return {
      selection: null,
    }
  },
  methods: {
    onEnd(value) {
      console.log(value)
    },
  },
}
</script>
