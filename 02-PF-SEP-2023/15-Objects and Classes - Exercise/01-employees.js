function employees(arr) {
    let employee = {};

for (let curr of arr) {
    employee.name = curr;
    employee.number = curr.length;

    console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
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
