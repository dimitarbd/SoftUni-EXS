"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks;
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    // Method addDrink(drink: Drink) – adds an entity to the collection of Drinks, if the capacity allows it.
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    // Method removeDrink(name: string) – removes a drink by the given name, if such exists, and returns true if it is removed, otherwise – false
    removeDrink(name) {
        const index = this.drinks.findIndex((c) => c.name === name);
        if (index != -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    }
    // Method getLongest() – returns the Drink as string in the format of the overriden toString() method with the biggest value of volume property
    getLongest() {
        const sorted = this.drinks.reduce((sorted, a, b) => {
            return a.volume > sorted.volume ? a : sorted;
        });
        return sorted.toString();
    }
    // Method getCheapest()– returns the Drink as string in the format of the overriden toString() method with the lowest value of price property
    getCheapest() {
        const sorted = this.drinks.reduce((sorted, a, b) => {
            return a.price < sorted.price ? a : sorted;
        });
        return sorted.toString();
    }
    // Method buyDrink(name: string) – returns a string in the format of the overriden toString() method
    buyDrink(name) {
        const drink = this.drinks.find((c) => c.name === name).toString();
        return drink;
    }
    // Method getCount - returns the number of drinks, available in the vending machine
    getCount() {
        return this.drinks.length;
    }
    // Method report() – returns a string in the following format:
    //     ◦ "Drinks available:
    //         { Drink1 }
    //         { Drink2 }
    //         (…) "
    report() {
        const drinksReport = this.drinks.map(c => c.toString()).join('\n');
        return `Drinks available:\n${drinksReport}`;
    }
    ;
}
exports.VendingMachine = VendingMachine;
