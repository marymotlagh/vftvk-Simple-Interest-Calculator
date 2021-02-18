function compute() {
    var principal = document.getElementById("principal").value;
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
        var sum = ((principal * rate / 100) * years).toFixed(2);
        document.getElementById("principalVal").innerHTML = principal;
        document.getElementById("percentageVal").innerHTML = rate;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("year").innerHTML = parseInt(todayYear) + parseInt(years);
        document.getElementById("result").className = "fieldsRow label show";
    }
}
function updateTextInput(val) {
    document.getElementById('percentage').innerHTML = val + "%";
}

function setValue() {
    updateTextInput("10.50");
}
