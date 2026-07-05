function piccolo(arr) {
    let parking = {};

    for (let car of arr) {
        let [direction, carNumber] = car.split(', ');
        if (direction == 'OUT') {
            delete parking[carNumber];
        } else {
            parking[carNumber] = carNumber;
        }
    }

    if (Object.keys(parking).length == 0) {
        console.log('Parking Lot is Empty');
    } else {
        Object.keys(parking).sort((a, b) => a - b || a.localeCompare(b)).forEach((key) => {
            console.log(key);
        })
    };
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);
console.log('=============');
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);