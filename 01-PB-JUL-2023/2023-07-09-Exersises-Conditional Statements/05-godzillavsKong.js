function godzillavsKong(input) {
    let budjet = Number(input[0]);
    let statists = Number(input[1]);
    let clothes = Number(input[2]);

    if (statists > 150) {
        clothes *= 0.9;
    }

    let decorSum = budjet * 0.1;
    let clothesPrice = statists * clothes;
    let filmBudjet = decorSum + clothesPrice;

    if (statists > 150) {
        clothes *= 0.9;
    }

    if (filmBudjet > budjet) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(filmBudjet - budjet).toFixed(2)} leva more.`)
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budjet - filmBudjet).toFixed(2)} leva left.`)
    }
    
}

godzillavsKong(["20000",
"120",
"55.5"]);