function login(input) {
    let username = input[0];
    let password = '';
    for (let i = username.length - 1; i >= 0; i--) {
        password += `${username[i]}`;
    }
    let counter = 0;
    let index = 1;
    let command = input[index];
    index++;

    while (command != password) {
        counter++;
        if (counter == 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        if (command != password) {
            console.log("Incorrect password. Try again.");
        }
        command = input[index];
        index++;
    }

    console.log(`User ${username} logged in.`);

}
login(['Acer', 'login', 'go', 'let me in', 'recA']);