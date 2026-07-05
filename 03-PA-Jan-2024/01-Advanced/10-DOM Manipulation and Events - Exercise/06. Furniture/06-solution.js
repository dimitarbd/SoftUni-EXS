function solve() {
  let [inputTextAreaRef, resultTextAreaRef] = document.querySelectorAll("textarea")
  let [generateBtnRef, buyBtnRef] = document.querySelectorAll("button");
  let tableBodyRef = document.querySelector("tbody");
  
  generateBtnRef.addEventListener("click", generateTableInfo);
  buyBtnRef.addEventListener("click", buyHandler)

  function generateTableInfo(e) {
    let data = JSON.parse(inputTextAreaRef.value);

    for (let item of data) {
      createRowAndAppend(item);
    }
  } 

  function createRowAndAppend(item) {
    let tr = document.createElement("tr");
    tr.innerHTML += cretableData(`<img src=${item.img}>`);
    tr.innerHTML += cretableData(`<p>${item.name}</p>`);
    tr.innerHTML += cretableData(`<p>${item.price}</p>`);
    tr.innerHTML += cretableData(`<p>${item.decFactor}</p>`);
    tr.innerHTML += cretableData(`<input type='checkbox'>`);
    tableBodyRef.appendChild(tr);
  }

  function cretableData(item) {
    return `<td>${item}</td>`
  }

  function buyHandler() {
    let name = [];
    let price = 0;
    let avgDecFac = 0;
    let selectedRows = document.querySelectorAll("input[type='checkbox']:checked")
  

    for (let checkbox of selectedRows) {
      let [imgRef, nameRef, priceRef, decFacRef] = Array.from(checkbox.parentElement.parentElement.children)
      let nameValue = nameRef.children[0].textContent;
      let priceValue = Number(priceRef.children[0].textContent);
      let decFactorValue = Number(decFacRef.children[0].textContent);

      name.push(nameValue);
      price += priceValue;
      avgDecFac += decFactorValue;
      
    }
    let res = "Bought furniture: ";
    res += name.join(", ");
    res += "\n";
    res += `Total price: ${price.toFixed(2)}\n`;
    res += `Average decoration factor: ${avgDecFac / name.length}`;
    resultTextAreaRef.value = res;

  }

}