let result;
let number1;
let number2;
let operator;
let a;
let b;
let displayvalue;

// functions that make the calculation and give back the results
function addition(number1, number2) {
return result = number1 + number2;
}

function subtraction(number1, number2) {
return result = number1 - number2;
}

function multiply(number1, number2) {
return result = number1 * number2;
}

function division(number1, number2) {
return result = number1 / number2;
}


// function that gets the numbers and calls the rigth calculating function
function operate(a, b, operator) {
    console.log(`A is ${a}`);
    console.log(`B is ${b}`);
    console.log(operator);
    number1 = a;
    console.log(number1);
    number2 = b; 
    console.log(number2);


    if(operator == "+") {
        
        return addition(number1, number2);
    }
   
    else if(operator == "-") {
       
        return subtraction(number1, number2);
    } 

    else if(operator == "*") {
    

        return multiply(number1, number2);
    }

    else if(operator == "/") {
    

        return division(number1, number2);
    }
    
    else {
        return console.log("There must have been a mistake!");
    }

}


// Eventlisteners for all buttons
const Display = document.querySelector("#displayShow");

document.querySelector(".button_Clear").addEventListener("click", () => {
    console.log("Clear pressed")
})

document.querySelector(".button_Back").addEventListener("click", () => {
    console.log("Back pressed");
})

document.querySelector(".button_Plus-minus").addEventListener("click", () => {
    console.log("plus-minus pressed");
})

document.querySelector(".button_divide").addEventListener("click", () => {
    console.log("divide pressed");
})

document.querySelector(".button_multiply").addEventListener("click", () => {
    console.log("multiply pressed");
})

document.querySelector(".button_subtract").addEventListener("click", () => {
    console.log("subtrace pressed");
})

document.querySelector(".button_plus").addEventListener("click", () => {
    console.log("plus pressed");
})

document.querySelector(".button_equal").addEventListener("click", () => {
    console.log("equal pressed");
})

document.querySelector(".button_point").addEventListener("click", () => {
    console.log("point pressed");
})

document.querySelector(".button_zero").addEventListener("click", () => {
    console.log("0 pressed");
    displayvalue = Display.innerHTML += (0);
    console.log(displayvalue);
})

document.querySelector(".button_one").addEventListener("click", () => {
    console.log("1 pressed");
    displayvalue = Display.innerHTML += (1);
    console.log(displayvalue);
})

document.querySelector(".button_two").addEventListener("click", () => {
    console.log("2 pressed");
    displayvalue = Display.innerHTML += (2);
    console.log(displayvalue);
})

document.querySelector(".button_three").addEventListener("click", () => {
    console.log("3 pressed");
    displayvalue = Display.innerHTML += (3);
    console.log(displayvalue);
})

document.querySelector(".button_four").addEventListener("click", () => {
    console.log("4 pressed");
    displayvalue = Display.innerHTML += (4);
    console.log(displayvalue);
})

document.querySelector(".button_five").addEventListener("click", () => {
    console.log("5 pressed");
    displayvalue = Display.innerHTML += (5);
    console.log(displayvalue);
})

document.querySelector(".button_six").addEventListener("click", () => {
    console.log("6 pressed");
    displayvalue = Display.innerHTML += (6);
    console.log(displayvalue);
})

document.querySelector(".button_seven").addEventListener("click", () => {
    console.log("7 pressed");
    displayvalue = Display.innerHTML += (7);
    console.log(displayvalue);
})

document.querySelector(".button_eight").addEventListener("click", () => {
    console.log("8 pressed");
    displayvalue = Display.innerHTML += (8);
    console.log(displayvalue);
})

document.querySelector(".button_nine").addEventListener("click", () => {
    console.log("9 pressed");
    displayvalue = Display.innerHTML += (9);
    console.log(displayvalue);
})

// function that gets called by eventlistener to update calc display
function calcDisplay() {
   
}