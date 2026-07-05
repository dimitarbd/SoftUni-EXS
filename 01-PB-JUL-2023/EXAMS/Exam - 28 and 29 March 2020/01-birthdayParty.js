function birthdayParty(input) {
    let rent = Number(input[0]);

    let cakePrice = rent * 0.2;
    let drinksPrice = cakePrice * 0.55;
    let animatorsPrice = rent / 3;

    let budjet = rent + cakePrice + drinksPrice + animatorsPrice;

    console.log(budjet)

}
birthdayParty([2250]);