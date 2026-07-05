function passwordValidator(pass) {
    let isValidLength = checkPassLength(pass);
    let isOnlyLetterDigits = checkLettersDigits(pass);
    let isMin2Digits = checkDigits(pass);

    if (isValidLength && isOnlyLetterDigits && isMin2Digits) {
        console.log("Password is valid");
    }

    function checkPassLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkLettersDigits(pass) {

        for (let char of pass) {
            let code = char.charCodeAt(0);
            if (
                !((code >= 48 && code <= 57) ||
                (code >= 65 && code <= 90) ||
                (code >= 97 && code <=122))
            ) {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }
        return true;
    }

    function checkDigits(pass) {
        let diggits = 0;
        for (let char of pass) {
            let code = char.charCodeAt(0);
            if(code >= 48 && code <= 57) {
                diggits++;
            }
        }
        if (diggits < 2) {
            console.log('Password must have at least 2 digits');
            return false;
        } else {
            return true;
        }
    }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');