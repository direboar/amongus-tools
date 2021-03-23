<template>
  <img class="clue-image" :src="src" />
</template>

<style scoped>
.clue-image {
  width: 30px;
}
</style>

<script>
export default {
  props: {
    // ダイアログ表示フラグ。
    src: {
      type: String,
      default: '/icon/clue/blue.png',
    },
  },
  data() {
    return {
      // className: 'clue-image',
    }
  },
  // watch: {
  //   src(val) {
  //   },
  // },
  computed: {
    // isDead() {
    //   return this.src && this.src.includes('dead')
    // },
  },
  methods: {},
}
</script>
