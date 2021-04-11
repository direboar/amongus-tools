<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card color="black">
      <v-card-title>Among Us メモアプリ for タブレット</v-card-title>
      <v-card-text
        >アプリの利用方法は、以下の動画を参照してください。</v-card-text
      >
      <v-container>
        <v-row>
          <v-col cols="8">
            <v-card :height="height">
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
          <v-col cols="4">
            <adsbygoogle ad-slot="5862743108" />
          </v-col>
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
// import moment from 'moment'
import moment from 'moment'

export default {
  data: () => ({
    dialog: true,
  }),
  computed: {
    height() {
      const breakpoint = this.$vuetify.breakpoint.name
      // return 1200
      if (breakpoint === 'xs') {
        return '100'
      } else if (breakpoint === 'sm') {
        return '200'
      } else if (breakpoint === 'sd') {
        return '300'
      } else if (breakpoint === 'md') {
        return '400'
      } else if (breakpoint === 'lg') {
        return '550'
      } else {
        return '700'
      }
    },
  },
  watch: {
    dialog(val) {
      if (!val) {
        localStorage.setItem(
          'amongus-memo-tools.dialog.lastDisplayTime',
          moment().format()
        )
      }
    },
  },
  mounted() {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.displayMe()
      }
    })
  },
  methods: {
    displayMe() {
      const lastDisplayTime = localStorage.getItem(
        'amongus-memo-tools.dialog.lastDisplayTime'
      )
      if (lastDisplayTime) {
        const now = moment()
        const last = moment(lastDisplayTime)
        if (now.isAfter(last, 'day')) {
          this.dialog = true
        }
      } else {
        this.dialog = true
      }
    },
  },
}
</script>
