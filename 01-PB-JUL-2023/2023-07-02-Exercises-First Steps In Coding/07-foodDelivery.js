function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegyMenu = Number(input[2]);

    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let vegyMenuPrice = vegyMenu * 8.15;

    let menuPrice = chickenMenuPrice + fishMenuPrice + vegyMenuPrice;
    let desert = menuPrice * 0.2;
    let totalPrice = menuPrice + desert + 2.5;

    console.log(menuPrice);
}

foodDelivery(["2 ", "4 ", "3 "]);