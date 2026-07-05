function addRemoveElements(arr) {
    let array = [];
    let i = 1;

    for (let tokens of arr) {
        if (tokens == 'add') {
            array.push(i);
        } else {
            array.pop();
        };
        i++;
    }

    if (array.length == 0) {
        console.log("Empty");
    } else {
        console.log(array.join("\n"));
    }
}
addRemoveElements(['add',
    'add',
    'add',
    'add']);
console.log('===============');
addRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']);
console.log('===============');
addRemoveElements(['remove',
    'remove',
    'remove']);
