function aluminumJoinery(input) {
    let numberJoinery = Number(input[0]);
    let typeJoinery = input[1];
    let typeDelivery = input[2];

    let priceJoinery = 0;

    switch (typeJoinery) {
        case "90X130":
            if (numberJoinery > 30 && numberJoinery <= 60) {
                priceJoinery = numberJoinery * 110 * 0.95;
            } else if (numberJoinery > 60) {
                priceJoinery = numberJoinery * 110 * 0.92;
            } else {
                priceJoinery = numberJoinery * 110;
            } break;
        case "100X150":
            if (numberJoinery > 40 && numberJoinery <= 80) {
                priceJoinery = numberJoinery * 140 * 0.94;
            } else if (numberJoinery > 80) {
                priceJoinery = numberJoinery * 140 * 0.9;
            } else {
                priceJoinery = numberJoinery * 140;
            } break;
        case "130X180":
            if (numberJoinery > 20 && numberJoinery <= 50) {
                priceJoinery = numberJoinery * 190 * 0.93;
            } else if (numberJoinery > 50) {
                priceJoinery = numberJoinery * 190 * 0.88;
            } else {
                priceJoinery = numberJoinery * 190;
            } break;
        case "200X300":
            if (numberJoinery > 25 && numberJoinery <= 50) {
                priceJoinery = numberJoinery * 250 * 0.91;
            } else if (numberJoinery > 50) {
                priceJoinery = numberJoinery * 250 * 0.86;
            } else {
                priceJoinery = numberJoinery * 250;
            } break;
    }
    if (typeDelivery == "With delivery") {
        priceJoinery += 60;
    }
    if (numberJoinery > 99) {
        priceJoinery *= 0.96;
    }
    if (numberJoinery < 10) {
        console.log("Invalid order");
    } else {
        console.log(`${priceJoinery.toFixed(2)} BGN`);
    }

}

aluminumJoinery([40,
    "90X130",
    "Without delivery"]);
