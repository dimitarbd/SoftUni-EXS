function worldTour(arr) {
    let string = arr.shift();
    let command = arr.shift();

    while (command != "Travel") {
        let [action, idx1, idx2] = command.split(':')

        switch (action) {
            case 'Add Stop':
                if (idx1 >= 0 && idx1 < string.length) {
                    let firstHalf = string.slice(0, idx1);
                    let secondHalf = string.slice(idx1);
                    string = firstHalf + idx2 + secondHalf;
                }
                break;
            case 'Remove Stop':
                idx1 = Number(idx1);
                idx2 = Number(idx2);

                if (idx1 >= 0 && idx2 < string.length) {
                    let start = string.slice(0, idx1);
                    let middle = string.slice(idx1, idx2)
                    let end = string.slice(idx2+1);
                    string = start + end;
                }
                break;
            case 'Switch':
                if (string.includes(idx1)) {
                    let text = string.split(idx1)
                    string = text.join(idx2)
                }
                break;

        }
        console.log(string);

        command = arr.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${string}`);
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);
console.log('=======================');
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"]);