function shopping(input) {
    let budjet = Number(input[0]);
    let VGA = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);

    let sumVGA = VGA * 250;
    let priceCPU = sumVGA * 0.35;
    let sumCPU = CPU * priceCPU;
    let priceRAM = sumVGA * 0.1;
    let sumRAM = RAM * priceRAM;

    let totalSum = sumVGA + sumCPU + sumRAM;

    if (VGA > CPU) {
        totalSum *= 0.85;
    }

    if (totalSum <= budjet) {
        console.log(`You have ${(budjet - totalSum).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalSum - budjet).toFixed(2)} leva more!`)
    }

}

shopping(["900",
"2",
"1",
"3"]);