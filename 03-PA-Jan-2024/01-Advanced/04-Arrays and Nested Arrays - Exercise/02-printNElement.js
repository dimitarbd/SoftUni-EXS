function printNElement(arr, n) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += n) {
        newArr.push(arr[i])
    }
    return newArr;
}
printNElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2);
console.log('=============');
printNElement(['dsa',
    'asd',
    'test',
    'tset'],
    2);
console.log('=============');
printNElement(['1',
    '2',
    '3',
    '4',
    '5'],
    6);