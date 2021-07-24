// declare all variables (to null, so the different scenarios are solved: iif null then calculator behaves like it 
// just loaded)
let result = null;
let number1 = null;
let number2 = null;
let operator = null;

// if an operator/ equal is clicked the screen on Display should be cleared
let displayNew = true;
// dont allow multiple points (.) in one number
let point = false;
// to set minus before a number, but you shouldnt overwrite the whole screen if you wrote a number and then pressed the neg button
let neg = false;


const Display = document.getElementById("displayShow");
const buttons = document.getElementById("buttonContainer");
const equal = document.getElementById("equal");

const clear = document.querySelector(".button_Clear");
const back = document.querySelector(".button_Back");
const dotButton = document.querySelector('.button_point');
const negativeNumber = document.querySelector('.button_toMinus');


function addition(a, b) {
    result = a + b;
    return result;

}

function subtraction(a, b) {
    result = a - b;
    return result;
    
}

function multiplication(a, b) {
    result = a * b;
    return result = Math.round((a*b)*1000000) / 1000000;
  
}

function division(a, b) {
    result = a / b;
    return result = Math.round((a/b)*1000000) / 1000000;
}



function operate(operator, numberOne, numberTwo) {

    if(operator == "+") {
        return addition(numberOne, numberTwo);
    }
    else if(operator == "-") {
        return subtraction(numberOne, numberTwo);
    }
    else if(operator == "*") {
        return multiplication(numberOne, numberTwo);
    }
    else if(operator == "/") {
        return division(numberOne, numberTwo);
    }
    else {
        console.log("ERROR")
        Display.textContent = "ERROR";
    }
}


buttons.querySelectorAll(".digit").forEach((button) => {
    button.addEventListener("click", () => {
        // when you need to clear the display (after operator or equal)
        if(displayNew == true) {

            // when you clicked equal, set all vars to the initial situation
            if(number1 === undefined) {

                // dont overwrite the - if it should be a neg number at the start of calculation (after equal)
                if(Display.textContent == '-') {
                    Display.textContent = Display.textContent;
                }
                else{
                    Display.textContent = '';
                }
                
                number1 = null;
                number2 = null;
                operator = null;
                result = null;
            }

            // dont overwrite the - if it should be a neg number at the start of calculation
            if(Display.textContent == '-') {
                Display.textContent = Display.textContent;
            }

            else {
                Display.textContent = '';
            }
        
        displayNew = false;
        }
         
        Display.textContent += `${button.value}`;
    })
})


buttons.querySelectorAll(".operator").forEach((button) => {
    button.addEventListener("click", () => {
        // set point to false so after an operation is pressed you can use the point once again
        point = false;

        // if number1 is a real number (not after initial situation or after pressed equal) declare the shown number as number2
        if(number1 !== null) {

            // if the operator is pressed directly after equal calculate with result as number1
            if(number1 == undefined) {
                operator = `${button.value}`;
                number1 = result;
                neg = false;
                return
            }
            
        number2 = parseFloat(Display.textContent);
        result = operate(operator, number1, number2);
        Display.textContent = result;
        number1 = result;
        number2 = null;
        operator = `${button.value}`;
        displayNew= true;
        neg = false;
        return
        }

        
        number1 = parseFloat(Display.textContent);
        operator = `${button.value}`;
        displayNew = true;
        neg = false;
    })
})


equal.addEventListener("click", () => {
    if(operator == null) {
        neg = false;
        return
    }
    point = false;
    number2 = parseFloat(Display.textContent);
    result = operate(operator, number1, number2);
    Display.textContent = result;
    number1 = undefined;
    number2 = null;
    operator = null;
    displayNew = true;
    neg = false;
})

// event Listener for clearing the Screen: set all variables to initial situation
clear.addEventListener("click", () => {
    Display.textContent = '';
    result = null;
    number1 = null;
    number2 = null;
    operator = null;
    return
})


back.addEventListener("click", () => {
    Display.textContent = Display.textContent.slice(0, -1);
})

dotButton.addEventListener("click", () => {
    // solution I found in another project, it doesnt solves the problem when the first button pressed after loading
    // the calculator is ., that it shows a .
    // if(Display.textContent.indexOf('.') !== -1) return;

    // my own solution
    if(point == true) {
    return
    }
    else if(Display.textContent == ''){
        return
    }
    else if(operator !== null && Display.textContent == number1) {
        return
    }

    Display.textContent = `${Display.textContent}.`
    point = true;
})



// before clicking on the first digit (after start, operator or equal) you can set this number to a negative number
negativeNumber.addEventListener("click", () => {
    // start situation
    if(Display.textContent == '') {
        Display.textContent = '-';
        return 
    }
    // after operator or equal is pressed you should be able to set next number negative
    else if(operator !== null && neg == false || result !== null && neg == false) {
        if(Display.textContent == number1 || Display.textContent == result) {
            Display.textContent = '-';
            neg = true;
            return 
        }
       else {
           return
       }
    }
   
})