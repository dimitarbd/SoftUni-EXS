function companyUsers(arr) {
    let companyEmployees = {};

    for(let currEmploye of arr) {
        let [company, employeId] = currEmploye.split(' -> ');

        if (company in companyEmployees) {
            if(!companyEmployees[company].includes(employeId)) {
                companyEmployees[company].push(employeId);
            }
        } else {
            companyEmployees[company] = [employeId];
        }
    }

    Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0])).forEach((key) => {
        console.log(key[0]);
        key[1].forEach(id => console.log(`-- ${id}`));
    })
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);
console.log('==========');
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);