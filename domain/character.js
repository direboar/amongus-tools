export default class Character {
  constructor(color, name = '登録してください') {
    // 色
    this.color = color
    // 名前
    this.name = name
    this.alive = true
    this.useEmergencyButton = false
    this.status = 'グレー'
    this.day1 = ''
    this.day2 = ''
    this.day3 = ''
    this.join = true
  }

  get iconUrl() {
    return this.alive
      ? `/icon/clue/${this.color}.png`
      : `/icon/dead/${this.color}.png`
  }
}
