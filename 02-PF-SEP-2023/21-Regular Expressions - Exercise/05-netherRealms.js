function netherRealms(input) {
    let demons = [];
    input.split(/[, ]+/).forEach(demon => {
        let [health, damage, damageArray] = [0, 0, 0];
        if (damageArray = demon.match(/[\+-]*\d+[.\d+]*/g)) {
            damage = damageArray.map(Number).reduce((acc, val) => acc + val);
        }
        Array.from(demon).forEach(symbol => {
            if (/[^\d+*/\-.]/.test(symbol)) health += symbol.charCodeAt();
            if (symbol == '*') damage *= 2;
            else if (symbol == '/') damage /= 2;
        });
        demons.push([demon, { health, damage }])
    });
    demons.sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(demon => console.log(`${demon[0]} - ${demon[1].health} health, ${demon[1].damage.toFixed(2)} damage`))
}
netherRealms('M3ph-0.5s-0.5t0.0**');
console.log('================');
netherRealms('M3ph1st0**, Azazel');
console.log('================');
netherRealms('Gos/ho');