const display = document.querySelector('#display-numbs h1');
function updateDisplay(value) {
    display.textContent = value;
}

function calculate() {
    try {
        const result = eval(display.textContent); 
        updateDisplay(result); 
    } catch (error) {
        updateDisplay('Error'); 
    }
}

function handleButtonClick(event) {
    const buttonClicked = event.target;
    const buttonValue = buttonClicked.textContent;

    if (buttonValue === '=') {
        calculate(); 
    } else if (buttonValue === 'c') {
        updateDisplay('0'); 
    } else {
       
        if (display.textContent === '0') {
            updateDisplay(buttonValue);
        } else {
            updateDisplay(display.textContent + buttonValue);
        }
    }
}

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
