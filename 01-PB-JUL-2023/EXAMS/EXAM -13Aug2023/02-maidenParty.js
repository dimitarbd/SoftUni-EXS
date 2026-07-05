function maidenParty(input) {
    let priceParty = Number(input[0]);
    let loveLettes = Number(input[1]);
    let rose = Number(input[2]);
    let key = Number(input[3]);
    let caricature = Number(input[4]);
    let luckSuprise = Number(input[5]);

    let sumMoney = loveLettes * 0.6 + rose * 7.2 + key * 3.6 + caricature * 18.2 + luckSuprise * 22;
    let numArtikuli = loveLettes + rose + key + caricature + luckSuprise;

    if (numArtikuli >= 25) {
        sumMoney *= 0.65;
    }

    let totalSumMoney = sumMoney * 0.9;

    let diff = Math.abs(priceParty - totalSumMoney);

    if (priceParty <= totalSumMoney) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }

}
maidenParty([320,
    8,
    2,
    5,
    5,
    1]);