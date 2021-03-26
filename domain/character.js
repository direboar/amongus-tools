export default class Character {
  constructor(color, name = '登録してください') {
    // 色
    this.color = color
    // 名前
    this.name = name
    this.alive = '生'
    this.useEmergencyButton = false
    this.status = 'グレー'
    this.mark = '―'
    this.join = true
    this.position = {
      top: '0px',
      left: '0px',
    }
  }

  get iconUrl() {
    return this.alive === '生'
      ? `/icon/clue/${this.color}.png`
      : `/icon/dead/${this.color}.png`
  }

  reset() {
    this.alive = '生'
    this.useEmergencyButton = false
    this.status = 'グレー'
    this.mark = '―'
    this.position = {
      top: '0px',
      left: '0px',
    }
  }

  init() {
    this.reset()
    this.join = true
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
