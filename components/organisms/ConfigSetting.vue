<template>
  <div>
    <v-card hover ripple rounded>
      <v-container fluid fill-height>
        <v-row>
          <v-col cols="12"
            ><v-btn @click="resetSetting"
              >クルーの設定をリセットする</v-btn
            ></v-col
          >
        </v-row>
        <v-row>
          <v-col cols="12"
            ><v-btn @click="resetDeletedClue"
              >削除したクルーを復元する</v-btn
            ></v-col
          >
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  components: {},
  props: {
    // src: String,
    // characters: Array,
  },
  data() {
    return {
      showDialog: false,
    }
  },
  methods: {
    resetSetting() {
      this.$emit('resetSetting')
    },
    resetDeletedClue() {
      this.$emit('resetDeletedClue')
    },
  },
}
</script>
