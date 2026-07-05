function train(input) {
    let wagons = input[0].split(' ').map(Number);
    let capacity = Number(input[1]);

    let index = 2;

    while (input.length > index) {
        let current = input[index].split(' ');

        if (current[0] == 'Add') {
            wagons.push(Number(current[1]));
        } else {
            for (let i = 0; i< wagons.length; i++) {
                let currentNum = Number(current[0]) + Number(wagons[i]);
                if (currentNum <= capacity) {
                    wagons.splice(i, 1, currentNum);
                    break;
                } 
            }
        }
    
        index++;

    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);