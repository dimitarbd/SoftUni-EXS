function oddOccurrences(str) {
    let elements = str.split(' ');
    let map = new Map();
    
    for (let occ of elements) {
        occ = occ.toLowerCase();
        if (!map.has(occ)) {
            map.set(occ, +1);
        } else {
            let counter = map.get(occ);
            let newCounter = counter +1;
            map.set(occ, newCounter)
        }
    }

let newArray =[];
Array.from(map).filter((a) => a[1] % 2 !== 0).forEach((arr) => newArray.push(arr[0]))

console.log(newArray.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log('==========');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');