<template>
  <v-row>
    <v-col md="1">
      <v-btn :disabled="room === null" @click="addIcon">アイコンを追加</v-btn>
      <v-btn :disabled="room !== null" @click="enterRoom">Roomに入室</v-btn>
    </v-col>
    <v-col md="11">
      <!--
        動的コンポーネントにpropsを渡す方法
        https://stackoverflow.com/questions/43658481/passing-props-dynamically-to-dynamic-component-in-vuejs
      -->
      <div class="battlearea">
        <component
          :is="component.componentClass"
          v-for="(component, i) in components"
          :key="i"
          v-bind="component.props"
        ></component>
        <img class="screen" src="/map/skeld.png" />
      </div>
    </v-col>
  </v-row>
</template>

<style>
.screen {
  /* overflow: visible; */
  position: relative;
  top: 0px;
  left: 0px;
  /* see https://jajaaan.co.jp/web-production/frontend/css-vw-vh-vmin-vmax/ */
  width: 88vw;
}
.battlearea {
  position: relative;
}
</style>

<script>
import Vue from 'vue'
import { v4 as uuidv4 } from 'uuid'
import Peer from 'skyway-js'

import DraggableIcon from '~/components/DraggableIcon.vue'

export default {
  components: {
    DraggableIcon,
  },
  data() {
    return {
      peer: new Peer({
        key: '7e7d1d39-a597-47c0-9542-1ae7bcda4fec',
        debug: 3,
      }),
      room: null,
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
    // actionの実行をサブスクライブする方法
    // https://kawadev.net/vuex-watch/#toc_id_2_3
    this.$store.subscribeAction((action, state) => {
      if (action.type === 'registerIcon') {
        const id = action.payload
        const component = {
          componentClass: Vue.extend(DraggableIcon),
          props: {
            id,
            room: this.room,
          },
        }
        this.components.push(component)
      }
    })
  },
  beforeDestroy() {
    if (this.room) {
      this.room.close()
    }
    this.peer.destroy()
  },
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
      const id = uuidv4()
      this.$store.dispatch('registerIcon', id)

      // send message to room.
      const message = {
        type: 'registerIcon',
        id,
      }
      this.room.send(message)

      // console.log('xxx')
      // const ComponentClass = Vue.extend(DraggableIcon)
      // this.components.push(ComponentClass)
    },
    enterRoom() {
      this.room = this.peer.joinRoom('room1')
      // commit('setRoom', room)
      // 受信処理
      this.room.on('data', ({ src, data }) => {
        const type = data.type
        const id = data.id
        const position = data.position
        if (type === 'registerIcon') {
          this.$store.dispatch('registerIcon', id)
        } else if (type === 'move') {
          // this.$store.dispatch('registerIcon', id)
          this.$store.commit(`${id}/setPosition`, position)
        }
      })
    },
  },
}
</script>
