function destinationMapper(str) {
    let pattern = /([=\/])([A-Z]{1}[A-Za-z]{2,})\1/g;

    let travelPoints = 0;
    let places = [];

    let matches = str.matchAll(pattern);

    for (let match of matches) {
            places.push(match[2]);
            travelPoints += match[2].length;                  
    }

let dest = places.join(', ');

console.log(`Destinations: ${dest}`);
console.log(`Travel Points: ${travelPoints}`);

}
destinationMapper("=Haa=/Cyprus/=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log('=============================');
destinationMapper("ThisIs some InvalidInput=Hawai=/Cyprrrus/=Hawai=/Cyprus/");