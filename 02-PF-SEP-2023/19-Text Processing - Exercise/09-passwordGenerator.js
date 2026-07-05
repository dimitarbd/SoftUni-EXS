function passwordGenerator(arr) {
    let [str1, str2, replStr] = arr;
    let concatedStr = str1 + str2;

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let index = 0;

    for (let char of concatedStr) {
        if (vowels.includes(char)) {
            concatedStr = concatedStr.replace(char, replStr[index].toUpperCase());
            index++;
            if (index == replStr.length) {
                index = 0;
            }
        }
    }

    let password = concatedStr.split('').reverse().join('')
    console.log(`Your generated password is ${password}`);
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]);
console.log('==================');
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]);