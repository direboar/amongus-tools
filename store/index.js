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

export const getters = {
  getNames: (state) => {
    return state.names
  },
}

export const mutations = {
  setNames: (state, names) => {
    state.names = names
  },
}
// export const mutations = {
// }
