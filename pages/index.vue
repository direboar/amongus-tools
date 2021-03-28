<template>
  <v-card>
    <v-app-bar dense>
      <v-tabs v-model="tab">
        <v-tab>
          <v-icon left> mdi-account </v-icon>
          メイン
        </v-tab>
        <v-tab>
          <v-icon left> mdi-access-point </v-icon>
          設定
        </v-tab>
      </v-tabs>
      <v-btn color="light-blue darken-3" @click="startGame">開始</v-btn>
      <v-divider class="mx-4" vertical></v-divider>
      <map-select-button
        :map-index="0"
        :current-index="mapIndex"
        @updateMapIndex="updateMapIndex"
      />
      <map-select-button
        :map-index="1"
        :current-index="mapIndex"
        @updateMapIndex="updateMapIndex"
      />
      <map-select-button
        :map-index="2"
        :current-index="mapIndex"
        @updateMapIndex="updateMapIndex"
      />
      <map-select-button
        :map-index="3"
        :current-index="mapIndex"
        @updateMapIndex="updateMapIndex"
      />
      <map-select-button
        :map-index="4"
        :current-index="mapIndex"
        @updateMapIndex="updateMapIndex"
      />
      <v-divider class="mx-4" vertical></v-divider>
      <v-btn color="brown darken-3" @click="zoom = true">地図拡大</v-btn>
    </v-app-bar>
    <v-tabs-items v-model="tab" :touchless="true">
      <v-tab-item>
        <v-card>
          <v-row>
            <v-col cols="6">
              <character-status-table
                :characters="characters"
                @updateCharacter="updateCharacter"
              />
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-col cols="12">
                  <zoomable-map
                    :src="map"
                    :characters="characters"
                    :map-index="mapIndex"
                    :zoom.sync="zoom"
                    @updateCharacter="updateCharacter"
                  />
                </v-col>
                <v-col cols="12">
                  <character-classify-area
                    :gray="gray"
                    :maybe-clue="maybeClue"
                    :maybe-impostor="maybeImpostor"
                    :killed="killed"
                    :hunged="hunged"
                    @updateCharacters="updateCharacterStatus"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <config-setting
          :characters="characters"
          :map.sync="map"
          @resetSetting="resetSetting"
          @saveSetting="saveSetting"
          @loadSetting="loadSetting"
          @updateCharacter="updateCharacter"
        />
      </v-tab-item>
    </v-tabs-items>
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" top>
      {{ snackbar.message }}
    </v-snackbar>
  </v-card>
</template>

<script>
import CharacterStatusTable from '~/components/organisms/CharacterStatusTable'
import ConfigSetting from '~/components/organisms/ConfigSetting'

import Character from '~/domain/character'
import CharacterClassifyArea from '~/components/organisms/CharacterClassifyArea.vue'
import ZoomableMap from '~/components/organisms/ZoomableMap.vue'
// import FieldMap from '~/components/molecures/FieldMap'
import MapSelectButton from '~/components/molecures/MapSelectButton'

export default {
  components: {
    CharacterStatusTable,
    ConfigSetting,
    CharacterClassifyArea,
    // FieldMap,
    ZoomableMap,
    MapSelectButton,
  },
  data() {
    return {
      tab: null,
      characters: this.createClues(),
      gray: [],
      maybeClue: [],
      maybeImpostor: [],
      killed: [],
      hunged: [],
      snackbar: {
        show: false,
        message: '',
        color: 'success',
      },
      map: '/map/skeld.png',
      mapIndex: 0,
      zoom: false,
    }
  },
  mounted() {
    this.gray = this.characters
    this.initPosition()
  },
  methods: {
    updateMapIndex(mapIndex) {
      this.mapIndex = mapIndex
    },
    createClues() {
      return [
        new Character('black', 'black'),
        new Character('blue', 'blue'),
        new Character('brown', 'brown'),
        new Character('green', 'green'),
        new Character('lime', 'lime'),
        new Character('orange', 'orange'),
        new Character('pink', 'pink'),
        new Character('purple', 'purple'),
        new Character('red', 'red'),
        new Character('skyblue', 'skyblue'),
        new Character('white', 'white'),
        new Character('yellow', 'yellow'),
      ]
    },
    startGame() {
      this.characters.forEach((character) => {
        character.reset()
      })
      this.moveAllChacarctorToGray()
      this.initPosition()
    },
    resetSetting() {
      this.characters = this.createClues()
      this.resetCharacterStatusArea()
      this.initPosition()
    },
    updateCharacter(updated) {
      const found = this.characters.find((c) => {
        return updated.color === c.color
      })
      // キャラクターの追加状態が変更されたか。
      const joined = found.join !== updated.join
      if (found) {
        Object.assign(found, updated)
      }
      // キャラクターが追加された場合は、地図上の表示位置を初期化する。
      if (joined) {
        this.initPosition()
      }
    },
    updateCharacterStatus(status, pCharacters) {
      this[status] = pCharacters
      console.log(pCharacters)
      pCharacters.forEach((character) => {
        // if (status === 'killed') {
        //   character.alive = 'KILL'
        //   character.useEmergencyButton = true
        // } else if (status === 'hunged') {
        //   character.alive = '追放'
        //   character.useEmergencyButton = true
        // } else if (status === 'hunged') {
        //   character.alive = '生'
        // }

        // ステータスの更新
        if (status === 'gray') {
          character.status = 'グレー'
        } else if (status === 'maybeImpostor') {
          character.status = '怪しい'
        } else if (status === 'maybeClue') {
          character.status = '白目'
        } else if (status === 'killed') {
          character.status = 'KILL'
        } else if (status === 'hunged') {
          character.status = '追放'
        }
        // useEmergencyButtonの更新
        if (!character.isAlive) {
          character.useEmergencyButton = true
        }
      })
    },
    moveAllChacarctorToGray() {
      const move = (chars) => {
        chars.forEach((c) => {
          this.gray.push(c)
        })
        return []
      }
      this.maybeClue = move(this.maybeClue)
      this.maybeImpostor = move(this.maybeImpostor)
      this.killed = move(this.killed)
      this.hunged = move(this.hunged)
    },
    resetCharacterStatusArea() {
      this.gray = this.characters
      this.maybeClue = []
      this.maybeImpostor = []
      this.killed = []
      this.hunged = []
    },
    saveSetting(index) {
      try {
        localStorage.setItem(
          `amongus-memo-tools.settings.${index}`,
          JSON.stringify(this.characters)
        )
        this.showSnackbar('success', '設定をセーブしました')
      } catch (e) {
        this.showSnackbar('error', '設定のセーブに失敗しました')
        console.err(e)
      }
    },
    loadSetting(index) {
      try {
        const loaded = localStorage.getItem(
          `amongus-memo-tools.settings.${index}`
        )
        if (loaded) {
          const objects = JSON.parse(loaded)
          this.characters = Character.assigns(objects)
          this.resetCharacterStatusArea()
          this.initPosition()
          this.showSnackbar('success', '設定をロードしました')
        } else {
          this.showSnackbar('success', `設定{index}は保存されていません`)
        }
      } catch (e) {
        this.showSnackbar('error', '設定のロードに失敗しました')
        console.err(e)
      }
    },
    initPosition() {
      let x = 0
      this.characters.forEach((character) => {
        if (character.join) {
          character.resetPosition({
            top: '20px',
            left: `${x}px`,
          })
          x = x + 45
        }
      })
      this.mapIndex = 0
    },
    showSnackbar(color, message) {
      this.snackbar.color = color
      this.snackbar.message = message
      this.snackbar.show = true
    },
  },
}
</script>
