<template>
  <span :style="span">
    <img :style="clueImage" :src="src" />
  </span>
</template>

<style scoped>
.clue-image {
  width: 19px;
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
      const isDead = this.src.includes('dead')
      if (isDead) {
        span['padding-top'] = '7px'
        span['padding-bottom'] = '7px'
      }
      return span
    },
    clueImage() {
      console.log(this.size)
      return {
        width: this.size === 'default' ? '30px' : '23px',
      }
      // return {
      //   width: this.size === 'default' ? '25px' : '19px',
      // }
    },
  },
  methods: {},
}
</script>
