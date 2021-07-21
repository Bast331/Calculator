let result = 0;
let number1 = 0;
let number2 = 0;
let operator;
let a = 0;
let b = 0;


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



// function function_one()
// {
//     alert("The function called 'function_one' has been called.")
//     //Here u would like to call function_two.
//     function_two(g); 
// }

// function function_two()
// {
//     alert("The function called 'function_two' has been called.")
// }