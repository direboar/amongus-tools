<template>
  <div>
    <v-simple-table class="table" dense :dark="false">
      <!-- <table> -->
      <thead>
        <tr>
          <th class="text-left icon">icon</th>
          <th class="text-left">名前</th>
          <th class="text-left">生死</th>
          <th class="text-left">ボタン</th>
          <!-- <th class="text-left">その他</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(character, i) in characters" :key="i">
          <td>
            <div @click="edit(character)">
              <clue-icon :src="character.iconUrl" />
            </div>
          </td>
          <td>
            <div @click="edit(character)">
              {{ character.name }}
            </div>
          </td>
          <td>
            <character-alive-button :alive.sync="character.alive" />
          </td>
          <td>
            <emergency-button
              :use-emergency-button.sync="character.useEmergencyButton"
            />
          </td>
          <!-- <td>
            <status-button :status.sync="character.status" />
          </td> -->
        </tr>
      </tbody>
      <!-- </table> -->
    </v-simple-table>
    <character-dialog
      :show-dialog.sync="showDialog"
      :character="editedCharacter"
      @updateCharacter="updateCharacter"
    />
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
import CharacterDialog from '~/components/organisms/CharacterDialog'
import ClueIcon from '~/components/molecures/ClueIcon'
import CharacterAliveButton from '~/components/molecures/CharacterAliveButton.vue'
import EmergencyButton from '~/components/molecures/EmergencyButton.vue'
// import StatusSelectBox from '~/components/molecures/StatusSelectBox.vue'
// import StatusButton from '~/components/molecures/StatusButton.vue'

export default {
  components: {
    CharacterDialog,
    ClueIcon,
    CharacterAliveButton,
    EmergencyButton,
    // StatusSelectBox,
    // StatusButton,
  },
  props: {
    characters: Array,
  },
  data() {
    return {
      showDialog: false,
      editedCharacter: null,
    }
  },
  methods: {
    edit(character) {
      this.editedCharacter = character
      this.showDialog = true
    },
    updateCharacter(character) {
      this.$emit('updateCharacter', character)
    },
  },
}
</script>
