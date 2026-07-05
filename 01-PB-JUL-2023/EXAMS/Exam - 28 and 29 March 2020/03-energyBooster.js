function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let numSets = Number(input[2]);

    let price = 0;

    switch (size) {
        case "small":
            switch (fruit) {
                case "Watermelon": price = numSets * 2 * 56; break;
                case "Mango": price = numSets * 2 * 36.66; break;
                case "Pineapple": price = numSets * 2 * 42.1; break;
                case "Raspberry": price = numSets * 2 * 20; break;
            } break;
        case "big":
            switch (fruit) {
                case "Watermelon": price = numSets * 5 * 28.7; break;
                case "Mango": price = numSets * 5 * 19.60; break;
                case "Pineapple": price = numSets * 5 * 24.8; break;
                case "Raspberry": price = numSets * 5 * 15.2; break;
            } break;
    }

    if (price >= 400 && price <=1000) {
        price *= 0.85;
    } else if (price > 1000) {
        price *= 0.5;
    }

console.log(`${price.toFixed(2)} lv.`);

}
energyBooster(["Pineapple",
    "small",
    1]);