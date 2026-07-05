function generateReport() {
    let checkBoxes = document.querySelectorAll("input");
    let rows = document.querySelectorAll("tbody>tr");
    let output = [];

    for (let i = 0; i < rows.length; i++) {
        let obj = {};
        let values = Array.from(rows[i].getElementsByTagName('td')).map(el => el.textContent);
        for (let j = 0; j < checkBoxes.length; j++) {
            if (checkBoxes[j].checked) {
                obj[checkBoxes[j].name] = values[j];
            }
        }
        output.push(obj);
    }

    document.querySelector('#output').value = JSON.stringify(output, null, 2)
}