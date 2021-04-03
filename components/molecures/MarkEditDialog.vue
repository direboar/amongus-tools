<template>
  <v-card v-if="editedMark">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="editedMark.mark"
            class="text-field"
            label="名称"
            required
            @blur="onBlur"
          />
        </v-col>
        <v-col cols="12">
          <v-color-picker
            v-model="editedMark.color"
            mode="rgba"
          ></v-color-picker>
        </v-col>
        <v-card-actions>
          <v-btn @click="clickAddButton">登録</v-btn>
          <v-btn @click="clickBackButton">戻る</v-btn>
        </v-card-actions>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    mark: Object,
  },
  data() {
    return {
      editedMark: this.copyMark(this.mark),
    }
  },
  computed: {},
  watch: {
    mark(val) {
      this.editedMark = this.copyMark(val)
    },
  },
  methods: {
    copyMark(org) {
      const copy = {}
      Object.assign(copy, org)
      return copy
    },
    clickAddButton() {
      // console.log(this.editedMark)
      this.$emit('updateMark', this.editedMark)
      this.$emit('closeDialog')
    },
    clickBackButton() {
      this.$emit('closeDialog')
    },
    onBlur() {
      // 下層キーボードによる押上げを戻す。
      window.scroll(0, 0)
    },
  },
}
</script>
