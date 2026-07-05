function subtract() {
    debugger
    let firstNum = document.getElementById("firstNumber");
    let secondNum = document.getElementById("secondNumber");
    let resultRef = document.getElementById('result');

    let firstNumber = Number(firstNum.value);
    let secondNumber = Number(secondNum.value);

    let result = firstNumber - secondNumber;
    
    resultRef.textContent = result;
}