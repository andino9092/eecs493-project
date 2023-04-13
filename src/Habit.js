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

  getHabitData(year, month) {
    let habitInfo = {
      thisMonth: 0,
      thisYear: 0,
    };

    this.records.forEach((log) => {
      const d = new Date(log);
      if (d.getFullYear() === year) {
        habitInfo.thisYear += 1;
        if (d.getMonth() === month) {
          habitInfo.thisMonth += 1;
        }
      }
    });

    return habitInfo;
  }
}

export default Habit;
