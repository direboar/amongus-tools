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
      <v-btn @click="startGame">ゲームを開始する</v-btn>
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
                  <zoomable-map src="/map/skeld.png" :characters="characters" />
                </v-col>
                <v-col cols="12">
                  <character-classify-area
                    :gray="gray"
                    :maybeClue="maybeClue"
                    :maybeImpostor="maybeImpostor"
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
          @resetSetting="resetSetting"
          @resetDeletedClue="resetDeletedClue"
        />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import CharacterStatusTable from '~/components/organisms/CharacterStatusTable'
import ConfigSetting from '~/components/organisms/ConfigSetting'

import Character from '~/domain/character'
import CharacterClassifyArea from '~/components/organisms/CharacterClassifyArea.vue'
import ZoomableMap from '~/components/organisms/ZoomableMap.vue'

export default {
  components: {
    CharacterStatusTable,
    ConfigSetting,
    CharacterClassifyArea,
    ZoomableMap,
  },
  mounted() {
    this.gray = this.characters
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
    }
  },
  methods: {
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
    },
    resetSetting() {
      this.characters = this.createClues()
      this.gray = this.characters
      this.maybeClue = []
      this.maybeImpostor = []
      this.killed = []
      this.hunged = []
    },
    resetDeletedClue() {
      this.characters.forEach((character) => {
        character.join = true
      })
    },
    updateCharacter(updated) {
      const found = this.characters.find((c) => {
        return updated.color === c.color
      })
      if (found) {
        // if (updated.join) {
        //   updated.join = false
        //   // const index = this.characters.indexOf(found)
        //   // this.characters.splice(index, 1)
        // } else {
        Object.assign(found, updated)
        console.log(updated)
        // }
      }
    },
    updateCharacterStatus(status, pCharacters) {
      this[status] = pCharacters
      pCharacters.forEach((character) => {
        // 生死状態の更新
        if (status === 'killed') {
          character.alive = 'KILL'
          character.useEmergencyButton = true
        } else if (status === 'hunged') {
          character.alive = '吊られ'
          character.useEmergencyButton = true
        } else if (status === 'hunged') {
          character.alive = '生'
        }

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
          character.status = '吊られ'
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
  },
}
</script>
