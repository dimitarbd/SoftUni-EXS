function whileDemo(input) {
 
    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);
    let days = 0;
    let spendDays = 0;
    let index = 2;
    let command = input[index];
 
    while (availableMoney >= 0) {
 
        days++;
        index++;
 
        if (command === "spend") {
            let moneyToSpend = Number(input[index]);
            availableMoney -= moneyToSpend;
 
            if(availableMoney < 0){
                availableMoney = 0;
            }
            spendDays++;
 
            if(spendDays === 5){
                console.log("You can't save the money.");
                console.log(days);
                break;
            }
        } else if (command === "save") {
            spendDays = 0;
            let moneyToSave = Number(input[index]);
            availableMoney += moneyToSave;
 
            if(availableMoney >= neededMoney){
                console.log(`You saved the money for ${days} days.`);
                break;
            }
        }
 
        index++;
        command = input[index];
 
    } 
}

whileDemo(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])