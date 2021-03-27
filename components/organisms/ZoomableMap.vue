<template>
  <div>
    <v-card hover rounded>
      <field-map :src="src" :characters="characters" />
    </v-card>
    <v-dialog v-model="showDialog" fullscreen>
      <v-card>
        <v-app-bar
          ><v-spacer></v-spacer
          ><v-btn color="blue darken-1" @click="showDialog = false">
            >閉じる</v-btn
          >
        </v-app-bar>
        <field-map
          :src="src"
          :characters="characters"
          @updateCharacter="updateCharacter"
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
  },
  data() {
    return {
      showDialog: false,
    }
  },
  methods: {
    updateCharacter(character) {
      this.$emit('updateCharacter', character)
    },
  },
}
</script>
