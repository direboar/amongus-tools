<template>
  <v-app dark>
    <v-main>
      <!-- <v-container> -->
      <v-content>
        <nuxt />
      </v-content>
      <!-- </v-container> -->
    </v-main>
  </v-app>
  <!-- <html>
    <body>
      1111 1111 111222
    </body>
  </html> -->
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
