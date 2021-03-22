<template>
  <v-card>
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
                  <zoomable-map src="/map/skeld.png" />
                </v-col>
                <v-col cols="12">
                  <character-classify-area
                    :gray="gray"
                    :maybeClue="maybeClue"
                    :maybeImpostor="maybeImpostor"
                    :killed="killed"
                    :hunged="hunged"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
      <v-tab-item> 設定のリセットなど。<br /> </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
// import ImageDrag from '~/components/organisms/ImageDrag'
import CharacterStatusTable from '~/components/organisms/CharacterStatusTable'
// import CharacterClassifyArea from '~/components/organisms/CharacterClassifyArea'
import Character from '~/domain/character'
import CharacterClassifyArea from '~/components/organisms/CharacterClassifyArea.vue'
import ZoomableMap from '~/components/organisms/ZoomableMap.vue'

export default {
  components: {
    CharacterStatusTable,
    // ImageDrag,
    // ImageDragCharacterClassifyArea,
    CharacterClassifyArea,
    ZoomableMap,
  },
  // components: {
  //   CharacterStatusTable2,
  // },
  mounted() {
    this.gray = this.characters
  },
  data() {
    return {
      tab: null,
      characters: [
        new Character('black', 'toma'),
        new Character('blue', 'minokuba'),
        new Character('brown', 'diablo'),
        new Character('green', 'GREEEEN'),
        new Character('lime', 'mojinjp'),
        new Character('orange', 'metaB'),
        new Character('pink', 'PIIINK'),
        new Character('red', 'yuusui'),
        new Character('skyblue', 'SKYBLLUE'),
        new Character('white', 'shiromedaka'),
        new Character('yellow', 'GAU'),
      ],
      gray: [],
      maybeClue: [],
      maybeImpostor: [],
      killed: [],
      hunged: [],
    }
  },
  methods: {
    updateCharacter(updated) {
      const found = this.characters.find((c) => {
        return updated.color === c.color
      })
      if (found) {
        if (!updated.join) {
          const index = this.characters.indexOf(found)
          this.characters.splice(index, 1)
        } else {
          Object.assign(found, updated)
        }
      }
    },
  },
}
</script>
