<template>
  <field-map :characters="characters" src="/map/polus.jpg" />
</template>

<style></style>

<script>
import FieldMap from '~/components/molecures/FieldMap'
import Character from '~/domain/character'

export default {
  components: {
    FieldMap,
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
        new Character('purple', 'shiromedaka'),
        new Character('red', 'yuusui'),
        new Character('skyblue', 'SKYBLLUE'),
        new Character('white', 'shiromedaka'),
        new Character('yellow', 'GAU'),
      ],
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {},
}
</script>
