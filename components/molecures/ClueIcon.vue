<template>
  <span :style="span">
    <img :style="clueImage" :src="src" />
  </span>
</template>

<script>
export default {
  props: {
    // ダイアログ表示フラグ。
    src: {
      type: String,
      default: '/icon/clue/blue.png',
    },
    size: {
      type: String,
      default: 'default',
    },
  },
  data() {
    return {
      // paddingTop: '0px',
    }
  },
  // watch: {
  //   src(val) {
  //   },
  // },
  computed: {
    span() {
      const span = {
        'padding-right': '0px',
        'padding-top': '0px',
        display: 'inline-block',
      }
      return span
    },
    clueImage() {
      return {
        width: this.size === 'default' ? '42px' : '35px',
      }
    },
  },
  methods: {},
}
</script>

<style scoped>
.clue-image {
  width: 19px;
}
</style>
