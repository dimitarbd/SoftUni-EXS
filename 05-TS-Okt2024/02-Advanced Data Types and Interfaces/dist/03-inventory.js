function inventory(arr) {
    let sortedArr = [];
    for (let i = 0; i < arr.length; i++) {
        let level = arr[i].split(' / ');
        sortedArr.push(level[1]);
    }
    sortedArr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        let [name, level, items] = arr[i].split(' / ');
        for (let j = 0; j < sortedArr.length; j++) {
            if (level == sortedArr[j]) {
                let register = {
                    Hero: name,
                    level: Number(level),
                    items: items
                };
                sortedArr[j] = register;
                break;
            }
        }
    }
    for (let hero of sortedArr) {
        let keys = Object.keys(hero);
        for (let key of keys) {
            if (key == 'Hero') {
                console.log(`${key}: ${hero[key]}`);
            }
            else {
                console.log(`${key} => ${hero[key]}`);
            }
        }
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);
