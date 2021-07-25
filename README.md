<!-- Project Title and Subtitle explaining it in one sentence -->
## Calculator
<!-- Description: -->
<!--    what does this project -->
This is a fully functional calculator. It can be used in any browser,
to calculate common Mathproblems.
<!--    what technologies I used -->
## General Information

I used HTML, CSS and Javascript to make this Project.
<!--    challenges faced and future implementations -->
The hardest part for me was to see through the whole logic of this project. Specificly hard was
the problem, that it should not evaluate more than a single pair of numbers at a time. 
If you enter a number then an operator and another number that calculation should be displayed 
if your next input is an operator. This result should be used as the first number in the new calculation.
With some inspiration by other projects it finally worked. In the credits I link the project from
Mr_Starkk (Github) in the Credits. That helped me probably the most, because it was really similar structured to my code.
The next challenge was that if I wanted to let the User input more numbers, than the Display could handle. So I tried some time and find a way to count the digits to stop putting more than nine digits for a number. And if the result would be too big, the font-size of the Display would become smaller.
If there are any bugs or problems please let me know, so I wiill be able to update this project and make
it better.
I plan to add keyboard-support to the project in the near future. 

<!-- Optional: Table if the README is very long -->
<!-- If it is an app: how to install -->
<!-- How to Use: -->
## How to use and more
To use the Calculator use this [link.]()
<!--    Demo: -->

<!--    Features that stand out: -->
### Features
The most unique feature is, that you can use negative numbers when you want. You 
just have to press the "negative Number" Button then you will see a minus before your digits. 
This just works if you haven't clicked on any digits before. So you have to start by clicking the 
"negative Number" button and cannot change the algebraic sign when you tiped it already in.
You cannot type more than nine digits for a number, because the display can`t handle more. If the result becomes more than 9 digits the font size from the display becomes smaller, so you can input larger numbers. 
At some point it shows the number in scientific notation.
Also every Calculation will be rounded after the third decimal.
<!--    Known Bugs -->
### Bugs
At the moment I am not aware of any bugs. Please let me know through discord 'Bast#9425' if you 
experienced any problems, while using the calculator.

<!-- Reflections: -->
## Reflections
<!-- 1.) Why did I make this project and what was my motivation: -->
I did this project in the course of "the Odin Project". [here]() you can check out the
course and [here]() the specific project I wanted to make.
<!-- 2.) What problem does it solve? -->
The Calculator is able to solve simple Math problems, like
    adding to numbers 
    substract one number from another
    multiply to numbers
    and divide one number by another
You can use decimal and negative numbers in your calculations as well.
You can make several calculations after another. 
    for example: 2+4 = 6  +3 = 9
                or 2+4 + (shows 6) 3 + (shows nine) 4 = 13
<!-- 3.) What did I learn?  -->
I learned many things by creating this projects. Especially how important it is to
think through the whole logic behind the project before trying to code.
I learned how to use booleans in a way, to control which action happens when (when can the user 
place a point "." and when not).
And to use the declaration of variables with null and undefined in if-else constructions.
It was really cool to see, how short you can make the code so you can understand it, but
you don't need to give every digit it's own event listener, by first creating a querySelector
to the div around the digit-buttons, and then use the class name to give them the EventListeners.

```javascript

const buttons = document.getElementById("buttonContainer");
buttons.querySelectorAll(".digit").forEach((button) => {
    button.addEventListener("click", () => { 
        ...
    }

```

I hope I gave you some interesting insight in the project.

## Credits
<!-- Credits: -->
[Here]() again the credit to TOP, that makes it possible for me to learn Coding well structured, with a cool community and much fun.
The person I got the most inspired from is [Mr_Starkk](https://github.com/Mr-Starkk/). 
You can find his project [here](https://mr-starkk.github.io/Calculator/).

<!-- Badge: and Contact -->
## Contact
If you want to contact me, please DM me on Discord. My name is Bast#9425.
I am also on the server from TOP and post regularly the projects I finished.
<!-- if you have an opensource licence -->