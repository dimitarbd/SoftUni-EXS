function schoolGrades(arr) {
    let grades = {};

    for (let curr of arr) {
        let currentStudent = curr.split(' ');
        let studentName = currentStudent.shift();
        let grade = currentStudent.map(Number);

        grades.hasOwnProperty(studentName) ? grades[studentName].push(...grade) : grades[studentName] = grade;
        
    }
   let sorted = Object.entries(grades).sort((a, b) =>  a[0].localeCompare(b[0]));
   for (let [name, grade] of sorted) {
    let average = grade.reduce((a, b) => a + b, 0) / grade.length;
    console.log(`${name}: ${average.toFixed(2)}`);
   }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
console.log('---------------');
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);