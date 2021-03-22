<template>
  <div>
    <v-select
      v-model="select"
      class="select text-caption"
      dense
      :items="items"
    ></v-select>
  </div>
</template>

<style scoped>
.select {
  width: 80px;
  height: 100%;
  padding: 0px;
}
</style>

<script>
export default {
  props: {
    status: String,
    // define components.
  },
  data() {
    return {
      items: ['グレー', '白確', '怪しい', '黒確', '殺害', '吊り'],
    }
  },
  computed: {
    select: {
      get() {
        return this.status
      },
      set(selected) {
        this.$emit('update:selected', status)
      },
    },
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
