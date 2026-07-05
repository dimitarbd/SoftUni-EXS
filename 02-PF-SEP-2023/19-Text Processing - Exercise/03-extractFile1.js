function extractFile(str) {
    let fileInfo = str.split('\\').pop();

    let lastDotIndex = fileInfo.lastIndexOf('.');
    let name = fileInfo.substring(0, lastDotIndex);
    let extension = fileInfo.substring(lastDotIndex+1)
    
    
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');
console.log('===============');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');