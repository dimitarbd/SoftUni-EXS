function secretChat(input) {
    let concealedMessage = input.shift();
    // let counter = 0;
    let command = input.shift();

    while (command != 'Reveal') {
        let [action, index1, index2] = command.split(':|:')

        switch (action) {
            case 'InsertSpace':
                let message = concealedMessage.split('')
                message.splice(index1, 0, ' ')
                concealedMessage = message.join(''); 
                break;
            case 'Reverse':
                let firstIndex = concealedMessage.indexOf(index1);
                if (firstIndex == -1) {
                    console.log('error');
                    command = input.shift();
                    continue;
                }
                let leftHalf = concealedMessage.slice(0, firstIndex);
                let rigthHalf = concealedMessage.slice(firstIndex + index1.length);
                
                concealedMessage = leftHalf + rigthHalf + index1.split('').reverse().join('');
                
                break;
                
            case 'ChangeAll':
                while (concealedMessage.includes(index1)) {
                    concealedMessage = concealedMessage.replace(index1, index2);
                }

                break;
        }

        console.log(concealedMessage);

        command = input.shift();
    }

    console.log(`You have a new text message: ${concealedMessage}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
console.log('==============');
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])
