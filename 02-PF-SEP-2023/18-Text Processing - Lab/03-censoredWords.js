function censoredWords(text, word) {
    let censoredWord = '*'.repeat(word.length);
    let censored = text;

    while(censored.includes(word)) {
        censored = censored.replace(word, censoredWord)
    }
    console.log(censored);
}
censoredWords('A small sentence with some words', 'small');
console.log('===============');
censoredWords('Find the hidden word', 'hidden');
