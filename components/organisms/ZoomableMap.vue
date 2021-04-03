<template>
  <div>
    <v-card hover rounded>
      <field-map
        :src="src"
        :characters="characters"
        :map-index="mapIndex"
        :zoom="false"
        @updateCharacter="updateCharacter"
        @updateMapIndex="updateMapIndex"
        @closeDialog="closeDialog"
        @showDialog="showDialog"
      />
      <!-- <v-img :src="src" /> -->
    </v-card>
    <v-dialog v-model="dialog" fullscreen>
      <v-card>
        <field-map
          :src="src"
          :characters="characters"
          :map-index="mapIndex"
          :zoom="true"
          @updateCharacter="updateCharacter"
          @updateMapIndex="updateMapIndex"
          @closeDialog="closeDialog"
          @showDialog="showDialog"
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
    // zoom: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  data() {
    return {
      touched: false,
      dialog: false,
    }
  },
  computed: {
    // dialog: {
    //   get() {
    //     return this.zoom
    //   },
    //   set(val) {
    //     this.$emit('update:zoom', val)
    //   },
    // },
  },
  methods: {
    updateCharacter(character) {
      this.$emit('updateCharacter', character)
    },
    updateMapIndex(index) {
      this.$emit('updateMapIndex', index)
    },
    closeDialog() {
      this.dialog = false
    },
    showDialog() {
      console.log('showDialog')
      this.dialog = true
    },
  },
}
</script>
