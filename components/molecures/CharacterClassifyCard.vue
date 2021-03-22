<template>
  <v-card :color="color" raised ripple rounded>
    <v-container fluid fill-height>
      <v-row>
        <v-col cols="2">{{ title }}</v-col>
        <v-col cols="10">
          <draggable
            v-model="selection"
            group="clues"
            @start="drag = true"
            @end="drag = false"
          >
            <clue-chip
              v-for="(character, i) in characters"
              :key="i"
              :name="character.name"
              :src="character.iconUrl"
            />
          </draggable>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-card-title>{{ title }}</v-card-title> -->
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
  data() {
    return {
      selection: null,
    }
  },
  methods: {
    // edit(name) {
    //   this.showDialog = true
    // },
  },
}
</script>
