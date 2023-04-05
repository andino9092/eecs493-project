class Habit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
    this.view = true;
    this.records = new Set();
  }

  addLog(date) {
    this.records.add(date);
  }

  delLog(date) {
    this.records.delete(date);
  }
}

export default Habit;
