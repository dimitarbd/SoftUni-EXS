// const employee = {
//     salary: 30000,
//     overtime: 10,
//     rate: 20,
//     getWage: function () {
//         return this.salary + this.overtime + this.rate;
//     }
// };

// console.log(employee.getWage());

// class Person {
//     firstName: string;
//     lastName: string;

//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;        
//     } 
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const person1 = new Person('Ivan', 'Petrov');
// console.log(person1.getFullName());

// const person2 = new Person('Martin', 'Shopov');
// console.log(person2.getFullName());

interface MyRemote {
    switchChannelDown: () => void;
    switchChannelUp: () => void;
    toggleTurnOnTV: () => void;

}

class Remote implements MyRemote{
    private channelNumber: number = 1;
    private tvIsOff = true;

    private provideSignalToA() {
        return 'A';
    }
    private provideSignalToB() {
        return 'B';
    }
    private provideSignalToC() {
        return 'C';
    }
    private provideSignalToD() {
        return 'D';
    }

    private turnOnTV() {
        console.log('TV is turned ON');        
        this.tvIsOff = !this.tvIsOff;
    }

    private turnOffTV() {
        console.log('TV is turned OFF');        

        this.tvIsOff = !this.tvIsOff;
    }

    public toggleTurnOnTV() {
        if(this.tvIsOff) {
            this.turnOnTV();
            } else {
                this.turnOffTV()
            }
    }    
    public switchChannelUp() {
        const a = this.provideSignalToA();
        const b = this.provideSignalToB();
        const d = this.provideSignalToD();
        
        const signal = a + b + d;
        if (signal === 'ABD') {
            this.channelNumber += 1;
            console.log('Channel switched to ' + this.channelNumber);

        }
    }
    public switchChannelDown() {
        const b = this.provideSignalToB();
        const d = this.provideSignalToD();
        const c = this.provideSignalToC();

        
        const signal = b + d +c;
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
