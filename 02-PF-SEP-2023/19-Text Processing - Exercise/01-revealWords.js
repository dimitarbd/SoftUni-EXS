function revealWords(words, text) {
    let word = words.split(', ');

    for (let param of word) {
        let curr = '*'.repeat(param.length)
        text = text.replace(curr, param)
    }

    console.log(text);
}
revealWords('great',
    'softuni is ***** place for learning new programming languages');
console.log('==============');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');
