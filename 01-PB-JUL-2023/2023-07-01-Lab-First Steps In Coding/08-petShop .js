function petShop(input) {
    let dogPack = Number(input[0]);
    let catPack = Number(input[1]);
    
    let dogPrice = dogPack * 2.5;
    let catPrice = catPack * 4;

    let totalPrice = dogPrice + catPrice;

    
    console.log(`${totalPrice} lv.`);
}

petShop(["5 ", "4 "]);
