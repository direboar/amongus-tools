<template>
  <div>
    <v-card hover rounded>
      <v-img :src="src" />
    </v-card>
    <v-dialog v-model="showDialog" fullscreen>
      <v-card>
        <field-map
          :src="src"
          :characters="characters"
          :map-index="mapIndex"
          width="90vw"
          @updateCharacter="updateCharacter"
          @updateMapIndex="updateMapIndex"
          @close="close"
        />
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import FieldMap from '~/components/molecures/FieldMap'

export default {
  components: {
    FieldMap,
  },
  props: {
    src: String,
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
      touched: false,
    }
  },
  computed: {
    showDialog: {
      get() {
        return this.zoom
      },
      set(val) {
        this.$emit('update:zoom', val)
      },
    },
  },
  methods: {
    updateCharacter(character) {
      this.$emit('updateCharacter', character)
    },
    updateMapIndex(index) {
      this.$emit('updateMapIndex', index)
    },
    close() {
      this.showDialog = false
    },
  },
}
</script>
