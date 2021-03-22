<template>
  <div>
    <v-card hover ripple rounded @click="showDialog = !showDialog">
      <v-img :src="src" />
    </v-card>
    <v-dialog v-model="showDialog" fullscreen @click="showDialog = !showDialog">
      <v-card>
        <v-app-bar
          ><v-spacer></v-spacer
          ><v-btn color="blue darken-1" @click="showDialog = !showDialog"
            >閉じる</v-btn
          ></v-app-bar
        >
        <field-map :src="src" />
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
  },
  data() {
    return {
      showDialog: false,
    }
  },
  methods: {
    // edit(name) {
    //   this.showDialog = true
    // },
  },
}
</script>
