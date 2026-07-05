function exam(input) {
    let numStudents = Number(input[0]);
    let index = 1;
    let command = Number(input[index]);
    index++;

    let sumGrade = 0;
    let studentsTop = 0;
    let students400To499 = 0;
    let students300To399 = 0;
    let studentsFail = 0;

    for (let i = 0; i < numStudents; i++) {
        let grade = Number(command);
        sumGrade += grade;
        if (grade < 3) {
            studentsFail++;
        } else if (grade < 4) {
            students300To399++;            
        } else if (grade < 5) {
            students400To499++;
        } else {
            studentsTop++;
        }
        command =input[index];
        index++;
    }
    console.log(`Top students: ${(studentsTop/numStudents*100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(students400To499/numStudents*100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(students300To399/numStudents*100).toFixed(2)}%`);
    console.log(`Fail: ${(studentsFail/numStudents*100).toFixed(2)}%`);
    console.log(`Average: ${(sumGrade/numStudents).toFixed(2)}`);
}
exam([10,
    3.00,
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5]);