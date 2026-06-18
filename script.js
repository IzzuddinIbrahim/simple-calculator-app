const numberOneInput = document.querySelector("#number-one");   //find no 1 input
const numberTwoInput = document.querySelector("#number-two");   //find no 2 input
const operationSelect = document.querySelector("#operation"); //find operation dropdown
const calculateButton = document.querySelector("#calculate-btn");   //find calculate button
const clearButton = document.querySelector("#clear-btn");   //find clear button
const resultText = document.querySelector("#result");   //find result paragraph

//function calculate()
function calculate(numberOne, numberTwo, operation) {
    if (operation === "add") {
        return numberOne + numberTwo;
    } else if (operation === "subtract") {
        return numberOne - numberTwo;
    } else if (operation === "multiply") {
        return numberOne * numberTwo;
    } else if (operation === "divide") {
        return numberOne / numberTwo;
    }
}

calculateButton.addEventListener("click", function() {  //when button is clicked
    let numberOne = Number(numberOneInput.value);   //get number 1
    let numberTwo = Number(numberTwoInput.value);   //get number 2
    let operation = operationSelect.value;  //get selected operation

    //validation
    if (numberOneInput.value === "" || numberTwoInput.value === "") {
        alert("Please enter both numbers.");
        return;
    }

    if (operation === "divide" && numberTwo === 0) {
        alert("Cannot divide by zero.");
        return;
    }

    let answer = calculate(numberOne, numberTwo, operation);   //calculate answer

    resultText.textContent = `Result: ${answer}`;   //show result on page
});

//connect clear button
clearButton.addEventListener("click", function() {
    numberOneInput.value = "";
    numberTwoInput.value = "";
    operationSelect.value = "add";
    
    resultText.textContent = "Result: 0";
});
