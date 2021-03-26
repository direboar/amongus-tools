<template>
  <div>
    <div class="waitingroom" />
    <div class="battlearea">
      <component
        :is="component.componentClass"
        v-for="(component, i) in components"
        :key="i"
        v-bind="component.props"
        @updatePosition="updatePosition"
      ></component>
      <img class="screen" :src="src" />
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
  /* width: 85vw; */
  width: 50vw;
}
.battlearea {
  position: relative;
}
</style>

<script>
import Vue from 'vue'
// import { v4 as uuidv4 } from 'uuid'

import DraggableIcon from './DraggableIcon'
import Character from '~/domain/character'

export default {
  components: {
    DraggableIcon,
  },
  props: {
    src: {
      type: String,
      default: '/map/skeld.png',
    },
    characters: Array,
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
  watch: {
    characters(val) {
      this.createIcons()
      // console.log('characters')
    },
  },
  mounted() {
    this.createIcons()
  },
  beforeDestroy() {},
  methods: {
    createIcons() {
      this.components = []
      this.characters.forEach((character) => {
        this.createIcon(character)
      })
      // this.createIcon({ top: '20px', left: '0px' }, 'black')
      // this.createIcon({ top: '20px', left: '50px' }, 'blue')
      // this.createIcon({ top: '20px', left: '100px' }, 'brown')
      // this.createIcon({ top: '20px', left: '150px' }, 'green')
      // this.createIcon({ top: '20px', left: '200px' }, 'lime')
      // this.createIcon({ top: '20px', left: '250px' }, 'orange')
      // this.createIcon({ top: '20px', left: '300px' }, 'pink')
      // this.createIcon({ top: '20px', left: '350px' }, 'purple')
      // this.createIcon({ top: '20px', left: '400px' }, 'red')
      // this.createIcon({ top: '20px', left: '450px' }, 'skyblue')
      // this.createIcon({ top: '20px', left: '500px' }, 'white')
      // this.createIcon({ top: '20px', left: '550px' }, 'yellow')
    },
    handleDrag({ target, transform }) {
      target.style.transform = transform
    },
    createIcon(character) {
      // const character = this.characters.find((e) => {
      //   return e.color === color
      // })
      const component = {
        componentClass: Vue.extend(DraggableIcon),
        props: {
          color: character.color,
          character,
        },
      }
      this.components.push(component)
      // const updateCharacter = new Character()
      // Object.assign(updateCharacter, character)
      // character.position = position
      // console.log(character)
      // this.$emit('updateCharacter', character)
    },
    updatePosition(character, position) {
      const updateCharacter = new Character()
      Object.assign(updateCharacter, character)
      character.position = position
      console.log(character)
      this.$emit('updateCharacter', character)
    },
  },
}
</script>
