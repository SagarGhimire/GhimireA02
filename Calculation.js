function myFunction() {

    var price = parseFloat(document.getElementById("Rate").value);
    var Quant = parseFloat(document.getElementById("Quantity").value);
    var tax = parseFloat(document.getElementById("Tax").value);

    if (price < 0) {
        alert("Price must be positive Number");
    }
    else if (Quant < 0) {
        alert("Quantity must be whole Number");
    }
    else if (isNaN(price)) {
        alert("Price should be number");
    }
    else if (isNaN(Quant)) {
        alert("Quantity should be number");
    }
    else if (typeof (price) !== 'number') {
        throw error("Price should be number");
    }
    else if (typeof (Quant) !== 'number') {
        throw error("Quantity should be number");
    }
    else if (typeof (tax) !== 'number') {
        throw error("Please enter Tax % or enter zero")
    }


    else {
        $("#Calculate").html("Your Total Price is : " + Total1(price, Quant, tax));
    }
}
function Total1(price, Quant, tax) {

    return ((price * Quant) + (price * (Quant * tax)) / 100);
}




