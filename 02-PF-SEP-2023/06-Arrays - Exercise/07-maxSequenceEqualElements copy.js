function maxSequenceEqualElements(arr) {
    let maxSequence = [];

    for (let i = 0; i < arr.length; i++) {
        let maxTemp = arr[i];
        let current = [maxTemp]

        for (let j = i + 1; j < arr.length; j++) {
            let next = arr[j];
            
            if (maxTemp == next) {
                current.push(next);
            } else {
                break;
            }
        }
        if (current.length > maxSequence.length) {
            maxSequence = current;
        }
    }
    console.log(maxSequence.join(' '));
}
maxSequenceEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceEqualElements([4, 4, 4, 4]);
maxSequenceEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
