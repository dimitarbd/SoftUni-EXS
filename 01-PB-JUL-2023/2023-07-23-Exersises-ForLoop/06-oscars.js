function oscars(input) {
    let actorsName = input[0];
    let academyPoints = Number(input[1]);
  

    for (let i = 3; i < input.length; i++) {

        let judgeName = input[i];
        i++
        let judgePoints = Number(input[i]);
        let currentPoints = judgeName.length * judgePoints / 2;
        
        academyPoints += currentPoints;

        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }
    if (academyPoints <= 1250.5) {
        console.log(`Sorry, ${actorsName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`)
    }
   
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"]);