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

    for (let newGuest of arr) {

        for (let i = 0; i < guestList.length; i++) {
            let guest = guestList[i];
            if (newGuest == guest) {
                guestList.splice(i, 1);
                break;
            }
        }

    }

    guestList = guestList.sort((a, b) => a - b || b.localeCompare(a));

    console.log(guestList.length);
    for (let guest of guestList) {
        console.log(guest);;
    }

}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    '9NoBUajQ',
    'Ce8vwPmE',
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