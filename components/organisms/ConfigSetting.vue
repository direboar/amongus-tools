<template>
  <div>
    <v-card hover rounded>
      <v-container fluid fill-height>
        <v-row>
          <v-col cols="12"
            ><v-btn @click="resetSetting"
              >クルーの設定をリセットする</v-btn
            ></v-col
          >
        </v-row>
        <v-row>
          <v-col cols="4" v-for="(character, i) in characters" :key="i">
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

export default {
  components: { CharacterSettingPane },
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
  },
}
</script>
