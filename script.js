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
                case "&#247": // divide
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
    document.getElementById("answerBox").innerHTML = total;
}

// Sort into array of numbers and operations
function sortAlgebra() {
    numbers.length = 0 ;
    operators.length=0 ;
    let numString = "";
    for (let i = 0; i < algebraString.length; i++) {
        if (algebraString[i] != "x" && algebraString[i] != "&#247" && algebraString[i] != "+" && algebraString[i] != "-" && algebraString[i] != "=") {
            numString += algebraString[i];
        } else { // Have reached an operator
            numbers.push(parseInt(numString));
            numString = "";
            if (algebraString[i] != "=") {
                operators.push(algebraString[i]);
            }            
        }
    }
    // If two operators put next to each other disable click of all buttons except CE
}


function clearCalc() {
    algebraString="" ;
    updateScreen() ;
    document.getElementById("screen").innerHTML = "0";
    document.getElementById("answerBox").innerHTML = "0";
}
// let num1 = 0;
// let num2 = 0;
// let operation = "=";
// let currentNum = 0;
// let num1Set = false;
// let screen = "";
// let twoPlusTerms = false ;

// // When x / + - pressed
// function operate(op) {
//     if (num1Set == true) { // second term
//         if (twoPlusTerms) {
//             num2 = currentNum;
//             operation = op;
//             calculate();
//         } else {
//             num2 = currentNum;
//             calculate();
//             operation = op;
//             twoPlusTerms = true;
//         }
//     } else { // first term
//         num1 = currentNum;
//         screen = "";
//         document.getElementById("screen").innerHTML = "";
//         operation = op;
//         num1Set = true;
//     }
// }

// function calculate() {
//     switch (operation) {
//         case "times":
//             num1 = num1 * num2;
//             break;
//         case "divide":
//             num1 = num1 / num2;
//             break;
//         case "plus":
//             num1 = num1 + num2;
//             break;
//         case "minus":
//             num1 = num1 - num2;
//             break;
//         default:
//             console.log("Should never run. Error!");
//     }
//     document.getElementById("screen").innerHTML = num1;
// }

// function equals() {

// }

// function clearCalc() {
//     num1 = 0;
//     num2 = 0;
//     operation = "=";
//     currentNum = 0;
//     num1Set = false;
//     screen = "";
//     document.getElementById("screen").innerHTML = "";
// }

// function numPressed(no) {
//     screen += no;
//     update();
// }

// function update() {
//     if(twoPlusTerms) {
//         currentNum = num1;
//     }
//     currentNum = parseInt(screen);
//     document.getElementById("screen").innerHTML = screen;
// }