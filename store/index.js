export const state = () => ({
  names: {
    black: 'black',
    blue: 'blue',
    brown: 'brown',
    green: 'green',
    lime: 'lime',
    orange: 'orange',
    pink: 'pink',
    purple: 'purple',
    red: 'red',
    skyblue: 'skyblue',
    white: 'white',
    yellow: 'yellow',
  },
})

// export const actions = {
//   registerIcon({ commit }, { id, position }) {
//     // 動的モジュールの登録
//     // https://github.com/nuxt/nuxt.js/issues/3162
//     // https://motida-japan.hatenablog.com/entry/2018/12/28/100000
//     // https://vuex.vuejs.org/ja/guide/modules.html
//     this.registerModule(id, createModule(), {
//       preserveState: false,
//     })
//     console.log(`${id}/setPosition`)
//     console.log(position)
//     commit(`${id}/setPosition`, position)
//     // const message = {
//     //   type: 'registerIcon',
//     //   id,
//     // }
//     // room.send(message)
//   },
// }
// function createModule() {
//   const state = () => ({
//     position: {},
//   })

//   const getters = {
//     getPosition: (state) => {
//       // console.log(state.position)
//       return state.position
//     },
//   }

//   const mutations = {
//     initPosition(state) {
//       // const position = {
//       //   top: '50px',
//       //   left: '0px',
//       // }
//       // state.position = position
//     },

//     setPosition(state, position) {
//       console.log(position)
//       state.position = position
//     },

//     removePosition(state) {
//       state.position = null
//     },
//   }

//   return {
//     namespaced: true,
//     state,
//     getters,
//     mutations,
//   }
// }

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
