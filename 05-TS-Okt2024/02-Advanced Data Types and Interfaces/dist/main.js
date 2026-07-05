// const arr: (number | string)[] = ['a', 1, 'b', 2];
class Clock {
    constructor(h, m) {
        this.hour = h;
        this.minute = m;
    }
    showTime() {
        return `Current time: ${this.hour}:${this.minute}`;
    }
}
const myClock = new Clock(12, 59);
console.log(myClock.showTime);
