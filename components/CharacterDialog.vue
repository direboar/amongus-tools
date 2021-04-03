<template>
  <div>
    <v-dialog
      v-model="isShowDialog"
      :dialogSize="dialogSize"
      :persistent="true"
    >
      <v-card class="mx-auto" max-width="300" tile>
        <!-- <v-layout row wrap>
          <v-flex xs12> -->
        <v-list dense>
          <template v-for="(item, index) in items">
            <!-- <v-divider :key="`div-${index}`"></v-divider> -->
            <v-list-item :key="`list-${index}`">
              <v-list-item-content>
                <v-list-item-title>{{ item.color }}</v-list-item-title>
                <!-- {{ item.color }} -->
              </v-list-item-content>
              <v-list-item-content>
                <!-- <v-list-item-title v-text="item.color"></v-list-item-title> -->
                <v-text-field
                  dense
                  type="text"
                  v-model="item.name"
                  required
                  maxlength="10"
                />
              </v-list-item-content>
              <!-- <v-list-item-content>
                    アイコンを使用する
                    <v-checkbox></v-checkbox>
                  </v-list-item-content> -->
            </v-list-item>
          </template>
        </v-list>
        <!-- </v-flex> -->
        <v-spacer></v-spacer>
        <!-- <v-flex xs9 />
          <v-flex xs3> -->
        <v-btn color="green darken-1" text @click.native="close">閉じる</v-btn>
        <!-- </v-flex>
        </v-layout> -->
      </v-card>
    </v-dialog>
  </div>
</template>

<style></style>

<script>
export default {
  props: {
    // ダイアログ表示フラグ。
    dialogSize: {
      type: Number,
      default: 700,
    },
    showDialog: {
      type: Boolean,
      default: true,
    },
    message: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      items: [],
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
  watch: {
    showDialog(val) {
      if (val) {
        const obj = this.$store.getters.getNames
        const names = Object.keys(obj)
        this.items = names.map((name) => {
          return {
            color: name,
            name: obj[name],
          }
        })
      }
    },
  },
  computed: {
    isShowDialog: {
      get() {
        return this.showDialog
      },
      set(name) {
        this.$emit('update:showDialog', false)
      },
    },
  },
  methods: {
    close() {
      const obj = []
      this.items.forEach((item) => {
        obj[item.color] = item.name
      })
      this.$store.commit(`setNames`, obj)

      this.isShowDialog = false
    },
  },
}
</script>
