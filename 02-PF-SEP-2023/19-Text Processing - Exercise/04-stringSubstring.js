function stringSubstring(word, text) {
    let newText = text.toLowerCase().split(' ');
    
    for (let item of newText) {
        if (item == word) {
            console.log(item);
            return;
        } 
    }

    console.log(`${word} not found!`);
}
stringSubstring('javascript',
'JavaScript is the best programming language');
console.log('=========================');
stringSubstring('python',
'JavaScript is the best programming language');
