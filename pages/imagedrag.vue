<template>
  <div>
    <div class="waitingroom" />
    <div class="battlearea">
      <component
        :is="component.componentClass"
        v-for="(component, i) in components"
        :key="i"
        v-bind="component.props"
      ></component>
      <img class="screen" src="/map/skeld.png" />
    </div>
  </div>
</template>

<style>
.waitingroom {
  position: relative;
  top: 0px;
  left: 0px;
  height: 70px;
}
.screen {
  /* overflow: visible; */
  position: relative;
  top: 0px;
  left: 0px;
  /* see https://jajaaan.co.jp/web-production/frontend/css-vw-vh-vmin-vmax/ */
  width: 85vw;
}
.battlearea {
  position: relative;
}
</style>

<script>
import Vue from 'vue'
// import { v4 as uuidv4 } from 'uuid'

import DraggableIcon from '~/components/DraggableIcon.vue'

export default {
  components: {
    DraggableIcon,
  },
  data() {
    return {
      components: [],
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
    }
  },
  mounted() {
    this.createIcon({ top: '20px', left: '0px' }, 'black')
    this.createIcon({ top: '20px', left: '50px' }, 'blue')
    this.createIcon({ top: '20px', left: '100px' }, 'brown')
    this.createIcon({ top: '20px', left: '150px' }, 'green')
    this.createIcon({ top: '20px', left: '200px' }, 'lime')
    this.createIcon({ top: '20px', left: '250px' }, 'orange')
    this.createIcon({ top: '20px', left: '300px' }, 'pink')
    this.createIcon({ top: '20px', left: '350px' }, 'purple')
    this.createIcon({ top: '20px', left: '400px' }, 'red')
    this.createIcon({ top: '20px', left: '450px' }, 'skyblue')
    this.createIcon({ top: '20px', left: '500px' }, 'white')
    this.createIcon({ top: '20px', left: '550px' }, 'yellow')
    // actionの実行をサブスクライブする方法
    // https://kawadev.net/vuex-watch/#toc_id_2_3
    // this.$store.subscribeAction((action, state) => {
    //   if (action.type === 'registerIcon') {
    //     // const id = action.payload
    //     const component = {
    //       componentClass: Vue.extend(DraggableIcon),
    //       props: {
    //         // id,
    //         color: 'blue',
    //         // position,
    //         // room: this.room,
    //       },
    //     }
    //     this.components.push(component)
    //   }
    // })
  },
  beforeDestroy() {},
  methods: {
    handleDrag({ target, transform }) {
      target.style.transform = transform
    },
    // handleResize({ target, width, height, delta }) {
    //   delta[0] && (target.style.width = `${width}px`)
    //   delta[1] && (target.style.height = `${height}px`)
    // },
    // handleScale({ target, transform, scale }) {
    //   target.style.transform = transform
    // },
    // handleRotate({ target, dist, transform }) {
    //   target.style.transform = transform
    // },
    // handleWarp({ target, transform }) {
    //   target.style.transform = transform
    // },
    // handlePinch({ target }) {},
    addIcon() {
      // const id = uuidv4()
      const position = {
        top: '100px',
        left: '100px',
      }
      // this.$store.dispatch('registerIcon', { id, position })
      const component = {
        componentClass: Vue.extend(DraggableIcon),
        props: {
          // id,
          color: 'blue',
          position,
          // room: this.room,
        },
      }
      this.components.push(component)
    },
    createIcon(position, color) {
      const component = {
        componentClass: Vue.extend(DraggableIcon),
        props: {
          color,
          pPosition: position,
        },
      }
      this.components.push(component)
    },
  },
}
</script>
