<template>
  <div>
    <v-card hover rounded>
      <v-container fluid fill-height>
        <v-row>
          <v-col cols="2"><v-btn @click="resetSetting">リセット</v-btn></v-col>
          <v-col cols="2">
            <v-select
              v-model="displaySize"
              dense
              :items="displaySizes"
              filled
              label="表示サイズ(Tablet)"
            ></v-select>
          </v-col>
          <v-col cols="2">
            <v-select
              v-model="mapUrl"
              dense
              :items="mapUrls"
              filled
              label="Map"
            ></v-select>
          </v-col>
          <v-col cols="3">
            <setting-persistent-button :index="1" @save="save" @load="load" />
          </v-col>
          <v-col cols="3">
            <setting-persistent-button :index="2" @save="save" @load="load" />
          </v-col>
        </v-row>
        <v-row> <v-divider /> </v-row>
        <v-expansion-panels v-model="panel">
          <v-expansion-panel>
            <v-expansion-panel-header>クルーの設定</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col v-for="(character, i) in characters" :key="i" cols="3">
                  <character-setting-pane
                    :character="character"
                    @updateCharacter="updateCharacter"
                  />
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>マークの設定</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col v-for="(mark, i) in marks" :key="i" cols="3">
                  <v-card :color="mark.color" dark class="pa-4">
                    <v-row>
                      <v-col cols="8">{{ mark.mark }}</v-col>
                      <v-col cols="4">
                        <v-btn
                          :disabled="!mark.editable"
                          @click="showMarkEditDialog(mark)"
                          >編集</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
    size: {
      type: String,
      default: 'default',
    },
    marks: Array,
  },
  data() {
    return {
      dialog: false,
      value: '',
      editedMark: null,
      mapUrls: [
        { text: 'skeld', value: '/map/skeld.png' },
        { text: 'polus', value: '/map/polus.png' },
        { text: 'mirahq', value: '/map/mirahq.png' },
        { text: 'airship', value: '/map/airship.png' },
      ],
      panel: null,
      displaySizes: [
        { text: '10人用', value: 'default' },
        { text: '15人用', value: 'small' },
      ],
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
    displaySize: {
      get() {
        return this.size
      },
      set(val) {
        this.$emit('update:size', val)
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
