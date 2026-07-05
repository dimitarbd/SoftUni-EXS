class BMW {
    constructor() {
        this.model = 'BMW';
    }
    drive() {
        console.log(`You are driving ${this.model}`);
    }
}
class Tesla {
    constructor() {
        this.model = 'Tesla';
    }
    drive() {
        console.log(`You are driving ${this.model}`);
    }
}
class VW {
    constructor() {
        this.model = 'VW';
    }
    drive() {
        console.log(`You are driving ${this.model}`);
    }
}
class CarFactory {
    createCar(model) {
        if (model === 'Tesla') {
            return new Tesla();
        }
        else if (model === 'VW') {
            return new VW();
        }
        else if (model === 'BMW') {
            return new BMW();
        }
        else {
            const errMsg = `Car model: ${model} is not supported!`;
            throw new Error(errMsg);
        }
    }
}
const carFactory = new CarFactory();
const myTesla = carFactory.createCar('Tesla');
console.log(myTesla.model);
const myBMW = carFactory.createCar('BMW');
console.log(myBMW.model);
const myVW = carFactory.createCar('VWdd');
console.log(myVW.model);
