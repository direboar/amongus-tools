<template>
  <div>
    <v-card hover rounded @dblclick="showDialog = true">
      <field-map :src="src" :characters="characters" :map-index="mapIndex" />
    </v-card>
    <v-dialog v-model="showDialog" fullscreen>
      <v-card>
        <v-app-bar
          ><v-spacer></v-spacer
          ><v-btn color="blue darken-1" @click="showDialog = false">
            閉じる</v-btn
          >
        </v-app-bar>
        <v-img :src="src" />
        <!-- <field-map
          :src="src"
          :characters="characters"
          :mapIndex="mapIndex"
          width="100vw"
          @updateCharacter="updateCharacter"
        /> -->
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
    zoom: Boolean,
    mapIndex: {
      type: Number,
      default: 0,
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
  },
}
</script>
