function netherRealms(str) {
    
    let healthPattern = /[^\d+\-*\/\.]/g;

    let demons = str.split(',').map(x => x.trim());


    console.log(demons);

}
netherRealms('M3ph-0.5s-0.5t0.0**');
console.log('================');
netherRealms('   M3ph1st0**    ,  Azazel');
console.log('================');
netherRealms('Gos/ho');