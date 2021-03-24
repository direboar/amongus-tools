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
  }

  init() {
    this.reset()
    this.join = true
  }
}
