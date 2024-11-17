let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});
function handleInput(value) {
    const operators = ['+', '-', '*', '/'];
    if (value == '=') {
        try {
            string = eval(string);
            input.value = string;
        } catch (e) {
            input.value = "Error";
        }
    }
    else if (value == 'AC') {
        string = "";
        input.value = string;
    }
    else if (value == 'DEL') {
        string = string.slice(0, -1);
        input.value = string;
    }
    else if (operators.includes(value)) {
        if (operators.includes(string[string.length - 1])) {
            string = string.slice(0, -1);
        }
        string += value;
        input.value = string;
    }
    else {
        string += value;
        input.value = string;
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (/[0-9]/.test(key)) {
        handleInput(key);
    }
    else if (['+', '-', '*', '/'].includes(key)) {
        handleInput(key);
    }
    else if (key === '.') {
        handleInput('.');
    }
    else if (key === 'Enter' || key === '=') {
        handleInput('=');
    }
    else if (key.toUpperCase() === 'C') {
        handleInput('AC');
    }
    else if (key === 'Backspace') {
        handleInput('DEL');
    }
    event.preventDefault();
});
