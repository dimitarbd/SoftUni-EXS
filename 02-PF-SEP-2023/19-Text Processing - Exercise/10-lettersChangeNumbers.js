function lettersChangeNumbers(str) {
    let sum = 0;
    str = str.split(' ').filter(x => x.length > 0).forEach(x => {
        let number = Number(x.split(/[A-Za-z]/).filter(x => x.length > 0));
        let [l1, l2] = x.split(/[0-9]/).filter(x => x.length > 0);
        
        if (l1.charCodeAt(0) >= 65 && l1.charCodeAt(0) <= 90) {
            sum += number / (l1.charCodeAt(0) - 64);
        } else if (l1.charCodeAt(0) >= 97 && l1.charCodeAt(0) <= 122) {
            sum += number * (l1.charCodeAt(0) - 96);
        }

        if (l2.charCodeAt(0) >= 65 && l2.charCodeAt(0) <= 90) {
            sum -= l2.charCodeAt(0) - 64;
        } else if (l2.charCodeAt(0) >= 97 && l2.charCodeAt(0) <= 122) {
            sum += l2.charCodeAt(0) - 96;
        }
          
    });;

   console.log(sum.toFixed(2));
}
lettersChangeNumbers('A12b s17G');
console.log('===============');
lettersChangeNumbers('P34562Z q2576f   H456z');
console.log('===============');
lettersChangeNumbers('a1A');