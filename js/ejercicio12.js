function convertir(){
    let mxn = document.getElementById("mxn").value;
    let dollar = parseInt(mxn)*0.055;

    document.getElementById("dollar").innerHTML = dollar + ' USD';
}

