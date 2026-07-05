function graduation(input) {

    let index = 0;
    let student = input[index];
    index++;

    let averigeGrade = 0;

    let level = 1;
    let badGrade = 0;
    let hasExcluded = false;

    while (level <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4) {
            badGrade++;
            if (badGrade === 2) {
                console.log(`${student} has been excluded at ${level} grade`);
                hasExcluded = true;
                break;
            }
            continue;
        }

        averigeGrade += grade;
        level++;

    }

    if (!hasExcluded) {
        console.log(`${student} graduated. Average grade: ${(averigeGrade / 12).toFixed(2)}`);
    }

}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]);