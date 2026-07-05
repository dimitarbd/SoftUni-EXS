class Singleton {
    private static instance: Singleton | null = null;
    id: number;

    private constructor() {
        this.id = Math.floor(Math.random() * 1000);
    }

    public static getInstance(): Singleton {
        if (this.instance === null) {
            this.instance = new Singleton();
        }

        return this.instance;
    }
}
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
const instance3 = Singleton.getInstance();

console.log(instance1.id);
console.log(instance2.id);
console.log(instance3.id);
