<template>
  <v-app dark>
    <v-main>
      <v-content>
        <nuxt />
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
import inobounce from 'inobounce'

export default {
  data() {
    return {}
  },
  mounted() {
    inobounce.enable()
  },
}
</script>
