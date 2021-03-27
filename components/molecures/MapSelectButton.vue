<template>
  <v-btn
    :color="current === mapIndex ? 'green darken-3' : 'blue-grey darken-1'"
    @click="current = mapIndex"
    >{{ mapIndex + 1 }}</v-btn
  >
</template>

<script>
export default {
  props: {
    mapIndex: {
      type: Number,
      default: 0,
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    current: {
      get() {
        return this.currentIndex
      },
      set(val) {
        this.$emit('updateMapIndex', val)
      },
    },
  },
  methods: {
    click() {},
  },
}
</script>
