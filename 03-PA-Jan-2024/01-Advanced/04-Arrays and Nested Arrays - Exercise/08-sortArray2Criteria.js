function sortArray2Criteria (params) {
    params.sort((a, b) => a.length - b.length || a.localeCompare(b))
    console.log(params.join('\n'));
}
sortArray2Criteria(['alpha', 
'beta', 
'gamma']);
console.log('==============');
sortArray2Criteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);
console.log('==============');
sortArray2Criteria(['test', 
'Deny', 
'omen', 
'Default']);