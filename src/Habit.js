class Habit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.view = true;
    this.records = new Set();
  }

  addLog(year, month, day) {
    this.records.add(year + "/" + month + "/" + day);
  }

  delLog(year, month, day) {
    this.records.delete(year + "/" + month + "/" + day);
  }

  hasRecordForDate(year, month, day) {
    return this.records.has(year + "/" + month + "/" + day);
  }
}

export default Habit;
