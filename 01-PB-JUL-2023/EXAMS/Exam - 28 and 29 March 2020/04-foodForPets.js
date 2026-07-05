function foodForPets(input) {
    let days = Number(input[0]);
    let totalFood = Number(input[1])

    let index = 2;
    let command = Number(input[index]);
    index++;

    let dogFood = 0;
    let catFood = 0;
    let cookies = 0;

    for (let i = 1; i <= days; i++) {
        let dailyFood = Number(command);

        for (let k = 1; k <= 2; k++) {
            dailyFood = Number(command);

            if (i % 3 == 0) {
                cookies += dailyFood * 0.1;
            }

            if (k == 1) {
                dogFood += dailyFood;
            } else {
                catFood += dailyFood;
            }
            command = input[index];
            index++;
        }
    }
    let totalEatenFood = dogFood + catFood;
    console.log(`Total eaten biscuits: ${Math.round(cookies)}gr.`);
    console.log(`${(totalEatenFood / totalFood * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(dogFood / totalEatenFood * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(catFood / totalEatenFood * 100).toFixed(2)}% eaten from the cat.`);

}
foodForPets([3,
    1000,
    300,
    20,
    100,
    30,
    110,
    40]);