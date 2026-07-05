function fishingBoat(input) {
    let budjet = Number(input[0]);
    let season = input[1];
    let fisher = Number(input[2]);
    let money = 0;

    if (season == "Spring") {
        if (fisher <= 6) {
            money = 3000 * 0.9;
        } else if (fisher >= 7 && fisher <= 11) {
            money = 3000 * 0.85;
        } else if (fisher >= 12) {
            money = 3000 * 0.75;
        }
    } else if (season == "Summer" || season == "Autumn") {
        if (fisher <= 6) {
            money = 4200 * 0.9;
        } else if (fisher >= 7 && fisher <= 11) {
            money = 4200 * 0.85;
        } else if (fisher >= 12) {
            money = 4200 * 0.75;
        }
    } else if (season == "Winter") {
        if (fisher <= 6) {
            money = 2600 * 0.9;
        } else if (fisher >= 7 && fisher <= 11) {
            money = 2600 * 0.85;
        } else if (fisher >= 12) {
            money = 2600 * 0.75;
        }
    }

    if (fisher % 2 == 0 && season != "Autumn") {
        money *= 0.95;
    }

    let diff = Math.abs(budjet - money)

    if (budjet >= money) {
        console.log(`Yes! You have ${(diff).toFixed(2)} leva left.`)
    } else if (budjet < money) {
        console.log(`Not enough money! You need ${(diff).toFixed(2)} leva.`)
    }

}
fishingBoat(["3000",
    "Summer",
    "11"]);