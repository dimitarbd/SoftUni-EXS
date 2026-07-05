function tennisRanklist(input) {
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let stage = input[2];
    let finalPoints = 0;
    let winnings = 0;

    for (i = 2; i < input.length; i++) {
        let currentNumber = input[i];
        switch (currentNumber) {
            case "W":
                finalPoints += 2000;
                break;
            case "F":
                finalPoints += 1200;
                break;
            case "SF":
                finalPoints += 720;
                break;
        }
    }

    for (i = 2; i < input.length; i++) {
        let currentNumber = input[i];
        switch (currentNumber) {
            case "W":
                winnings++;
                break;
        }
    }

    let averagePoints = finalPoints / tournaments;

    console.log(`Final points: ${finalPoints + startingPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`)
    console.log(`${(winnings / tournaments *100).toFixed(2)}%`)


}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"]);