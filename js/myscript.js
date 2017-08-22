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

function plus() {
    currentValue = $("input").value;
    $("input").value = 0;
}

function equal() {
    if (plus == 'true') {
        $("input").value = Number(currentValue) + Number($("input").value);
    }
    else {
        $("input").value = Number(currentValue) - Number($("input").value); 
    }
}

function minus() {
    currentValue = $("input").value;
    $("input").value = 0;
}