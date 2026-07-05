function ticTacToe(arr) {
    let initDashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]
    
    let isFirstPlayer = true;

    for (let move of arr) {
        let [x, y] = move.split(' ');

        if (initDashboard[x][y]) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        let marker = isFirstPlayer ? 'X' : 'O'

        initDashboard[x][y] = marker;

        if (checkWin(initDashboard, marker)) {
            console.log(`Player ${marker} wins!`);
            return printDashboard(initDashboard);
        }

        if (!checkFreeSpace(initDashboard)) {
            console.log("The game ended! Nobody wins :(");
            return printDashboard(initDashboard);
        }

        isFirstPlayer = !isFirstPlayer;
    }

    function printDashboard(dashboard) {
        dashboard.forEach(row => {
            console.log(row.join('\t'));
        });
    }

    function checkFreeSpace(dashboard) {
        return !!dashboard.flat().filter(x => !x).length;
    }

    function checkWin(dashboard, marker) {
        for (let i = 0; i < dashboard.length; i++) {
            if (dashboard[i][0] == marker &&
                dashboard[i][1] == marker &&
                dashboard[i][2] == marker) {
                return true;
            } else if (
                dashboard[0][i] == marker &&
                dashboard[1][i] == marker &&
                dashboard[2][i] == marker) {
                return true;
            } else if (
                dashboard[0][0] == marker &&
                dashboard[1][1] == marker &&
                dashboard[2][2] == marker) {
                return true;
            } else if (
                dashboard[0][2] == marker &&
                dashboard[1][1] == marker &&
                dashboard[2][0] == marker) {
                return true;
            }
        }
    }
}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);
console.log('===========');
ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);
console.log('===========');
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);