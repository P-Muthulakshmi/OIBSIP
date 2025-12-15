document.getElementById("convertBtn").addEventListener("click", function() {
    const temp = parseFloat(document.getElementById("tempInput").value);
    const unit = document.getElementById("inputUnit").value;
    let result;

    if (isNaN(temp)) {
        alert("Please enter a valid number");
        return;
    }

    switch(unit) {
        case "C":
            result = `${(temp * 9/5 + 32).toFixed(2)} °F / ${(temp + 273.15).toFixed(2)} K`;
            break;
        case "F":
            result = `${((temp - 32) * 5/9).toFixed(2)} °C / ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
            break;
        case "K":
            result = `${(temp - 273.15).toFixed(2)} °C / ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            break;
        default:
            result = "Invalid unit";
    }

    document.getElementById("result").value = result;
});
