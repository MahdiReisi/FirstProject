const display = document.getElementById('display');

function append(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'خطا';
    }
}

document.addEventListener("keydown", function (event) {
    const key = event.key;

    if ((key >= "0" && key <= "9") || key === ".") {
        append(key);
    }


    else if (key === "+" || key === "-" || key === "*" || key === "/") {
        append(key);
    }

    else if (key === "Enter") {
        event.preventDefault()
        calculate();
    }

    else if (key === "Backspace") {
        deleteLast();
    }

    else if (key === "c" || key === "C" || key === "Escape"||key==="Delete") {
        clearDisplay()
    }
});

function deleteLast() {
    display.value = display.value.slice(0, -1);
}