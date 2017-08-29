function $(attr) {
    return document.getElementById(attr);
}

function numberButton(number) {
    var inputField = $("input"), inputValue = inputField.value, prefix = "";
        if (inputValue !== "0" && !shouldReset) {
        prefix = inputValue;
        }
    inputField.value = prefix + number;
    shouldReset = false;
}

var shouldReset = false;
var oldValue = 0;
var nextOperand;

function equal() {
    var result;
    var newValue = $("input").value;
    switch(nextOperand) {
        case "minus":
            result = Number(oldValue) - Number(newValue);
            console.log(result);
            break;
        case 'plus':
            result = Number(oldValue) + Number(newValue);
            break;
            
        default:
            console.log("kurva anyad");
    }
    console.log(result);
    $("input").value = result;
    shouldReset = true;
}

function operand(operand) {
    nextOperand = operand;
    oldValue = $("input").value;
    $("input").value = 0;
}