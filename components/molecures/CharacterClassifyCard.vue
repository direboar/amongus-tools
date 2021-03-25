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
        return this.characters.filter((c) => c.join)
        // return this.characters
      },
      set(val) {
        this.$emit('updateCharacters', val)
      },
    },
    // joinCharacterList() {
    //   return this.characterList.filter((c) => c.join)
    // },
  },
  watch: {
    // characters(val) {
    //   console.log('watch')
    //   console.log(val)
    // },
  },
  data() {
    return {
      selection: null,
    }
  },
  methods: {
    // onEnd(value) {
    //   console.log(value)
    // },
  },
}
</script>
