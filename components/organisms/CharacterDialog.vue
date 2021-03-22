<template>
  <div>
    <v-dialog
      v-model="isShowDialog"
      :dialog-size="dialogSize"
      :persistent="true"
    >
      <v-card class="mx-auto" :max-width="dialogSize" tile>
        <v-form v-if="editedCharacter">
          <v-container fluid fill-height>
            <v-row>
              <v-col cols="4">
                <clue-icon src="/icon/clue/blue.png" />
              </v-col>
              <v-col cols="8">
                <v-checkbox
                  v-model="editedCharacter.join"
                  label="参加する"
                  color="red"
                  hide-details
                ></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="editedCharacter.name"
                  class="text-field"
                  label="名前"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn color="blue darken-1" @click.native="close">設定する</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.text-field {
  width: 200px;
}
</style>

<script>
import ClueIcon from '~/components/molecures/ClueIcon'

export default {
  components: {
    ClueIcon,
  },
  props: {
    // ダイアログ表示フラグ。
    dialogSize: {
      type: Number,
      default: 300,
    },
    showDialog: {
      type: Boolean,
      default: true,
    },
    character: {
      type: Object,
    },
  },
  data() {
    return {
      items: [],
      editedCharacter: null,
      // items: [
      //   {
      //     color: 'red',
      //     name: 'RED',
      //   },
      //   {
      //     color: 'green',
      //     name: 'GREEN',
      //   },
      // ],
    }
  },
  computed: {
    isShowDialog: {
      get() {
        return this.showDialog
      },
      set(val) {
        // this.$emit('update:name', name)
        this.$emit('update:showDialog', val)
      },
    },
  },
  watch: {
    character(val) {
      if (val) {
        this.editedCharacter = this.character
      }
    },
    // showDialog(val) {
    //   if (val) {
    //     const obj = this.$store.getters.getNames
    //     const names = Object.keys(obj)
    //     this.items = names.map((name) => {
    //       return {
    //         color: name,
    //         name: obj[name],
    //       }
    //     })
    //   }
    // },
  },
  methods: {
    close() {
      this.isShowDialog = false
      // 下層キーボードによる押上げを戻す。
      window.scroll(0, 0)
      this.$emit('updateCharacter', this.editedCharacter)
    },
  },
}
</script>
