function convert() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;
    let outputValue;

    if (inputUnit === outputUnit) {
        outputValue = inputValue;
    } else if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
        outputValue = (inputValue * 9/5) + 32;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
        outputValue = (inputValue - 32) * 5/9;
    }

    document.getElementById('outputValue').value = outputValue.toFixed(2);
}