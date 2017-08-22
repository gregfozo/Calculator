function $(attr) {
    return document.getElementById(attr);
}

function numberButton(number) {
    var inputField = $("input"), inputValue = inputField.value, prefix = "";
    if (inputValue !== "0") {
        prefix = inputValue;
    }
    inputField.value = prefix + number;
}

var currentValue = 0;
var called = 0;

function plus() {
    called = 1;
    currentValue = $("input").value;
    $("input").value = 0;
}

function minus() {
    called = 2;
    currentValue = $("input").value;
    $("input").value = 0;
}

function equal() {
    if (called == 1) {
        $("input").value = Number(currentValue) + Number($("input").value);
    }
    else if (called == 2) {
        $("input").value = Number(currentValue) - Number($("input").value); 
    }
}