function solve(input) {
    let string = input.shift();

    let coolPattern = /[0-9]/g;
    let emojiPattern = /([:]{2}|[*]{2})([A-Z][a-z]{2,})\1/g;

    let coolTotal = 1;
    let counter = 0;

    let coolMatches = string.matchAll(coolPattern);

    for (let num of coolMatches) {
        let digit = Number(num[0]);
        coolTotal *= digit;
    }
    console.log(`Cool threshold: ${coolTotal}`);

    let emojiMatches = string.matchAll(emojiPattern);
    let emojiArr = [];

    for (let emoji of emojiMatches) {
        let currEmoji = emoji[0];
        let currEmojiSum = 0;
        counter++;

        for (i = 2; i < currEmoji.length - 1; i++) {
            currEmojiSum += currEmoji.charCodeAt(i);
        }
        if (currEmojiSum >= coolTotal) {
            emojiArr.push(currEmoji);
        }
    }

    console.log(`${counter} emojis found in the text. The cool ones are:`);
    emojiArr.forEach(x => console.log(x));

}
solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log('=================');
solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);