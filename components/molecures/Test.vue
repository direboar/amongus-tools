<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card height="800" color="black">
      <v-card-title>Among Us メモアプリ for タブレット</v-card-title>
      <v-card-text
        >アプリの利用方法は、以下の動画を参照してください</v-card-text
      >
      <v-container>
        <v-row>
          <v-col cols="8">
            <v-card height="600">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/KK8Sf6z8U2Y"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-card>
          </v-col>
          <v-col cols="4"> </v-col>
        </v-row>
        <v-row
          ><v-col cols="8"></v-col>
          <v-col cols="4">
            <v-btn class="white--text" color="teal" @click="dialog = false">
              アプリを開始する
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: true,
  }),
}
</script>
