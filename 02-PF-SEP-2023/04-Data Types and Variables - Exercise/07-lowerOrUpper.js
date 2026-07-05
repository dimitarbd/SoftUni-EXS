function lowerOrUpper(letter) {
    let code = letter.charCodeAt();
    
    if (code <= 90) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}
lowerOrUpper('L');