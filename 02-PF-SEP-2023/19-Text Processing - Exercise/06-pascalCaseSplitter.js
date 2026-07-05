function pascalCaseSplitter(str) {
    let splitLowerCase = str.split(/[A-Z]/).filter(x => x.length > 0);
    let splitUpperCase = str.split(/[a-z0-9]/).filter(x => x.length > 0);
    let splitter = [];
    let temp = [];

    for (let i = 0; i < splitUpperCase.length; i++) {
        temp.push(splitUpperCase[i]);
        temp.push(splitLowerCase[i]);
        splitter.push(temp.join(''));
        temp = [];
    }
    // console.log(splitUpperCase);
    // console.log(splitLowerCase);
    console.log(splitter.join(', '));

}
pascalCaseSplitter('Split$5MMMMeIfYouCanHaHaYouCantOrYouCanU');
console.log('===============');
pascalCaseSplitter('HoldTheDoor');
console.log('===============');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');
console.log('===============');
pascalCaseSplitter('HoldT');

