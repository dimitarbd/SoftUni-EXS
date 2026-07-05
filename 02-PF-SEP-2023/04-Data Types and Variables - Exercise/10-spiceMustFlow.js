function spiceMustFlow(startingYield) {
    let index = 0;
    let finalYield = 0;

    while (startingYield >= 100) {
        finalYield += startingYield;
        finalYield -= 26;
        startingYield -= 10;
        index++;
    }
    finalYield -=26;
    if (finalYield < 0) {
        finalYield = 0;
    }
    console.log(index);
    console.log(finalYield);
}
spiceMustFlow(111);
spiceMustFlow(450);

