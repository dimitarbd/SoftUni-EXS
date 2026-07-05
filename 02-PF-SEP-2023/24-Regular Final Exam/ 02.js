function solve(input) {
    let n = Number(input.shift());

    let pattern = /([|][A-Z]{4,}[|]):([#][A-Za-z]+\s[A-Za-z]+[#])/g;

    for (let i = 0; i < n; i++) {
        let str = input.shift();
        let match = str.match(pattern);
        if (match == null) {
            console.log('Access denied!');
        } else {
            let bossPattern = /[A-Z]{4,}/g;
            let titlePattern = /[A-Za-z]+\s[A-Za-z]+/g;
            let boss = str.match(bossPattern);
            let title = str.match(titlePattern);
            let bossName = boss.shift();
            let titleName = title.shift();

            console.log(`${bossName}, The ${titleName}`);
            console.log(`>> Strength: ${bossName.length}`);
            console.log(`>> Armor: ${titleName.length}`);
        }
    }
}
solve(['3', '|PETER|:#Lead architect#', '|GEORGE|:#High Overseer#', '|ALEX|:#Assistant Game Developer#']);
console.log('=================');
solve(['3',

    '|STEFAN|:#H1gh Overseer#',

    '|IVAN|:#Master detective#',

    '|KARL|: #Marketing lead#']);