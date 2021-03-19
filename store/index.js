// export const state = () => ({
//   peer: {},
//   room: {},
// })

// export const mutations = {
//   // ---編集するItemの情報を指定する ---//
//   setPeer(state, peer) {
//     console.log(state)
//     console.log(peer)
//     state.peer = peer
//   },
//   setRoom(state, room) {
//     state.room = room
//   },
// }

export const actions = {
  registerIcon({ commit }, id) {
    // 動的モジュールの登録
    // https://github.com/nuxt/nuxt.js/issues/3162
    // https://motida-japan.hatenablog.com/entry/2018/12/28/100000
    // https://vuex.vuejs.org/ja/guide/modules.html
    this.registerModule(id, createModule(), {
      preserveState: false,
    })
    commit(`${id}/initPosition`)
    // const message = {
    //   type: 'registerIcon',
    //   id,
    // }
    // room.send(message)
  },
}
function createModule() {
  const state = () => ({
    position: {},
  })

  const getters = {
    getPosition: (state) => {
      // console.log(state.position)
      return state.position
    },
  }

  const mutations = {
    initPosition(state) {
      const position = {
        top: '0px',
        left: '0px',
      }
      state.position = position
    },

    setPosition(state, position) {
      state.position = position
    },

    removePosition(state) {
      state.position = null
    },
  }

  return {
    namespaced: true,
    state,
    getters,
    mutations,
  }
}

// function createPlugin(peer) {
//   return (store) => {
//     peer.on('open', () => {
//       const room = peer.joinRoom('room1')
//       console.log(room)
//       // 受信処理
//       room.on('data', ({ data }) => {
//         const type = data.type
//         const id = data.id
//         const position = data.position
//         if (type === 'registerIcon') {
//           console.log(this)
//           store.registerIcon(id)
//         } else if (type === 'move') {
//           store.commit(`${this.id}/setPosition`, position)
//         }
//       })
//     })
//   }
// }
