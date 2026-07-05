function houseParty(arr) {
    let list = [];

    for (let current of arr) {
        let currentStr = current.split(' ');
        if (currentStr.length == 3) {
            if (!list.includes(currentStr[0])) {
                list.push(currentStr[0])
            } else {
                console.log(`${currentStr[0]} is already in the list!`);
            }
        } else {
            if (list.includes(currentStr[0])) {
                let index = list.indexOf(currentStr[0]);
                list.splice(index, 1)
            } else {
                console.log(`${currentStr[0]} is not in the list!`);
            }
        }
    }

    console.log(list.join('\n'));
    
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);