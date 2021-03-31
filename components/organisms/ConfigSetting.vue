<template>
  <div>
    <v-card hover rounded>
      <v-container fluid fill-height>
        <v-row>
          <v-col cols="3"
            ><v-btn @click="resetSetting"
              >クルーの設定をリセットする</v-btn
            ></v-col
          >
          <v-row>
            <v-col cols="3">
              Map
              <v-radio-group v-model="mapUrl">
                <v-radio
                  label="skeld"
                  color="red"
                  value="/map/skeld.png"
                ></v-radio>
                <v-radio
                  label="polus"
                  color="red"
                  value="/map/polus.png"
                ></v-radio>
                <v-radio
                  label="mirahq"
                  color="red"
                  value="/map/mirahq.png"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-col cols="3">
            <setting-persistent-button :index="1" @save="save" @load="load" />
          </v-col>
          <v-col cols="3">
            <setting-persistent-button :index="2" @save="save" @load="load" />
          </v-col>
        </v-row>
        <v-row> <v-divider /> </v-row>
        <v-row> <v-subheader>クルーの設定</v-subheader> </v-row>
        <v-row>
          <v-col v-for="(character, i) in characters" :key="i" cols="3">
            <character-setting-pane
              :character="character"
              @updateCharacter="updateCharacter"
            />
          </v-col>
        </v-row>
        <v-row> <v-divider /> </v-row>
        <v-row> <v-subheader>マークの設定</v-subheader> </v-row>
        <v-row>
          <v-col v-for="(mark, i) in marks" :key="i" cols="3">
            <v-card :color="mark.color" dark class="pa-4">
              <v-container>
                <v-row>
                  <v-col cols="8">{{ mark.mark }}</v-col>
                  <v-col cols="4">
                    <v-btn
                      @click="showMarkEditDialog(mark)"
                      :disabled="!mark.editable"
                      >編集</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog v-model="dialog" width="500">
        <mark-edit-dialog
          :mark="editedMark"
          @updateMark="updateMark"
          @closeDialog="closeDialog"
        />
      </v-dialog>
    </v-card>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import CharacterSettingPane from '~/components/molecures/CharacterSettingPane'
import SettingPersistentButton from '~/components/molecures/SettingPersistentButton'
import MarkEditDialog from '~/components/molecures/MarkEditDialog'

export default {
  components: {
    CharacterSettingPane,
    SettingPersistentButton,
    MarkEditDialog,
  },
  props: {
    characters: Array,
    map: {
      type: String,
      default: '/map/skeld.png',
    },
    marks: Array,
  },
  data() {
    return {
      dialog: false,
      value: '',
      editedMark: null,
    }
  },
  computed: {
    mapUrl: {
      get() {
        return this.map
      },
      set(val) {
        this.$emit('update:map', val)
      },
    },
  },
  methods: {
    showMarkEditDialog(mark) {
      this.editedMark = mark
      this.dialog = true
    },
    resetSetting() {
      this.$emit('resetSetting')
    },
    save(index) {
      this.$emit('saveSetting', index)
    },
    load(index) {
      this.$emit('loadSetting', index)
    },
    updateCharacter(character) {
      this.$emit('updateCharacter', character)
    },
    closeDialog() {
      this.dialog = false
    },
    updateMark(mark) {
      const marks = Array.from(this.marks)
      const index = marks.indexOf(this.editedMark)
      marks[index] = mark
      // this.editedMark = mark
      // console.log(this.editedMark)
      this.$emit('updateMarks', marks)
    },
  },
}
</script>
