function thePianist(arr) {
    let n = Number(arr.shift());
    let list = {};

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = arr.shift().split('|');

        list[piece] = { composer, key };
    }


    while (arr[0] != "Stop") {
        let tokens = arr.shift().split('|');
        let action = tokens[0];
        let piece = tokens[1]

        switch (action) {
            case 'Add':
                let composer = tokens[2];
                let key = tokens[3];

                if (piece in list) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    list[piece] = { composer, key };
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }
                break;
            case 'Remove':
                if (piece in list) {
                    delete list[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':

                if (piece in list) {
                    list[piece].key = tokens[2];
                    console.log(`Changed the key of ${piece} to ${tokens[2]}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }

    }

    let entries = Object.entries(list);

    entries.forEach(([piece, stats]) => {
        console.log(`${piece} -> Composer: ${stats.composer}, Key: ${stats.key}`);
    });

}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
console.log('=================');
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);