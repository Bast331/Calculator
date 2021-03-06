let result = null;
let number1 = null;
let number2 = null;
let operator = null;

let displayNew = true;

let point = false;

let setMinusbeforeNumber = false;

let countHowOftenADigitPressed = 0;
let countDigitsOfResult = 0;


const Display = document.getElementById("displayShow");
const buttons = document.getElementById("buttonContainer");
const equal = document.getElementById("equal");

const clear = document.querySelector(".button_Clear");
const back = document.querySelector(".button_Back");
const dotButton = document.querySelector('.button_point');
const negativeNumber = document.querySelector('.button_toMinus');


function addition(a, b) {
    result = a + b;
    return result = Math.round((a+b)*1000) / 1000;

}

function subtraction(a, b) {
    result = a - b;
    return result = Math.round((a-b)*1000) / 1000;
    
}

function multiplication(a, b) {
    result = a * b;
    return result = Math.round((a*b)*1000) / 1000;
  
}

function division(a, b) {
    if(b == 0) {
        return "ERROR: don't divide by 0"
    }
    result = a / b;

    return result = Math.round((a/b)*1000) / 1000;
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
                Display.style.fontSize = "1.8rem";
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
        if(countHowOftenADigitPressed == 9) {
            console.log("Display max erreicht")
             return Display.textContent = Display.textContent;
         }

        Display.textContent += `${button.value}`;
        countHowOftenADigitPressed++;
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
                setMinusbeforeNumber = false;
                countHowOftenADigitPressed = 0;
                return
            }
            
        number2 = parseFloat(Display.textContent);
        result = operate(operator, number1, number2);
        Display.textContent = result;
        number1 = result;
        number2 = null;
        operator = `${button.value}`;
        displayNew= true;
        setMinusbeforeNumber = false;
        countHowOftenADigitPressed = 0;
        return
        }

        
        number1 = parseFloat(Display.textContent);
        operator = `${button.value}`;
        displayNew = true;
        setMinusbeforeNumber = false;
        countHowOftenADigitPressed = 0;
    })
})


equal.addEventListener("click", () => {
    if(operator == null) {
        setMinusbeforeNumber = false;
        countHowOftenADigitPressed = 0;
        return
    }
    point = false;
    number2 = parseFloat(Display.textContent);
    result = operate(operator, number1, number2);

    console.log(typeof(result));
    for(let i=0; i < result.toString().length; i++){
        console.log("im loop")
        countDigitsOfResult++;
        console.log(countDigitsOfResult);
    }
    
    if(countDigitsOfResult >= 10) {
        Display.style.fontSize = "0.9rem";
    }

    Display.textContent = result;
    number1 = undefined;
    number2 = null;
    operator = null;
    displayNew = true;
    setMinusbeforeNumber = false;
    countHowOftenADigitPressed = 0;
    countDigitsOfResult = 0;

   
})


clear.addEventListener("click", () => {
    Display.textContent = '';
    result = null;
    number1 = null;
    number2 = null;
    operator = null;
    countHowOftenADigitPressed = 0;
    Display.style.fontSize = "1.8rem";
    return
})


back.addEventListener("click", () => {
    if(Display.textContent == result) {
        return
    }
    if(Display.textContent == number1) {
        return
    }
    Display.textContent = Display.textContent.slice(0, -1);
    countHowOftenADigitPressed--;
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
    else if(Display.textContent == result) {
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
    else if(operator !== null && setMinusbeforeNumber == false || result !== null && setMinusbeforeNumber == false) {
        if(Display.textContent == number1 || Display.textContent == result) {
            Display.textContent = '-';
            setMinusbeforeNumber = true;
            return 
        }
       else {
           return
       }
    }
   
})