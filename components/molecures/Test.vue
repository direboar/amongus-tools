<template>
  <div class="text-center">
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}
    </v-snackbar>
    <v-btn dark color="orange darken-2" @click="snackbar = true">
      Open Snackbar
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    text: 'My timeout is set to 2000.',
    // timeout: 2000,
  }),
}
</script>
