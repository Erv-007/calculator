const display = document.getElementById("display");

//creating the function to read the input
function appendToDisplay(input) {
    display.value += input;
}

//creating function to clear the calculator
function clearDisplay() {
    display.value = "";
}


//creating function for the calculation
function calculate() {
    try{
        display.value = eval(display.value);
    }catch(error) {
        display.value = "Error";
    }
}