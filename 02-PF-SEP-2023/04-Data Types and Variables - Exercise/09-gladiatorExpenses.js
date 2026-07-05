function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmet = 0;
    let sword = 0;
    let shield = 0;
    let armor = 0;

    for (let i = 1; i <= lostFights; i++) {
        let breaks = 0;
        if (i % 2 == 0) {
            helmet++;
            breaks++;
        }
        if (i % 3 == 0) {
            sword++;
            breaks++;
        }
        if (breaks == 2) {
            shield++;
            if (shield > 0 && shield % 2 == 0) {
                armor++;
            }
        }
    }

    // helmet = Math.floor(lostFights/2);
    // sword = Math.floor(lostFights/3);
    // shield = Math.floor(lostFights/6);
    // armor = Math.floor(lostFights/12);
    
    let result = helmet * helmetPrice + sword * swordPrice + shield * shieldPrice + armor * armorPrice;
    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);

}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200);
gladiatorExpenses(7,
    2,
    3,
    4,
    5);
