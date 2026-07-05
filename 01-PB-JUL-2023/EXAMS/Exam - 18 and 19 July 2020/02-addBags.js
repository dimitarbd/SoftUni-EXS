function addBags(input) {
    let luggageOver20 = Number(input[0]);
    let kiloLugagge = Number(input[1]);
    let daysToTrip = Number(input[2]);
    let numLuggage = Number(input[3]);

    let priceLuggage = 0;

    if (kiloLugagge < 10) {
        priceLuggage = 0.2 * luggageOver20;
    } else if (kiloLugagge >= 10 && kiloLugagge <= 20) {
        priceLuggage = 0.5 * luggageOver20
    } else {
        priceLuggage = luggageOver20;
    }

    if (daysToTrip > 30) {
        priceLuggage *= 1.1; 
    } else if (daysToTrip >= 7 && daysToTrip <= 30) {
        priceLuggage *= 1.15;
    } else {
        priceLuggage *= 1.4;
    }

    console.log(`The total price of bags is: ${(numLuggage*priceLuggage).toFixed(2)} lv.`)

}
addBags([63.80,
    23,
    3,
    1]);