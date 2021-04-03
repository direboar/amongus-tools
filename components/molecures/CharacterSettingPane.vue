<template>
  <v-sheet>
    <v-container v-if="character">
      <v-row align="center">
        <v-col cols="2">
          <clue-icon :src="character.iconUrl" />
        </v-col>
        <v-col cols="8">
          <v-text-field
            v-model="name"
            class="text-field"
            label="名前"
            required
            dense
            @blur="onBlur"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-checkbox
            v-model="join"
            dense
            color="red"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped></style>

<script>
import Character from '~/domain/character'
import ClueIcon from '~/components/molecures/ClueIcon'

export default {
  components: { ClueIcon },
  props: {
    character: Object,
  },
  computed: {
    name: {
      get() {
        return this.character.name
      },
      set(val) {
        // FIXME 冗長なので何とかしたい。
        const ret = new Character()
        Object.assign(ret, this.character)
        ret.name = val
        this.$emit('updateCharacter', ret)
      },
    },
    join: {
      get() {
        return this.character.join
      },
      set(val) {
        // FIXME 冗長なので何とかしたい。
        const ret = new Character()
        Object.assign(ret, this.character)
        ret.join = val
        this.$emit('updateCharacter', ret)
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
