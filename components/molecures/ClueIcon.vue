<template>
  <!-- <div> -->
  <img class="clue-image" :src="src" />
  <!-- </div> -->
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
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>
