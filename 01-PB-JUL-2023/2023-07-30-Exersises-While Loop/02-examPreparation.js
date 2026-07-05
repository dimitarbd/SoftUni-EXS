function examPreparation(input) {
    let index = 0;
    let badGrade = input[index];
    index++;

    let score = 0;
    let numberOfProblems = 0;
    let badGradeProblems = 0;
    let lastTask = "";
    let hasBadGrade = false;

    while (badGrade > badGradeProblems) {
        let command = input[index];

        if (index % 2 !== 0) {
            numberOfProblems++;
            lastTask = input[index-2];
        } else if (index % 2 === 0) {
            score += Number(command);
            if (Number(command) <= 4) {
                badGradeProblems++;
            }
        }
        if (command === "Enough") {
            console.log(`Average score: ${(score / (numberOfProblems - 1)).toFixed(2)}`);
            console.log(`Number of problems: ${(numberOfProblems - 1)}`);
            console.log(`Last problem: ${lastTask}`);
            hasBadGrade = true;
            break;
        }
        command = input[index];
        index++;
    }

    if (!hasBadGrade) {
        console.log(`You need a break, ${badGradeProblems} poor grades.`);
    }

}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);