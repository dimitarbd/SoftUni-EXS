function extractText() {
    const list = document.getElementById('items');
    let result = [];

    const items = Array.from(list.children);
    for (let item of items){
        console.log(item.textContent);
        result.push(item.textContent)
    }

    const textarea = document.getElementById('result');
    console.log(textarea);
    textarea.textContent = result.join('\n');
}