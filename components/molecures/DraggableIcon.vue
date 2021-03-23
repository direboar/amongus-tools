<template>
  <moveable
    :style="moveableStyle"
    v-bind="moveable"
    @drag="handleDrag"
    @dragEnd="handleDragEnd"
    v-if="character.join"
  >
    <div class="flex-box">
      <div class="left-box">
        <img :src="icon" class="clue-image" />
      </div>
      <div v-if="this.status !== ''" class="right-box">
        <img :src="status" class="status-image" />
      </div>
    </div>
  </moveable>
</template>

<style>
.flex-box {
  display: flex;
  flex-wrap: wrap;
}
.left-box {
  width: 90%;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
}
.right-box {
  width: 10%;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  right: 0;
}
.status-image {
  height: 30px;
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
import { v4 as uuidv4 } from 'uuid'
import Moveable from 'vue-moveable'
export default {
  components: {
    Moveable,
  },
  props: {
    color: String,
    pPosition: Object,
    character: Object,
  },
  data() {
    return {
      lap: 0,
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
      // status: '',
      // status: '/icon/status/gray.png',
      // icon: `/icon/clue/${this.color}.png`,
      // FIXME v-modelを使うべき
      // https://stackoverflow.com/questions/40408096/whats-the-correct-way-to-pass-props-as-initial-data-in-vue-js-2
      position: this.pPosition,
      id: uuidv4(),
    }
  },

  computed: {
    icon() {
      return this.character.alive === '生'
        ? `/icon/clue/${this.color}.png`
        : `/icon/dead/${this.color}.png`
    },
    status() {
      const status = this.character.status
      if (status === 'グレー') {
        return ''
      } else if (status === '怪しい') {
        return '/icon/status/gray.png'
      } else if (status === '白目') {
        return '/icon/status/sirokaku.png'
      } else {
        return ''
      }
    },
    moveableStyle: {
      get() {
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

        if (this.position) {
          ret.top = this.position.top
          ret.left = this.position.left
        }
        return ret
      },
    },
  },

  watch: {},

  beforeMount() {},
  afterMount() {},
  beforeDestroy() {
    this.$store.unregisterModule(this.id)
  },

  methods: {
    handleDrag({ target, left, top, delta, transform }) {
      if (top > 0 && left > 0) {
        const position = {
          top: `${top}px`,
          left: `${left}px`,
        }
        this.position = position
      }
    },
    handleDragEnd({ target }) {},
    dispose() {
      this.$el.parentNode.removeChild(this.$el)
      this.$destroy()
    },
    // dblclick() {
    //   if (this.icon.includes('clue') && this.status === '') {
    //     this.icon = `/icon/dead/${this.color}.png`
    //     this.status = ''
    //   } else if (this.icon.includes('dead')) {
    //     this.icon = `/icon/clue/${this.color}.png`
    //     this.status = '/icon/status/gray.png'
    //   } else if (this.icon.includes('clue') && this.status.includes('gray')) {
    //     this.icon = `/icon/clue/${this.color}.png`
    //     this.status = '/icon/status/sirokaku.png'
    //   } else if (
    //     this.icon.includes('clue') &&
    //     this.status.includes('sirokaku')
    //   ) {
    //     this.icon = `/icon/clue/${this.color}.png`
    //     this.status = '/icon/status/impostor.png'
    //   } else if (
    //     this.icon.includes('clue') &&
    //     this.status.includes('impostor')
    //   ) {
    //     this.icon = `/icon/clue/${this.color}.png`
    //     this.status = ''
    //   }
    // },
    // touchstart() {
    //   this.lap = Date.now()
    // },
    // touchend() {
    //   const delta = Date.now() - this.lap
    //   if (delta < 100) {
    //     this.dblclick()
    //   }
    // },
  },
}
</script>
