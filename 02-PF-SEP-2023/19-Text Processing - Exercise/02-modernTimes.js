function modernTimes(str) {
    str.split(' ').forEach(el => {
        if(el[0] == '#' && el.length > 1) {
            el = el.slice(1);
            let isValid = true;
            for (let char of el) {
                let letter = char.charCodeAt()
                if (letter < 65 || letter > 90 && letter < 97 || letter > 122) {
                    isValid = false;
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
