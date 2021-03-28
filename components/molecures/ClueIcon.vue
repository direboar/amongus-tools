<template>
  <span :style="span">
    <img class="clue-image" :src="src" />
  </span>
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
      const isDead = this.src.includes('dead')
      if (isDead) {
        span['padding-top'] = '7px'
        span['padding-bottom'] = '7px'
      }
      return span
    },
  },
  methods: {},
}
</script>
