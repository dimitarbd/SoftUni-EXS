function solve() {
  let inputText = document.getElementById("input").value;
  let outputText = document.getElementById("output");

  let arrText = inputText.split('.').filter((p) => p.length > 0);


  for (let i = 0; i < arrText.length; i += 3) {
    let arr = [];

    for (let j = 0; j < 3; j++) {
      if (arrText[i + j]) {
        arr.push(arrText[i + j])
      }
    }
    let paragraf = arr.join('. ') + '.';
    outputText.innerHTML += `<p>${paragraf}</p>`;
  }

}