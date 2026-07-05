function timeExam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExam = hourExam * 60 + minExam;
    let timeArrive = hourArrive * 60 + minArrive;

    let diff = Math.abs(timeExam - timeArrive);
    let hh = Math.floor(diff / 60);
    let min = diff % 60;

    if (timeExam > timeArrive && diff > 30) {
        console.log("Early");
        if (hh > 0) {
            if (min < 10) {
                console.log(`${hh}:0${min} hours before the start`)
            } else {
                console.log(`${hh}:${min} hours before the start`)
            }
        } else {
            console.log(`${min} minutes before the start`)
        }

    } else if (timeExam >= timeArrive) {
        console.log("On time")
        if (diff != 0) {
            console.log(`${min} minutes before the start`);
        }

    } else {
        console.log("Late");

        if (hh > 0) {
            if (min < 10) {
                console.log(`${hh}:0${min} hours after the start`);
            } else {
                console.log(`${hh}:${min} hours after the start`);
            }

        } else {
            console.log(`${min} minutes after the start`)
        }
    }
}

timeExam(["11",
    "30",
    "10",
    "55"]);