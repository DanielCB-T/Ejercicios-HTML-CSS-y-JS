function convertir(){
    let gradosC = document.getElementById("gradosC").value;
    let fahrenheit = (parseInt(gradosC)*(9/5) + 32);

    document.getElementById("fahrenheit").innerHTML = fahrenheit + ' °F';
}