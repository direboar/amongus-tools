export default class Character {
  constructor(color, name = '登録してください', join = true) {
    // 色
    this.color = color
    // 名前
    this.name = name
    // this.alive = '生'
    this.useEmergencyButton = false
    this.status = 'グレー'
    this.mark = '―'
    this.join = join
    this.position = {}
    this.initPositon = true
    this.resetPosition({
      top: 0,
      absTop: 0,
      left: 0,
      absLeft: 0,
    })
  }

  get isAlive() {
    return this.status !== 'KILL' && this.status !== '追放'
  }

  get iconUrl() {
    return this.isAlive
      ? `./icon/clue/${this.color}.png`
      : `./icon/dead/${this.color}.png`
  }

  reset() {
    // this.alive = '生'
    this.useEmergencyButton = false
    this.status = 'グレー'
    this.mark = '―'
    this.resetPosition({
      top: 0,
      absTop: 0,
      left: 0,
      absLeft: 0,
    })
  }

  init() {
    this.reset()
    this.join = true
  }

  resetPosition(position) {
    // 配列
    for (let i = 0; i < 5; i++) {
      const copy = {}
      Object.assign(copy, position)
      this.position[i] = copy
      this.position[i].initPositon = true
    }
  }

  static assign(obj) {
    const retVal = new Character()
    Object.assign(retVal, obj)
    return retVal
  }

  // オブジェクトの配列を指定し、Spellsインスタンスの配列に変換する。
  static assigns(array) {
    const retVal = []
    array.forEach((obj) => {
      retVal.push(Character.assign(obj))
    })
    return retVal
  }
}
