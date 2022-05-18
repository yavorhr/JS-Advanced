function calculator() {
    let firstElement;
    let secondElement;
    let resultELement;

    return {
        init: (selector1, selector2, result) => {
            firstElement = document.querySelector(selector1);
            secondElement = document.querySelector(selector2);
            resultELement = document.querySelector(result);
        },

        add: () => {
            resultELement.value = Number(firstElement.value) + Number(secondElement.value);
        },
        subtract: () => {
            resultELement.value = Number(firstElement.value) - Number(secondElement.value);
        }
    }
}


let obj = calculator();
obj.init('#num1', '#num2', '#result');
let add = obj.add();
let subtract = obj.subtract();

