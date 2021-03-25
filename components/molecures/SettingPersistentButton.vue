<template>
  <v-sheet>
    <v-container v-if="index">
      <v-row align="center">
        設定{{ index }}：
        <v-btn color="light-blue  darken-2" @click="save">セーブ</v-btn>
        <v-btn color="green darken-3" @click="load">ロード</v-btn>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped>
.save {
  color: 'light-blue  darken-2';
}
.load {
  color: 'green darken-3';
}
</style>

<script>
// import Character from '~/domain/character'

export default {
  components: {},
  props: {
    index: Number,
  },
  // watch: {
  // },
  // data() {
  //   return {}
  // },
  computed: {
    // editedCharacter: {
    //   get() {
    //     return this.character
    //   },
    //   set(val) {
    //     this.$emit('update:character', val)
    //   },
    // },
  },
  methods: {
    save() {
      this.$emit('save', this.index)
    },
    load() {
      this.$emit('load', this.index)
    },
  },
}
</script>
