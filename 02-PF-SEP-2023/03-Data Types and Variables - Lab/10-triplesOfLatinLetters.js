function triplesOfLatinLetters(n) {
    let abs = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < n; i++) {
        let a = abs[i];
        for (let j = 0; j < n; j++) {
            let b = abs[j];
            for (let k = 0; k < n; k++) {
                let c = abs[k];
                console.log(`${a}${b}${c}`); 
            }
        }
    }

}
triplesOfLatinLetters('3');