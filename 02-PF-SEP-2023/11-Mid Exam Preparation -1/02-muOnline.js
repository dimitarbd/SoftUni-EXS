function muOnline(input) {
    let arr = input.split('|');
    let health = 100;
    let bitcoins = 0;
    let counter = 0;

    for (let room of arr) {
        counter++;
        let [action, amount] = room.split(' ');
        let num = Number(amount);

        if (action == 'potion') {
            let initialHealth = health + num;
            if (initialHealth > 100) {
                num = 100 - health;
                health += num;
            } else {
                health += num;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (action == 'chest') {
            bitcoins += num;
            console.log(`You found ${amount} bitcoins.`);
        } else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${action}.`);
            } else {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${counter}`);
                return;
            }
        }

    }
    console.log('You\'ve made it!');
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
// muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");