function modernTimes(str) {
    str.split(' ').forEach(el => {
        if(el[0] == '#' && el.length > 1) {
            el = el.slice(1);
            let isValid = true;
            for (let char of el) {
                if (!/[A-Za-z]/.test(char)) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                console.log(el);
            }
        }
    });
}
modernTimes('Nowadays everyone uses # to tag a #spe1ci1al word in #socialMedia');
console.log('=================');
modernTimes('The symbol # is known #vario:usly in English-speaking #regions as the #number sign');
