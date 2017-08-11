function $(attr) {
    return document.getElementById(attr);
}

function numberButton(number) {
    var inputField = $("input");
    var inputValue = inputField.value;
    var prefix = "";
    if (inputValue !== "0") {
        prefix = inputValue;
    }
    inputField.value = prefix + number;
}

var currentValue = 0;

function plus() {
    currentValue = $("input").value;
    $("input").value = 0;
}

function equal() {
    $("input").value = Number(currentValue) + Number($("input").value);
}

function minus() {
    currentValue = $("input").value;
    $("input").value = 0;
}