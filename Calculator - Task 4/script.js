function input() {
    let result;
    let input = document.getElementById('input-element').value;
    let button = document.querySelector('.cal-button');
    console.log(input);

    if (button.value === '/') {
        result = input % button;
        console.log(result);
    }
}