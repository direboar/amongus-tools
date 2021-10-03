<template>
  <moveable
    v-if="showIcon"
    :style="moveableStyle"
    v-bind="moveable"
    @drag="handleDrag"
    @dragEnd="handleDragEnd"
  >
    <div class="flex-box">
      <div class="left-box">
        <img :src="icon" class="clue-image" />
      </div>
      <!-- <div v-if="this.status !== ''" class="right-box">
        <img :src="status" class="status-image" />
      </div> -->
      <!-- <div class="name-box">
        {{ character.name }}
      </div> -->
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
.name-box {
  width: 100%;
  font-size: 16px;
  font-weight: 800;
  color: red;
  /* margin: 20px;
  padding: 20px; */
  /* bottom: 10%; */
}
.status-image {
  height: 30px;
  /* float: left; */
  /* height: 50px; */
}
.clue-image {
  width: 65px;
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
    color: String,
    character: Object,
    mapIndex: {
      type: Number,
      default: 0,
    },
    zoom: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
    },
  },
  data() {
    return {
      lap: 0,
      lastSubmitTime: null,
      moveable: {
        draggable: this.zoom,
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
    }
  },

  computed: {
    icon() {
      return this.character.isAlive
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

        if (this.character) {
          let top = this.character.position[this.mapIndex].top
          let left = this.character.position[this.mapIndex].left

          if (!this.zoom) {
            top = this.character.position[this.mapIndex].absTop / 2
            left = this.character.position[this.mapIndex].absLeft / 2
          }
          ret.top = `${top}px`
          ret.left = `${left}px`
        }
        return ret
      },
    },
    showIcon() {
      console.log(this.character)
      if (!this.character.join) {
        return false
      }
      if (!this.zoom && this.character.position[this.mapIndex].initPositon) {
        return false
      }
      return true
    },
  },

  watch: {
    size(val) {
      const character = this.character.position[this.mapIndex]
      character.top = (character.absTop * val) / 100
      character.left = (character.absLeft * val) / 100
    },
  },

  beforeMount() {},
  afterMount() {},
  beforeDestroy() {
    this.$store.unregisterModule(this.id)
  },

  methods: {
    handleDrag({ target, left, top, delta, transform }) {
      if (top > 0 && left > 0) {
        const func = (x, size) => {
          // const alpha = size / 100
          // return (2 * x) / (1 + alpha)
          return (x * 100) / size
        }
        const position = {
          top,
          absTop: func(top, this.size),
          left,
          absLeft: func(left, this.size),
        }
        this.$emit('updatePosition', this.character, position)
      }
    },
    handleDragEnd({ target }) {},
    dispose() {
      this.$el.parentNode.removeChild(this.$el)
      this.$destroy()
    },
  },
}
</script>
