function excursionSale(input) {
    let seaVacation = Number(input[0]);
    let mountainVacation = Number(input[1]);
    let index = 2;
    let command = input[index];
    index++;

    let profit = 0;

    while (command !== "Stop") {
        let currentVacation = command;

        if (currentVacation == "sea" && seaVacation > 0) {
            profit += 680;
            seaVacation--;
        } else if (currentVacation == "mountain" && mountainVacation >0) {
            profit += 499;
            mountainVacation--;
        }
        if (seaVacation == 0 && mountainVacation ==0) {
            console.log("Good job! Everything is sold.")
            break;
        }
        
        command = input[index];
        index++;

    }

console.log(`Profit: ${profit} leva.`)

}
excursionSale([2,
    2,
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"]);