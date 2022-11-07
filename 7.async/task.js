class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error("Отсутствует идентификатор");
    }

    if (this.alarmCollection.some((clock) => clock.id === id)) {
      console.error("Такой звонок уже присутствует");
      return;
    }

    this.alarmCollection.push({ id, callback, time });
  }

  removeClock(id) {
    const lengthBeforeRemove = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(
      (clock) => clock.id !== id
    );
    return lengthBeforeRemove !== this.alarmCollection.length;
  }

  getCurrentFormattedTime() {
    let date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  checkClock = (clock) => {
    if (this.getCurrentFormattedTime === clock.time) {
      clock.callback();
    }
  };

  start() {
    if (this.timerId) {
      return;
    }
    this.timerId = setInterval(() => {
      this.alarmCollection.forEach(checkClock);
    }, 1000);
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach((clock) =>
      console.log(`id:${clock.id}, time:${clock.time}`)
    );
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
