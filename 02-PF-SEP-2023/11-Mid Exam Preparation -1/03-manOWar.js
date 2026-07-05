function manOWar(arr) {
    let pirateShip = arr.shift().split('>').map(Number);
    let warShip = arr.shift().split('>').map(Number);
    let maxHealth = Number(arr.shift());

    for (let current of arr) {
        let tokens = current.split(' ');
        let command = tokens.shift();
        let index = Number(tokens.shift());
        let amount = Number(tokens.shift());
        let amount2 = Number(tokens.shift());

        if (command == 'Retire') {
            break;
        } else if (command == 'Fire') {
            if (index < 0 || index >= warShip.length) {
                continue;
            }
            warShip[index] -= amount;
            if (warShip[index] <= 0) {
                console.log('You won! The enemy ship has sunken.');
                return;
            }
        } else if (command == 'Defend') {
            if (index < 0 || index >= pirateShip.length || amount < 0 || amount >= pirateShip.length) {
                continue;
            }
            
            for (let i = index; i <= amount; i++) {
                pirateShip[i] -= amount2;
                if (pirateShip[index] <= 0) {
                    console.log('You lost! The pirate ship has sunken.');
                    return;
                }
            };
        } else if (command == 'Repair') {
            if (index < 0 || index >= pirateShip.length) {
                continue;
            }
            if (pirateShip[index] + amount > maxHealth) {
                amount = maxHealth - pirateShip[index];
            }
            pirateShip[index] += Number(amount);
        } else if (command == 'Status') {
            let count = 0;
            let lowerThan20 = maxHealth * 0.2;
            for (let sections of pirateShip) {
                if (sections < lowerThan20) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
        }
    }
    let pirateShipSum = 0;
    let warShipSum = 0;

    for (let num of pirateShip) {
        pirateShipSum += num;
    }
    for (let num of warShip) {
        warShipSum += Number(num);
    }

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);

}
// manOWar(["12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"]);
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);