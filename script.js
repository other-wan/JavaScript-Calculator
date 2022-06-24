
const getValue = () => {
    let value = window.prompt("Enter an operand: ");
    while(isNaN(value)) {
        value = window.prompt("Pls, enter a valid operand: ");
    }

    return Number.parseInt(value);
}

const OPERATORS = ['+', '-', '/', '*'];
const getOperator = () => {
    let op = window.prompt("Enter an operator in '+', '-', '*', '/': ");
    while(!OPERATORS.includes(op)) {
        op = window.prompt("Pls, choose an operator in -> '+', '-', '*', '/': ");
    }

    return op;
}



const num1 = getValue();
const op = getOperator();
const num2 = getValue();

let res;
switch (op) {
    case '+':
        res = num1 + num2;
        break;
    
    case '-':
        res = num1 - num2;
        break;

    case '*':
        res = num1 * num2;
        break;

    case '/':
        res = num1 / num2;
        break;

    default:
        break;
}

window.prompt("The result is: " + res);