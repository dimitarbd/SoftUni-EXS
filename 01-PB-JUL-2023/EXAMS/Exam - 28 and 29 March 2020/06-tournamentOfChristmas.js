function tournamentOfChristmas(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;

    let winDays = 0;
    let loseDays = 0;
    let totalMoney = 0;

    for (let i = 0; i < days; i++) {
        let command = input[index];
        index++;
        let winGames = 0;
        let loseGames = 0;
        let winMoney = 0;

        while (command !== "Finish") {
            let game = command;
            let winLose = input[index];
            index++;
            if (winLose === "win") {
                winGames++;
                winMoney += 20;
            } else {
                loseGames++;
            }
            command = input[index];
            index++;
        }
        if (winGames > loseGames) {
            totalMoney += winMoney * 1.1;
            winDays++;
        } else {
            totalMoney += winMoney;
            loseDays++;
        }
    }
    if (winDays > loseDays) {
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }

}
tournamentOfChristmas([2,
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"]);
