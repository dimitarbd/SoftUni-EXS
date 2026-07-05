function mirrorWords(arr) {
    let storage = {};
    let pattern = /([@|#])(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/g;
    let counter = 0;
    let match = pattern.exec(arr);

    while (match != null) {
        counter++;
        let { first, second } = match.groups;
        let reversedSecond = second.split('').reverse().join('')
        if (first == reversedSecond) {
            storage[first] = second;
        }

        match = pattern.exec(arr);
    }

    let mirrorW = Object.entries(storage);
    let mirrorPrint = []

    if (counter > 0 && mirrorW.length > 0) {
        console.log(`${counter} word pairs found!`);
        console.log('The mirror words are:');
        mirrorW.forEach((x) => {
            mirrorPrint.push(`${x[0]} <=> ${x[1]}`)
        });
        console.log(mirrorPrint.join(', '));
    } else if (counter > 0 && mirrorW.length == 0) {
        console.log(`${counter} word pairs found!`);
        console.log('No mirror words!');
    } else {
        console.log(`No word pairs found!`);
        console.log('No mirror words!');
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
console.log('===============');
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log('===============');
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);