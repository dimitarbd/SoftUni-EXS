function fruit(fruit, weightGrams, price) {
    let weightKg = weightGrams / 1000;
    let money = weightKg * price;

    console.log(`I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80);
console.log('=================');
fruit('apple', 1563, 2.35);