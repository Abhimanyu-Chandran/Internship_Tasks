let input = document.getElementById('input-element');

function display(input_element) {
    input.value += input_element;
}

function clearDisplay() {
    input.value = "";
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = "Error";
    }
}