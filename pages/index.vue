<template>
  <v-card>
    <v-tabs>
      <v-tab>
        <v-icon left> mdi-account </v-icon>
        CharacterStatusTable
      </v-tab>
      <v-tab>
        <v-icon left> mdi-access-point </v-icon>
        ImageDrag
      </v-tab>
      <v-tab-item>
        <v-row>
          <v-col cols="7">
            <character-status-table :characters="characters" />
          </v-col>
          <v-col cols="5">
            <v-row>
              <v-col cols="12">
                <v-card>
                  <v-img src="/map/skeld.png" />
                </v-card>
                <!-- <character-classify-area
                  :gray="gray"
                  :maybeClue="maybeClue"
                  :maybeImpostor="maybeImpostor"
                  :killed="killed"
                  :hunged="hunged"
                /> -->
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
      </v-tab-item>
      <v-tab-item>
        <image-drag />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
// import ImageDrag from '~/components/organisms/ImageDrag'
import CharacterStatusTable from '~/components/organisms/CharacterStatusTable'
// import CharacterClassifyArea from '~/components/organisms/CharacterClassifyArea'
import Character from '~/domain/character'
import CharacterClassifyArea from '~/components/organisms/CharacterClassifyArea.vue'

export default {
  components: {
    CharacterStatusTable,
    // ImageDragCharacterClassifyArea,
    CharacterClassifyArea,
  },
  // components: {
  //   CharacterStatusTable2,
  // },
  mounted() {
    this.gray = this.characters
  },
  data() {
    return {
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
}
</script>
