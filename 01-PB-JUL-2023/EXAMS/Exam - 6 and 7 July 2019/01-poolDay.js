function poolDay(input) {
    let people = Number(input[0]);
    let taxEntrance = Number(input[1]);
    let shezlong = Number(input[2]);
    let umbrela = Number(input[3]);

    let taxEntrancePrice = people * taxEntrance;
    let shezlongPrice = Math.ceil(people * 0.75) * shezlong;
    let umbrelaPrice = Math.ceil(people / 2) * umbrela;

    let totalPrice = taxEntrancePrice + shezlongPrice + umbrelaPrice;

    console.log(`${totalPrice.toFixed(2)} lv.`);
}

poolDay([21,
    5.50,
    4.40,
    6.20])