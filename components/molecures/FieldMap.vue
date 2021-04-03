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
      <img :style="screen" :src="src" />
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

/* see https://jajaaan.co.jp/web-production/frontend/css-vw-vh-vmin-vmax/ */
/* .screen {
  position: relative;
  top: 0px;
  left: 0px;
  width: 50vw;
} */
.battlearea {
  position: relative;
}
</style>

<script>
import Vue from 'vue'

import DraggableIcon from './DraggableIcon'
import Character from '~/domain/character'

export default {
  components: {
    DraggableIcon,
  },
  props: {
    src: {
      type: String,
      default: '/map/mirahq-2.png',
    },
    characters: Array,
    mapIndex: {
      type: Number,
      default: 0,
    },
    width: {
      type: String,
      default: '50vw',
    },
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
  computed: {
    screen() {
      return {
        position: 'relative',
        top: '0px',
        left: '0px',
        width: this.width,
      }
    },
  },
  watch: {
    characters(val) {
      this.createIcons()
    },
    mapIndex(val) {
      this.createIcons()
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
    },
    handleDrag({ target, transform }) {
      target.style.transform = transform
    },
    createIcon(character) {
      const component = {
        componentClass: Vue.extend(DraggableIcon),
        props: {
          color: character.color,
          character,
          mapIndex: this.mapIndex,
        },
      }
      this.components.push(component)
    },
    updatePosition(character, position) {
      // 冗長なので何とかしたい
      const updateCharacter = new Character()
      Object.assign(updateCharacter, character)
      character.position[this.mapIndex] = position
      // console.log(character)
      this.$emit('updateCharacter', character)
    },
  },
}
</script>
