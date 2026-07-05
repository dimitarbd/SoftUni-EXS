function backToThePast(input) {
    let legacyMoney = Number(input[0]);
    let yearToLive = Number(input[1]);

    let evenYears = 0;
    let oddYears = 0;

    for (i = 1800; i <= yearToLive; i++) {
        if (i % 2 === 0) {
            evenYears += 12000;
        } else {
            oddYears += 12000 + 50 * ((i - 1800) + 18);
        }
    }

    let totalMoneySpend = evenYears + oddYears;
    let diff = Math.abs(legacyMoney - totalMoneySpend);
    if (legacyMoney >= totalMoneySpend) {
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`)

    }

}


backToThePast([100000.15,
    1808]);