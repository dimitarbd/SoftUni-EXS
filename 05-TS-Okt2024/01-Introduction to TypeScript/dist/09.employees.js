function employees(arr) {
    for (let curr of arr) {
        console.log(`Name: ${curr} -- Personal Number: ${curr.length}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);
