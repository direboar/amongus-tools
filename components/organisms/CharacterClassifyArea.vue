<template>
  <v-card>
    <character-classify-card
      title="グレー"
      :characters="gray"
      color="blue-grey lighten-1"
      @updateCharacters="updateCharacters(`gray`, $event)"
    />
    <character-classify-card
      title="怪しい"
      :characters="maybeImpostor"
      color="blue-grey darken-1"
      @updateCharacters="updateCharacters(`maybeImpostor`, $event)"
    />
    <character-classify-card
      title="白め"
      :characters="maybeClue"
      color="light-blue lighten-3"
      @updateCharacters="updateCharacters(`maybeClue`, $event)"
    />
    <character-classify-card
      title="KILL"
      :characters="killed"
      color="red darken-4"
      @updateCharacters="updateCharacters(`killed`, $event)"
    />
    <character-classify-card
      title="吊られ"
      :characters="hunged"
      color="light-blue brown darken-2"
      @updateCharacters="updateCharacters(`hunged`, $event)"
    />
  </v-card>
</template>

<style lang="scss" scoped></style>

<script>
import CharacterClassifyCard from '~/components/molecures/CharacterClassifyCard'

export default {
  components: {
    CharacterClassifyCard,
  },
  props: {
    gray: Array,
    maybeClue: Array,
    maybeImpostor: Array,
    killed: Array,
    hunged: Array,
  },
  mounted() {
    // console.log(this.gray)
  },
  data() {
    return {
      // selection: null,
      // selection2: null,
      // selection3: null,
      // selection4: null,
      // selection5: null,
      // clues: ['aaa', 'bbb', 'ccc', 'ddd'],
      // clues2: ['eee'],
      // clues3: ['fff'],
      // clues4: ['ggg'],
      // clues5: ['hhh'],
      // showDialog: false,
    }
  },
  methods: {
    updateCharacters(type, characters) {
      this.$emit('updateCharacters', type, characters)
    },
    // edit(name) {
    //   this.showDialog = true
    // },
  },
}
</script>
