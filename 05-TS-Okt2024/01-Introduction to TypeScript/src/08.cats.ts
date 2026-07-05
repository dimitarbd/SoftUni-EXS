function cats(arr) {
    class Cat {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let current of arr) {
        let tokens: string[] = current.split(' ');
        let name: string = tokens[0];
        let age: number = Number(tokens[1]);

        let cat = new Cat(name, age);

        cat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);