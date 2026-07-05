function suppliesForSchool(input) {
    let pencilPack = Number(input[0]);
    let markerPack = Number(input[1]);
    let washer = Number(input[2]);
    let persent = Number(input[3]);

    let pencilPackPrice = pencilPack * 5.80;
    let markerPackPrice = markerPack * 7.20;
    let washerPrice = washer * 1.2;
    
    let totalPrice = pencilPackPrice + markerPackPrice + washerPrice;
    let discount = totalPrice - (totalPrice * (persent/100));

    console.log(discount);
}

suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);