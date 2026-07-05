function gameShop(input) {
    let numberGames = Number(input[0]);
    let countHeart = 0;
    let countFornite = 0;
    let countOverwatch = 0;
    let countOthers = 0;

    for (let i = 1; i < input.length; i++) {
        let comand = input[i];
        switch (comand) {
            case "Hearthstone":
                countHeart++;
                break;
            case "Fornite":
                countFornite++;
                break;
            case "Overwatch":
                countOverwatch++;
                break;
            default:
                countOthers++;
                break;
        };
    }
    console.log(`Hearthstone - ${(countHeart / numberGames * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(countFornite / numberGames * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(countOverwatch / numberGames * 100).toFixed(2)}%`);
    console.log(`Others - ${(countOthers / numberGames * 100).toFixed(2)}%`);
}
gameShop([4,
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"]);