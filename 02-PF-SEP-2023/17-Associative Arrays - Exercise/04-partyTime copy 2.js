function partyTime(arr) {
    let partyList = {};
    let guestList = [];
    let command;

    while (guestList !== 'PARTY') {
        command = arr.shift();
        if (command == 'PARTY') {
            break;
        }
        guestList.push(command);
    }
    
    for (let guest of setGuestList) {
        partyList[guest] = guest;
    }
    for (let guest of arr) {
        delete partyList[guest];
    }

    console.log(`${Object.keys(partyList).length}`);
    Object.entries(partyList).sort((a, b) => a[0] - b[0]).forEach((key) => {
        console.log(`${key[0]}`);
    })

}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
console.log('==============');
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);