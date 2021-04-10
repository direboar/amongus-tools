<template>
  <div>
    <v-toolbar>
      <div class="waitingroom" />
      <v-spacer></v-spacer>
      <map-select-button
        :map-index="0"
        :current-index="mapIndex"
        @updateMapIndex="updateMapIndex"
      />
      <map-select-button
        :map-index="1"
        :current-index="mapIndex"
        @updateMapIndex="updateMapIndex"
      />
      <map-select-button
        :map-index="2"
        :current-index="mapIndex"
        @updateMapIndex="updateMapIndex"
      />
      <map-select-button
        :map-index="3"
        :current-index="mapIndex"
        @updateMapIndex="updateMapIndex"
      />
      <map-select-button
        :map-index="4"
        :current-index="mapIndex"
        @updateMapIndex="updateMapIndex"
      />
      <v-divider class="mx-4" vertical></v-divider>
      <v-btn v-if="zoom" color="blue darken-1" @click="closeDialog">
        閉じる</v-btn
      >
      <v-btn v-if="!zoom" color="blue darken-1" @click="showDialog">
        地図拡大</v-btn
      >
    </v-toolbar>
    <div class="battlearea">
      <component
        :is="component.componentClass"
        v-for="(component, i) in components"
        :key="i"
        v-bind="component.props"
        @updatePosition="updatePosition"
      ></component>
      <v-slider
        v-if="zoom"
        v-model="size"
        dense
        max="100"
        min="75"
        append-icon="mdi-magnify-plus-outline"
        prepend-icon="mdi-magnify-minus-outline"
        @input="moveSlider"
      ></v-slider>
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
import MapSelectButton from '~/components/molecures/MapSelectButton'

export default {
  components: {
    DraggableIcon,
    MapSelectButton,
  },
  props: {
    src: {
      type: String,
      default: '/map/mirahq.png',
    },
    characters: Array,
    mapIndex: {
      type: Number,
      default: 0,
    },
    zoom: {
      type: Boolean,
      default: false,
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
      size: 0,
    }
  },
  computed: {
    screen() {
      return {
        position: 'relative',
        top: '0px',
        left: '0px',
        width: `${this.mapWidth}vw`,
      }
    },
    mapWidth() {
      return this.size
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
  created() {
    if (this.zoom) {
      this.size = 100
    } else {
      this.size = 50
    }
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
          zoom: this.zoom,
          size: this.size, // FIXME 画面サイズをアイコンと共有する方法。イベントハンドラが必要？
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
      character.initPositon = false
      this.$emit('updateCharacter', character)
    },
    updateMapIndex(index) {
      this.$emit('updateMapIndex', index)
    },
    closeDialog() {
      this.$emit('closeDialog')
    },
    showDialog() {
      this.$emit('showDialog')
    },
    moveSlider() {
      this.components.forEach((component) => {
        console.log(`size=${component.props.size}`)
        component.props.size = this.size
      })
    },
  },
}
</script>
