/*calculate the interest value*/
function compute() {
    var principal = document.getElementById("principal").value;
    /*handling unvalid value*/
    if (principal <= 0) {
        document.getElementById("divError").className = "show errorColor";
        document.getElementById("result").className = "fieldsRow label hide";
    }
    else {
        document.getElementById("divError").className = "hide errorColor";
        var todayDate = new Date();
        var todayYear = todayDate.getFullYear();
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        //added toFixed function to round the result 2 digit. this is optional.
        var sum = (principal * rate * years / 100).toFixed(2);
        document.getElementById("principalVal").innerHTML = principal;
        document.getElementById("percentageVal").innerHTML = rate;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("year").innerHTML = parseInt(todayYear) + parseInt(years);
        document.getElementById("result").className = "fieldsRow label show"; 
    }
    document.getElementById("principal").focus();
}

/*Updating the span showing the range value to user*/
function updateTextInput(val) {
    document.getElementById('percentage').innerHTML = val + "%";
}
/* Start the page with default values*/
function setValue() {
    updateTextInput("10.25");
    document.getElementById("principal").focus();
}
