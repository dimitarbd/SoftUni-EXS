function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];
    let price = 0;
    let nights = days - 1;

    switch (roomType) {
        case "room for one person":
            price = nights * 18; break;
        case "apartment":
            if (nights < 10) {
                price = nights * 25 * 0.7;
            } else if (nights <= 15) {
                price = nights * 25 * 0.65;
            } else if (nights > 15) {
                price = nights * 25 * 0.5;
            }
            break;
        case "president apartment":
            if (nights < 10) {
                price = nights* 35 * 0.9;
            } else if (nights <= 15) {
                price = nights * 35 * 0.85;
            } else if (nights > 15) {
                price = nights * 35 * 0.8;
            }
            break;
    }

    if (rating == "positive") {
        price *= 1.25;
    } else if (rating == "negative") {
        price *= 0.9;
    }

    console.log(price.toFixed(2));

}

skiTrip(["12",
"room for one person",
"positive"]);