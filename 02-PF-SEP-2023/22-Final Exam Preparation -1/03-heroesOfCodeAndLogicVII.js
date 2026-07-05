function heroes(input) {
    let heroes = Number(input.shift());

    let heroesGame = {};

    for (let i = 0; i < heroes; i++) {
        let [name, hit, mana] = input.shift().split(' ')
        hit = Number(hit);
        mana = Number(mana);

        let heroesPower = { hit, mana };
        heroesGame[name] = heroesPower;
        console.log(heroesGame);
    }

    let command = input.shift();

    while (command != 'End') {
        command = command.split(' - ')
        let [action, currName, mpNeeded, spell] = command;
        mpNeeded = Number(mpNeeded);

        switch (action) {
            case 'CastSpell':
            if (currName in heroesGame) {
                if (mpNeeded <= heroesGame[currName][1]) {
                    heroesGame[currName][mana] -= mpNeeded;
                    console.log(`${heroesGame[name]} has successfully cast ${spell} and now has ${heroesGame[name][mana]} MP!`);
                } else {
                    console.log(`${heroesGame[name]} does not have enough MP to cast ${spell}!`);
                }
            }
            break;
            case 'TakeDamage':

            break;
            case 'Recharge':

            break;
            case 'Heal':

            break;
        }

        command = input.shift();
    }
}
heroes(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    // 'Heal - Solmyr - 10',
    // 'Recharge - Solmyr - 50',
    // 'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);
console.log('=============');
heroes(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']);

