<template>
  <div>
    <v-btn class="button" :color="color" @click="click">{{ buttonname }}</v-btn>
  </div>
</template>

<style scoped>
.button {
  width: 100%;
  height: 100%;
  padding: 0px;
}
</style>

<script>
export default {
  props: {
    // define components.
  },
  data() {
    return {}
  },
  computed: {
    // define components.
    // color() {
    //   return this.alive ? 'green darken-3' : 'red darken-4'
    // },
    // define components.
    // buttonname() {
    //   return this.alive ? '生' : '死'
    // },
  },
  watch: {},
  methods: {
    // define components.
    // click() {
    //   this.$emit('update:alive', !this.alive)
    // },
  },
}
</script>
