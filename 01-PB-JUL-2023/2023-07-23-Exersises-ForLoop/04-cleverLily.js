function siana(input) {
    let lillysAge = Number(input[0]);
    let machinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    
    let moneyBirdays = 0;
    let toyBirdays = 0;
    let savedMoney = 0;

    for (let i = 1; i <= lillysAge; i++) {
        if (i % 2 === 0) {
            moneyBirdays++
        } else {
            toyBirdays++
        }
    }
    
    for (let i = 1; i <= moneyBirdays; i++) {
        savedMoney += i * 10;
    }

    let toysMoney = toyBirdays * toyPrice;
    let stolenMoney = moneyBirdays * 1;
    let totalSavedMoney = savedMoney + toysMoney - stolenMoney;
    let diff = Math.abs(machinePrice-totalSavedMoney);

    if (machinePrice <= totalSavedMoney) {
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }

    
}
siana(["90",
"1570.98",
"100"]);