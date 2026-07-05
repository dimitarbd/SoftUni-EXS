function newHouse(input) {
    let flower = input[0];
    let quantity = Number(input[1]);
    let budjet = Number(input[2]);
    let money = 0;

    if (flower == "Roses") {
        if (quantity > 80) {
            money = quantity * 5 * 0.9;
        } else {
            money = quantity * 5;
        }
    } else if (flower == "Dahlias") {
        if (quantity > 90) {
            money = quantity * 3.8 * 0.85;
        } else {
            money = quantity * 3.8;
        }
    } else if (flower == "Tulips") {
        if (quantity > 80) {
            money = quantity * 2.8 * 0.85;
        } else {
            money = quantity * 2.8;
        }
    } else if (flower == "Narcissus") {
        if (quantity < 120) {
            money = quantity * 3 * 1.15;
        } else {
            money = quantity * 3;
        }
    } else if (flower == "Gladiolus") {
        if (quantity < 80) {
            money = quantity * 2.5 * 1.2;
        } else {
            money = quantity * 2.5;
        }
    }

    let diff = Math.abs(budjet - money);
    if (budjet >= money) {
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${diff.toFixed(2)} leva left.`)
    } else if (budjet < money) {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }
}
newHouse(["Roses",
"55",
"250"]);