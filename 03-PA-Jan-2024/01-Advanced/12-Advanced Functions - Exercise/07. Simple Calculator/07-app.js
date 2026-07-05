function calculator() {
    let result = {
        init: function (sel1, sel2, resultSel) {
            let selector1 = document.querySelector(sel1).value;
            let selector2 = document.querySelector(sel2).value;
            let resultSelector = document.querySelector(resultSel).value;
        },
        add: function () {
            let selector1 = document.querySelector('#num1').value;
            let selector2 = document.querySelector('#num2').value;
            let resultSelector = document.querySelector('#result');
            resultSelector.value = Number(selector1) + Number(selector2); 
           
        },
        subtract: function () {
            let selector1 = document.querySelector('#num1').value;
            let selector2 = document.querySelector('#num2').value;
            let resultSelector = document.querySelector('#result');
            resultSelector.value = Number(selector1) - Number(selector2);
        },
    }
    return result
}
const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');



