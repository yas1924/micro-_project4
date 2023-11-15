let currentInput = '';
let currentResult = 0;

function DisplayButton(value) {
    if (currentInput === '' && ['*', '+', '/'].includes(value)) {  
        return;
    }
    currentInput += value;
    document.getElementById('output').value = currentInput;

}
function Reset() {
    currentInput = '';
    document.getElementById('output').value = '0';
}
function Result() {
    try {
        const Result = eval(currentInput);
        const TwodecimalPlaces = Number(Result.toFixed(2))  
        document.getElementById('output').value = TwodecimalPlaces;
        currentInput = TwodecimalPlaces.toString();
    } catch (error) {
        document.getElementById('output').value = 'Error';
    }
}
function Delete() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('output').value = currentInput;
}