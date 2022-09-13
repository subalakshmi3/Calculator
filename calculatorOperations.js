function displayingInput(values) {
    document.getElementById("result").value += values;
}

function calculatingInputs(val) {
    
    var reserveInputs = [];
    if(document.getElementById("result").value.includes("+")) { 
	reserveInputs = document.getElementById("result").value.split("+");
        let addition = 0;
        for(var index = 0; index < reserveInputs.length; index++) {
            addition += parseInt(reserveInputs[index]);
    }
    return addition; 
 
      
    } else if(document.getElementById("result").value.includes("-")) {   
	reserveInputs = document.getElementById("result").value.split("-");
        let subtration = reserveInputs[0];
	for(var index=1; index < reserveInputs.length; index++) {
            subtration -= parseInt(reserveInputs[index]);
    }
    return subtration; 

    } else if(document.getElementById("result").value.includes("*")) {
	reserveInputs = document.getElementById("result").value.split("*");
        let multiplication = reserveInputs[0];
        for(var index=1; index < reserveInputs.length; index++) {
            multiplication *= parseInt(reserveInputs[index]);
    }
    return multiplication;


    } else {
	reserveInputs = document.getElementById("result").value.split("/");
        let division = reserveInputs[0];
        for(var index=1; index < reserveInputs.length; index++) {
            division /= parseInt(reserveInputs[index]);
    }
    return division;

    }
}

function finalOutput() {
    var finalCalculation = calculatingInputs();
    document.getElementById("result").value = finalCalculation;
}
    
function clearInputs() {
    document.getElementById("result").value="";
}