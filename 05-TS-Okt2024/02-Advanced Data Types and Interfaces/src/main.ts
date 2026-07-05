// const arr: (number | string)[] = ['a', 1, 'b', 2];

// arr.forEach((x) => {
//     if (typeof x == 'string') {
//         console.log('String : ' + x);
//     } else {
//         console.log(x * 1000);
//     }
// });

interface ClockLayot {
    hour: number;
    minute: number;
    showTime(h: number, m: number): string;
}

class Clock implements ClockLayot {
    public hour;
    public minute;
    constructor(h: number, m: number) {
        this.hour = h;
        this.minute = m;
    }
    showTime() {
        return `Current time: ${this.hour}:${this.minute}`;
    }
}

const myClock = new Clock(12, 59);

console.log(myClock.showTime);



