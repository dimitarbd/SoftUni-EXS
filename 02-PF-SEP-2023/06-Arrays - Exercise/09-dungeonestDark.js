function dungeonestDark(arr) {
    let initialHealth = 100;
    let initialCoins = 0;
    let roomsInfo = arr[0];
    let rooms = roomsInfo.split('|');
    let bestRoom = 1;

    for (let room of rooms) {
        let currentRoom = room.split(' ');
        let command = currentRoom[0];
        let num = Number(currentRoom[1]);

        if (command == 'potion') {
            let newHP = initialHealth + num <= 100 ? num : 100 - initialHealth;
            initialHealth += newHP;
            
            console.log(`You healed for ${newHP} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);

        } else if (command == 'chest') {
            initialCoins += num;
            console.log(`You found ${num} coins.`);
        } else {
            initialHealth -= num;
            if (initialHealth > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
        bestRoom++;
    }
 if (initialHealth > 0) {
    console.log("You've made it!");
    console.log(`Coins: ${initialCoins}`);
    console.log(`Health: ${initialHealth}`);
 }
}
// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);