function repeatString(string, n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        str += `${string}`;
    }
    return str;
}
repeatString("abc", 3);
repeatString("String", 2);
