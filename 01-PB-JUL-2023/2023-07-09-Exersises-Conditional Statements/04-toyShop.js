function toyShop(input) {
    let tripPrise = Number(input[0]);
    let pizzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalPrise = pizzles * 2.60 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2; 
    let numberToys = pizzles +  dolls + bears + minions + trucks;
    
    if (numberToys >= 50) {
        totalPrise *= 0.75;
    }

    let rental = totalPrise * 0.1;
    let profit = totalPrise - rental;

    if ( profit >= tripPrise) {
        console.log(`Yes! ${(profit - tripPrise).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(tripPrise - profit).toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"]);