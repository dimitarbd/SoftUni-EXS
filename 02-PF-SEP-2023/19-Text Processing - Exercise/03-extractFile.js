function extractFile(str) {
    let link = str.split('\\');
    let file = link.pop();
    let extraction = file.split('.');
    let extension = extraction.pop();
    let name = extraction.join('.')
    
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');
console.log('===============');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');