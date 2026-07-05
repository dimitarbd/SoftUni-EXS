function addressBook(arr) {
    let addressBook = {};

    for (let item of arr) {
        let [name, address] = item.split(':');
        addressBook[name] = address;
    }

    Object.keys(addressBook).sort((a,b) => a.localeCompare(b)).forEach ((key) => {
        console.log(`${key} -> ${addressBook[key]}`);
    })
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);
// addressBook(['Bob:Huxley Rd',
// 'John:Milwaukee Crossing',
// 'Peter:Fordem Ave',
// 'Bob:Redwing Ave',
// 'George:Mesta Crossing',
// 'Ted:Gateway Way',
// 'Bill:Gateway Way',
// 'John:Grover Rd',
// 'Peter:Huxley Rd',
// 'Jeff:Gateway Way',
// 'Jeff:Huxley Rd']);