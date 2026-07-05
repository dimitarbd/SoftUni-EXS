class Singleton {
    constructor() {
        this.id = Math.floor(Math.random() * 1000);
    }
    static getInstance() {
        if (this.instance === null) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}
Singleton.instance = null;
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
const instance3 = Singleton.getInstance();
console.log(instance1.id);
console.log(instance2.id);
console.log(instance3.id);
