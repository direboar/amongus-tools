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
  },
  watch: {},
  methods: {},
}
</script>
