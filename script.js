let algebraString = "";
let numbers = [];
let operators = [];
document.getElementById("screen").innerHTML = "0";
document.getElementById("answerBox").innerHTML = "0";


function numPressed(no) {
    algebraString += no;
    updateScreen();
}

function clearCalc() {
    algebraString = "";
    updateScreen();
}

function updateScreen() {
    document.getElementById("screen").innerHTML = algebraString;
    calculate();
}

function calculate() {
    sortAlgebra();
    // Now actually do calculation
    let total = numbers[0];
    // decide on operator
    let counter = 0;
    while (counter < operators.length) {
        if (numbers[counter + 1]) {
            switch (operators[counter]) {
                case "x":
                    total *= numbers[counter + 1];
                    break;
                case "÷": // divide
                    total /= numbers[counter + 1];
                    break;
                case "+":
                    total += numbers[counter + 1];
                    break;
                case "-":
                    total -= numbers[counter + 1];
                    break;
            }
        }
        counter++;
    }
    // update answerBlock
    if (!total) { // When sum starts with a negative
        document.getElementById("answerBox").innerHTML = "Dunno";
    } else {
        document.getElementById("answerBox").innerHTML = total;
    }
}

// Sort into array of numbers and operations
function sortAlgebra() {
    numbers.length = 0;
    operators.length = 0;
    let numString = "";
    for (let i = 0; i < algebraString.length; i++) {
        if (algebraString[i] != "x" && algebraString[i] != "÷" && algebraString[i] != "+" && algebraString[i] != "-") {
            numString += algebraString[i];
            if (i == algebraString.length - 1) { // final number
                numbers.push(parseInt(numString));
            }

        } else { // Have reached an operator
            if ((algebraString[i] == "x" || algebraString[i] == "÷") && (algebraString[i - 1] == "x" || algebraString[i - 1] == "÷")) {
                document.getElementById("answerBox").innerHTML = "Dunno";
            } else if (i == 0 || algebraString[i - 1] == "x" || algebraString[i - 1] == "÷") { // Negative number not an operator
                numString += algebraString[i];
            } else {
                numbers.push(parseInt(numString));
                numString = "";
                operators.push(algebraString[i]);
            }
        }
    }
}


function clearCalc() {
    algebraString = "";
    updateScreen();
    document.getElementById("screen").innerHTML = "0";
    document.getElementById("answerBox").innerHTML = "0";
}