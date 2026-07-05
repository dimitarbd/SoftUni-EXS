function vacation(input) {
    let needMoney = Number(input[0]);
    let availableMoney = Number(input[1]);

    let index = 2;

    let spendDays = 0;
    let days = 0;
    let command = input[index];

    while (availableMoney >= 0) {
        days++;
        command = input[index];
        index++;

        if (command === "spend") {
            let moneyToSpend = Number(input[index]);
            availableMoney -= moneyToSpend;
            spendDays++;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
           
            if (spendDays === 5) {
                console.log("You can't save the money.");
                console.log(days);
                break;
            }
           

        } else if (command === "save") {
            let moneyToSave = Number(input[index]);
            availableMoney += moneyToSave;
            spendDays = 0;
            if (availableMoney >= needMoney) {
                console.log(`You saved the money for ${days} days.`)
                break;
            }

        }
        
        index++;
    }
}

vacation(["110",
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
"10"]);