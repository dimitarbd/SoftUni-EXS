function catDiet(input) {
    let fat = Number(input[0]);
    let protein = Number(input[1]);
    let carbohydrates = Number(input[2]);
    let calories = Number(input[3]);
    let waterConsist = Number(input[4]);

    let totalFat = (fat / 100 * calories) / 9;
    let totalProtein = (protein / 100 * calories) / 4;
    let totalCatbonhydrates = (carbohydrates / 100 * calories) / 4;

    let weight = totalFat + totalProtein + totalCatbonhydrates;
    let caloriesPerGram = calories / weight;

    let totalGrams = caloriesPerGram * ((100 - waterConsist) / 100);

    console.log(totalGrams.toFixed(4));

}
catDiet([40,
    40,
    20,
    3000,
    40]);