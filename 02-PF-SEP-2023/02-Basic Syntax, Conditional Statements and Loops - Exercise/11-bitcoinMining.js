function bitcoinMining(input) {
    let bitcoin = 11949.16;
    let levaPerGram = 67.51;

    let digging = 0;
    let sumGold = 0;
    let sumGoldDay = 0;
    let counter = 0;
    let counterDay = 0;
    let firstBitcoin = 0;

    for (let i = 0; i < input.length; i++) {
        digging = Number(input[i]);
        counterDay++;
        sumGoldDay += digging;
        if (sumGoldDay > (bitcoin / levaPerGram)) {
            firstBitcoin += counterDay;
            break;
        }
    }

    for (let i = 0; i < input.length; i++) {
        digging = Number(input[i]);
        counter++;
        if (counter % 3 == 0) {
            digging *= 0.7
        }
        sumGold += digging;
    }

    let levaTotal = sumGold * levaPerGram;
    let bitcoinTotal = Math.floor(levaTotal / bitcoin);
    let moneyLeft = (levaTotal % bitcoin).toFixed(2);

    console.log(`Bought bitcoins: ${bitcoinTotal}`);
    if (firstBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }
    console.log(`Left money: ${moneyLeft} lv.`);

}
bitcoinMining([100, 200, 300]);