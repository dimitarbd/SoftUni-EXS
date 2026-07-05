function club(input) {
    let desiredProfit = Number(input[0]);
    let price = 0;
    let currentPrice = 0;

    for (i = 1; i < input.length; i++) {
        let coctailName = input[i];
        i++;
        let coctailNumber = Number(input[i]);

        if (coctailName === "Party!") {
            console.log(`We need ${(desiredProfit - price).toFixed(2)} leva more.`);
            break;
        }

        currentPrice = coctailName.length * coctailNumber;
        if (currentPrice % 2 !== 0) {
            currentPrice *= 0.75;
        }
        price +=currentPrice;
        if (desiredProfit <= price) {
            console.log("Target acquired.");
            break;
        }

    }
    
    console.log(`Club income - ${price.toFixed(2)} leva.`)

}
club([100,
    "Sidecar",
    7,
    "Mojito",
    5,
    "White Russian",
    10]);