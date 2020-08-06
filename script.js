let num1 = 0;
let num2 = 0;
let operation = "=";
let currentNum = 0;
let num1Set = false;
let screen = "";

// When x / + - pressed
function operate(op) {
    if (num1Set == true) { // second term
        num2 = currentNum;
        num1Set = false;
        calculate();
    } else { // first term
        num1Set = true;
        num1 = currentNum;
        currentNum = 0;
        operation = op ;
        update();
    }
}

function calculate() {
    switch (operation) {
        case "times":
            num1 = num1 * num2;
            break;
        case "divide":
            num1 = num1 / num2;
            break;
        case "plus":
            num1 = num1 + num2;
            break;
        case "minus":
            num1 = num1 - num2;
            break;
        default:
            console.log("Should never run");
    }
    num2 = 0;
    operation = "=";
    currentNum = num1;
    //screen = currentNum ;
}

function clear() {
    num1 = 0;
    num2 = 0;
    operation = "=";
    currentNum = 0;
    num1Set = false;
    screen = "";
}

function numPressed(no) {
    screen += no;
    update();
}

function update() {
    currentNum = parseInt("screen");
    document.getElementById("screen").innerHTML = screen;
}