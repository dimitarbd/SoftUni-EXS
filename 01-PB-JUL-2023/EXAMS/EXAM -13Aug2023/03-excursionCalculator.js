function excursionCalculator(input) {
    let numPeople = Number(input[0]);
    let season = input[1];

    let vacationPrice = 0;

    if (numPeople <= 5) {
        switch (season) {
            case "spring": vacationPrice = numPeople * 50; break;
            case "summer": vacationPrice = numPeople * 48.5 * 0.85; break;
            case "autumn": vacationPrice = numPeople * 60; break;
            case "winter": vacationPrice = numPeople * 86 * 1.08; break;
        }
    } else {
        switch (season) {
            case "spring": vacationPrice = numPeople * 48; break;
            case "summer": vacationPrice = numPeople * 45 * 0.85; break;
            case "autumn": vacationPrice = numPeople * 49.5; break;
            case "winter": vacationPrice = numPeople * 85 * 1.08; break;
        }
    }
    console.log(`${vacationPrice.toFixed(2)} leva.`)
}
excursionCalculator([5,
    "spring"]);