function careOfPuppy(input) {
    let foodKilo = Number(input[0]);
    let foodGram = foodKilo * 1000;
    let foodForPuppy = 0;

    let index = 1;
    let command = input[index];
    index++;

    while (command !== "Adopted") {
        let dailyFood = Number(command);
        foodForPuppy += dailyFood;

        command = input[index];
        index++;
    }
    let diff = Math.abs(foodGram - foodForPuppy);

    if (foodGram >= foodForPuppy) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`)
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`)
    }
    
}
careOfPuppy([4,
    130,
    345,
    400,
    180,
    230,
    120,
    "Adopted"]);