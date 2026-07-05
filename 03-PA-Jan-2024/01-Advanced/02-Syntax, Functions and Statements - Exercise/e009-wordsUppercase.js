function wordsUppercase(input) {
    let pattern =  
    input.split(/[^a-zA-Z0-9]+/)
    .join(' ')
    .trim()
    .split(' ')
    .map(x => x.toUpperCase())
    .join(', ');
    console.log(pattern);
}

wordsUppercase('Hi, how are you?');
console.log('=============');
wordsUppercase('hello');
