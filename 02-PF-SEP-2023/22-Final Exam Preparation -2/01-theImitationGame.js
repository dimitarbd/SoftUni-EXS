function theImitationGame(arr) {
    let msg = arr.shift();
    
    while(arr[0] != 'Decode') {
        let tokens = arr.shift().split('|');
        let command = tokens[0];
        
        switch(command) {
            case 'Move':
            let n = Number(tokens[1]);
            let firstN = msg.slice(0, n);
            let secondN = msg.slice(n);
            msg = secondN + firstN;
            break;
            case 'Insert':
                let idx = Number(tokens[1]);
                let value = tokens[2];
                let firstHalf = msg.slice(0, idx);
                let secondHalf = msg.slice(idx);
                msg = firstHalf + value + secondHalf;
            break;
            case 'ChangeAll':
                let sub = tokens[1];
                let repl = tokens[2];
                let parts = msg.split(sub);
                msg = parts.join(repl);
            break;
        }
       
    }
    console.log(`The decrypted message is: ${msg}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]);
console.log('==============');
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]);