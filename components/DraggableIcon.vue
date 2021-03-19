<template>
  <moveable
    :style="moveableStyle"
    v-bind="moveable"
    @drag="handleDrag"
    @dragEnd="handleDragEnd"
    @resize="handleResize"
    @scale="handleScale"
    @rotate="handleRotate"
    @warp="handleWarp"
    @pinch="handlePinch"
  >
    <div class="flex-box" @click="dblclick" @touchstart="dblclick">
      <div class="left-box">
        <img src="/icon/clue/blue.png" class="clue-image" />
      </div>
      <div v-if="this.status !== ''" class="right-box">
        <img :src="status" class="status-imagemage" />
      </div>
    </div>
    <!-- <img src="/mech.png" alt="Vuetify.js" class="image" @click="clicked" /> -->
  </moveable>
</template>

<style>
.flex-box {
  display: flex;
  flex-wrap: wrap;
}
.left-box {
  width: 90%;
  margin: 0%;
  padding: 0 0 2.5%;
}
.right-box {
  width: 10%;
  margin: 0;
  padding: 0 0 2.5%;
  position: absolute;
  bottom: 0;
  right: 0;
}
.status-image {
  width: 3px;
  /* float: left; */
  /* height: 50px; */
}
.clue-image {
  width: 50px;
  /* float: left; */
  /* height: 50px; */
}
/** css削除 */
.moveable-line {
  position: absolute;
  width: 0px !important;
  height: 0px !important;
  background: #4af;
  transform-origin: -10px -10px !important;
}
</style>

<script>
import Moveable from 'vue-moveable'
export default {
  components: {
    Moveable,
  },
  props: {
    id: String,
    room: Object,
  },
  data() {
    return {
      lastSubmitTime: null,
      moveable: {
        draggable: true,
        scalable: false,
        resizable: false,
        warpable: false,
        throttleDrag: 0,
        throttleResize: 0,
        keepRatio: false,
        throttleScale: 0,
        rotatable: false,
        throttleRotate: 0,
        pinchable: false,
        origin: false,
        snappable: false,
        elementGuideline: null,
        horizontalGuideline: null,
        verticalGuideline: null,
      },
      status: '',
    }
  },
  // mounted() {
  //   console.log('mounted!')
  //   const dummy = this.statusImageFile
  //   // if (!dummy) {
  //   console.log(dummy)
  //   // }
  // },

  computed: {
    moveableStyle: {
      get() {
        const position = this.$store.getters[`${this.id}/getPosition`]
        // console.log(position)
        const ret = {
          position: 'absolute',
          width: '50px',
          /* height: 50px; */
          top: '0px',
          left: '0px',
          /* text-align: center; */
          'font-size': '40px',
          margin: '0 auto',
          /* font-weight: 100;
          letter-spacing: 1px; */
          'z-index': '2',
        }

        if (position) {
          ret.top = position.top
          ret.left = position.left
        }
        return ret
      },
      set(value) {
        this.$store.commit(`${this.id}/setPosition`, value)
      },
      // statusImageFile() {
      //   // console.log(`/icon/status/${this.status}.png`)
      //   return `/icon/status/${this.status}.png`
      // },
    },
  },

  beforeMount() {
    console.log('beforeMount!')
    const dummy = this.statusImageFile
    // if (!dummy) {
    console.log(dummy)
  },
  afterMount() {},
  beforeDestroy() {
    this.$store.unregisterModule(this.id)
  },

  methods: {
    handleDrag({ target, left, top, delta, transform }) {
      // console.log(delta)
      const now = Date.now()
      const lap = this.lastSubmitTime ? now - this.lastSubmitTime : 9999
      // console.log(lap)
      const position = {
        top: `${top}px`,
        left: `${left}px`,
      }
      this.$store.commit(`${this.id}/setPosition`, position)

      // WebRTCで現在位置を送信する。
      // Skywayの制約で、100ms単位でしか処理できないことを考慮し、70sm毎にメッセージを送信する。
      if (lap > 70 && delta[0] !== 0 && delta[1] !== 0) {
        const message = {
          type: 'move',
          id: this.id,
          position,
        }
        this.room.send(message)
        this.lastSubmitTime = now
        console.log('send')
      }
    },
    handleDragEnd({ target }) {
      // console.log(this.$store.state[`${this.id}`].position)
      // WebRTCで現在位置を送信する。
      // 最終位置のずれを防ぐため、ドラッグ終了時に、最終位置を送信する。
      const message = {
        type: 'move',
        id: this.id,
        position: this.$store.state[`${this.id}`].position,
      }
      this.room.send(message)
    },
    handleResize({ target, width, height, delta }) {
      delta[0] && (target.style.width = `${width}px`)
      delta[1] && (target.style.height = `${height}px`)
    },
    handleScale({ target, transform, scale }) {
      target.style.transform = transform
    },
    handleRotate({ target, dist, transform }) {
      target.style.transform = transform
    },
    handleWarp({ target, transform }) {
      target.style.transform = transform
    },
    handlePinch({ target }) {},
    dispose() {
      this.$el.parentNode.removeChild(this.$el)
      this.$destroy()
    },
    dblclick() {
      if (this.status === '') {
        this.status = '/icon/status/impostor.png'
      } else if (this.status.includes('impostor')) {
        this.status = '/icon/status/dead.png'
      } else if (this.status.includes('dead')) {
        this.status = ''
      }
    },
  },
}
</script>
