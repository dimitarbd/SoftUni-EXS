function salary(input) {
    let browsers = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let currentBrowser = input[i];
        if (currentBrowser == "Facebook") {
            salary -= 150;
        } else if (currentBrowser == "Instagram") {
            salary -= 100;
        } else if (currentBrowser == "Reddit") {
            salary -= 50;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.")
            break;
        }
    }
    if (salary > 0) {
        console.log(salary);
    }
}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"]);