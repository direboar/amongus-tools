<template>
  <div>
    <v-simple-table class="table" dense :dark="false">
      <thead>
        <tr>
          <th class="text-left icon">icon</th>
          <th class="text-left">名前</th>
          <th class="text-left">ボタン</th>
          <th class="text-left">マーク</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(character, i) in joinCharacters" :key="i">
          <td>
            <div>
              <clue-icon :src="character.iconUrl" />
            </div>
          </td>
          <td>
            <div>
              {{ character.name }}
            </div>
          </td>
          <td>
            <emergency-button
              :use-emergency-button.sync="character.useEmergencyButton"
            />
          </td>
          <td>
            <mark-button :marks="marks" :mark.sync="character.mark" />
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<style lang="scss" scoped>
.text-field {
  width: 100px;
}
.table td {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  text-align: left;
  // padding: 0px 0px;
}
.table th {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}
.table td + td {
  border-left: 1px solid white;
}
.table th + th {
  border-bottom: 1px solid white;
  border-left: 1px solid white;
}

.icon {
  width: 40px;
}
</style>

<script>
import ClueIcon from '~/components/molecures/ClueIcon'
import EmergencyButton from '~/components/molecures/EmergencyButton.vue'
import MarkButton from '~/components/molecures/MarkButton.vue'

export default {
  components: {
    ClueIcon,
    EmergencyButton,
    MarkButton,
  },
  props: {
    characters: Array,
    marks: Array,
  },
  data() {
    return {
      editedCharacter: null,
    }
  },
  computed: {
    joinCharacters() {
      return this.characters.filter((c) => c.join)
    },
  },
  methods: {},
}
</script>
