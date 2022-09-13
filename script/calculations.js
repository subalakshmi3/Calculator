let finalAnswer;

function displayInput(values) {
    document.getElementById("result").value += values;
}

function calculatingInputs() {
    finalAnswer = 0;
    let numericNumbers = [];
    let operator = [];
    let equation = document.getElementById("result").value;
    numericNumbers = equation.split(/[^0-9]/g);
    operator = equation.match(/[+*/-]/g);
   
    finalAnswer=numericNumbers[0];
    for(i=0; i<operator.length; i++) {
        if(operator[i] == "+") {
            finalAnswer=parseInt(finalAnswer) + parseInt(numericNumbers[i+1]);
        } else if(operator[i] == "*") {
            finalAnswer=parseInt(finalAnswer) * parseInt(numericNumbers[i+1]);
        } else if(operator[i] == "/") {
            finalAnswer=parseInt(finalAnswer) / parseInt(numericNumbers[i+1]);
        } else if(operator[i] == "-") {
            finalAnswer=parseInt(finalAnswer) - parseInt(numericNumbers[i+1]);
        }
    }
    return finalAnswer;
}

function finalOutput() {
    var finalSolution = calculatingInputs();
    document.getElementById("result").value = finalSolution;
}

function clearInputs() {
    document.getElementById("result").value="";
}
            
    