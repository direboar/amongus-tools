<template>
  <v-card>
    <character-classify-card
      title="グレー"
      :characters="gray"
      color="blue-grey lighten-1"
      :size="size"
      @updateCharacters="updateCharacters(`gray`, $event)"
    />
    <character-classify-card
      title="怪しい"
      :characters="maybeImpostor"
      color="blue-grey darken-1"
      :size="size"
      @updateCharacters="updateCharacters(`maybeImpostor`, $event)"
    />
    <character-classify-card
      title="白め"
      :characters="maybeClue"
      color="light-blue lighten-3"
      :size="size"
      @updateCharacters="updateCharacters(`maybeClue`, $event)"
    />
    <character-classify-card
      title="KILL"
      :characters="killed"
      color="red darken-4"
      :size="size"
      @updateCharacters="updateCharacters(`killed`, $event)"
    />
    <character-classify-card
      title="追放"
      :characters="hunged"
      color="light-blue brown darken-2"
      :size="size"
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
    size: {
      type: String,
      default: 'default',
    },
  },
  data() {
    return {}
  },
  mounted() {
    // console.log(this.gray)
  },
  methods: {
    updateCharacters(type, characters) {
      this.$emit('updateCharacters', type, characters)
    },
  },
}
</script>
