<template>
  <div>
    <v-card hover rounded>
      <v-container fluid fill-height>
        <v-row>
          <v-col cols="4"
            ><v-btn @click="resetSetting"
              >クルーの設定をリセットする</v-btn
            ></v-col
          >
          <v-col cols="4">
            <setting-persistent-button :index="1" @save="save" @load="load" />
          </v-col>
          <v-col cols="4">
            <setting-persistent-button :index="2" @save="save" @load="load" />
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="(character, i) in characters" :key="i" cols="4">
            <character-setting-pane :character="character" />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import Character from '~/domain/character'
import CharacterSettingPane from '~/components/molecures/CharacterSettingPane'
import SettingPersistentButton from '~/components/molecures/SettingPersistentButton'

export default {
  components: {
    CharacterSettingPane,
    SettingPersistentButton,
  },
  props: {
    // src: String,
    characters: Array,
  },
  data() {
    return {
      showDialog: false,
      character: new Character('red', 'RED'),
    }
  },
  methods: {
    resetSetting() {
      this.$emit('resetSetting')
    },
    save(index) {
      this.$emit('saveSetting', index)
    },
    load(index) {
      this.$emit('loadSetting', index)
    },
  },
}
</script>
