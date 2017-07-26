function $(attr){
    return document.getElementById(attr);
}

function numberButton(number) {
    var inputField = $("input");
    var inputValue = inputField.value;
    var prefix = "";
    if (inputValue != "0") {
        prefix = inputValue;
    } 
    inputField.value = prefix + number;
} 