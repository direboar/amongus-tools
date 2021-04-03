<template>
  <v-app dark>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import inobounce from 'inobounce'

export default {
  data() {
    return {
      // drawer: false,
    }
  },
  mounted() {
    inobounce.enable()
  },
}
</script>
