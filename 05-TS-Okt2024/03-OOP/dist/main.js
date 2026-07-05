// const employee = {
//     salary: 30000,
//     overtime: 10,
//     rate: 20,
//     getWage: function () {
//         return this.salary + this.overtime + this.rate;
//     }
// };
class Remote {
    constructor() {
        this.channelNumber = 1;
        this.tvIsOff = true;
    }
    provideSignalToA() {
        return 'A';
    }
    provideSignalToB() {
        return 'B';
    }
    provideSignalToC() {
        return 'C';
    }
    provideSignalToD() {
        return 'D';
    }
    turnOnTV() {
        console.log('TV is turned ON');
        this.tvIsOff = !this.tvIsOff;
    }
    turnOffTV() {
        console.log('TV is turned OFF');
        this.tvIsOff = !this.tvIsOff;
    }
    toggleTurnOnTV() {
        if (this.tvIsOff) {
            this.turnOnTV();
        }
        else {
            this.turnOffTV();
        }
    }
    switchChannelUp() {
        const a = this.provideSignalToA();
        const b = this.provideSignalToB();
        const d = this.provideSignalToD();
        const signal = a + b + d;
        if (signal === 'ABD') {
            this.channelNumber += 1;
            console.log('Channel switched to ' + this.channelNumber);
        }
    }
    switchChannelDown() {
        const b = this.provideSignalToB();
        const d = this.provideSignalToD();
        const c = this.provideSignalToC();
        const signal = b + d + c;
        if (signal === 'ABD') {
            this.channelNumber -= 1;
            console.log('Channel switched to ' + this.channelNumber);
        }
    }
}
const myRemote = new Remote();
myRemote.toggleTurnOnTV();
myRemote.switchChannelUp();
myRemote.switchChannelUp();
myRemote.switchChannelUp();
myRemote.switchChannelDown();
myRemote.toggleTurnOnTV();
