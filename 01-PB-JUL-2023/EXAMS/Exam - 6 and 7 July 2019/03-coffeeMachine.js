function coffeeMachine(input) {
    let drink = input[0];
    let sugar = input[1];
    let numberDrinks = Number(input[2]);

    let sum = 0;

    switch (drink) {
        case "Espresso":
            switch (sugar) {
                case "Without": sum = numberDrinks * 0.9 * 0.65; break;
                case "Normal": sum = numberDrinks * 1; break;
                case "Extra": sum = numberDrinks * 1.2; break;
            } break;
        case "Cappuccino":
            switch (sugar) {
                case "Without": sum = numberDrinks * 1 * 0.65; break;
                case "Normal": sum = numberDrinks * 1.2; break;
                case "Extra": sum = numberDrinks * 1.6; break;
            } break;
        case "Tea":
            switch (sugar) {
                case "Without": sum = numberDrinks * 0.5 * 0.65; break;
                case "Normal": sum = numberDrinks * 0.6; break;
                case "Extra": sum = numberDrinks * 0.7; break;
            } break;

    }

    if (drink === "Espresso" && numberDrinks >= 5) {
        sum *=0.75;
    }

    if (sum > 15) {
        sum *= 0.8;
    }
console.log(`You bought ${numberDrinks} cups of ${drink} for ${sum.toFixed(2)} lv.`)

}
coffeeMachine(["Cappuccino",
    "Normal",
    13]);