<template>
  <v-sheets>
    <v-container v-if="editedCharacter">
      <v-row align="center">
        <clue-icon :src="editedCharacter.iconUrl" />
        <v-text-field
          v-model="editedCharacter.name"
          class="text-field"
          label="名前"
          required
          @blur="onBlur"
        ></v-text-field>
        <v-checkbox
          v-model="editedCharacter.join"
          label="参加"
          color="red"
          hide-details
        ></v-checkbox>
      </v-row>
    </v-container>
  </v-sheets>
</template>

<style scoped></style>

<script>
// import Character from '~/domain/character'
import ClueIcon from '~/components/molecures/ClueIcon'

export default {
  components: { ClueIcon },
  props: {
    character: Object,
  },
  // watch: {
  // },
  // data() {
  //   return {}
  // },
  computed: {
    editedCharacter: {
      get() {
        return this.character
      },
      set(val) {
        this.$emit('update:character', val)
      },
    },
  },
  methods: {
    onBlur() {
      // 下層キーボードによる押上げを戻す。
      window.scroll(0, 0)
    },
  },
}
</script>
