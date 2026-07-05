function ladybugs(arr) {
    let fieldSize = arr[0];
    let ladybugIdxs = arr[1].split(' ').map(Number);
    let field = [];

    for (let i = 0; i < fieldSize; i++) {
        if (ladybugIdxs.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    for (let j = 2; j < arr.length; j++) {
        let command = arr[j];
        let tokens = command.split(' ');

        let ladybugIdx = Number(tokens[0]);
        let direction = tokens[1];
        let flyLength = Number(tokens[2]);

        if (!field[ladybugIdx]) {
            continue;
        }

        field[ladybugIdx] = 0;

        if (direction == 'left') {
            let newIdx = ladybugIdx - flyLength;
            if (newIdx >= 0) {
                while (field[newIdx] == 1) {
                    newIdx -= flyLength;
                }
                if (newIdx >= 0)
                    field[newIdx] = 1;
            }
        } else {
            let newIdx = ladybugIdx + flyLength;
            if (newIdx < field.length) {
                while (field[newIdx] == 1) {
                    newIdx += flyLength;
                }
                if (newIdx < field.length)
                    field[newIdx] = 1;
            }
        }
    }

    console.log(field.join(' '));

}
ladybugs([3, '0 1',
    '0 right 1',
    '2 right 1']);
console.log('==============');
ladybugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']);
console.log('==============');
ladybugs([5, '3',
    '3 left 2',
    '1 left -2']);