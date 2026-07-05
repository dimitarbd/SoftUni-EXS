function accountBalance(input) {

    let accountBalance = input[0];
    let index = 1;
    let total = 0;

    while (accountBalance !== "NoMoreMoney") {
        let command = Number(accountBalance);
        if (command < 0) {
            console.log("Invalid operation!");
            break;
        }
        total += command;
        console.log(`Increase: ${command.toFixed(2)}`);
        accountBalance = input[index];
        index++;
    }

    console.log(`Total: ${total.toFixed(2)}`)

}
accountBalance(["120",
"45.55",
"-150"]);