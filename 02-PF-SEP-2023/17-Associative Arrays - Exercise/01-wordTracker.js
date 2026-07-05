function wordTracker(arr) {
    let words = {};
    let searchedWords = arr.shift().split(' ');

    for (let word of searchedWords) {
        words[word] = 0;
    }
    for (let word of arr) {
        if (word in words) {
            words[word]++;
        }
    }

   Object.entries(words).sort((a, b) => b[1] - a[1]).forEach((key) => {
        console.log(`${key[0]} - ${key[1]}`);
    }) 
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
console.log('--------------');
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);