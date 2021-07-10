
function billingFunction() {
    var isChecked = document.getElementById("same").checked;

    if (isChecked){
        onActive();
    }
    else {
        clearText()
    }
}

function onActive() {
    // Get shipping details
    var shippingName = document.getElementById("shippingName").value;
    var shipZip = document.getElementById("shippingZip").value;

    // Set billing details
    document.getElementById("billingName").value = shippingName;
    document.getElementById("billingZip").value = shipZip;
}

function clearText() {
    document.getElementById("billingName").value = null;
    document.getElementById("billingZip").value = null;
}