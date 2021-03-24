export default class Character {
  constructor(color, name = '登録してください') {
    // 色
    this.color = color
    // 名前
    this.name = name
    this.alive = '生'
    this.useEmergencyButton = false
    this.status = 'グレー'
    this.day1 = ''
    this.day2 = ''
    this.day3 = ''
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
  }

  init() {
    this.reset()
    this.join = true
  }
}
