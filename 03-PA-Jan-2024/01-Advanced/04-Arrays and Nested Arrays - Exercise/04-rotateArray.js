function rotateArray(arr, n) {
    for(let i = 0; i < n; i++) {
        let movedPiece = arr.pop();
        arr.unshift(movedPiece);
    }
    console.log(arr.join(' '));
}
rotateArray(['1', 
'2', 
'3', 
'4'], 
2);
console.log('===========');
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);
