function cutAndReverse(str) {
    let middleIndex = str.length / 2;

    let leftHalf = str.substring(0, middleIndex).split('').reverse().join('');
    let rightHalf = str.substring(middleIndex).split('').reverse().join('');

    console.log(leftHalf);
    console.log(rightHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('=================');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');