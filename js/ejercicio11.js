function convertir(){
    let km = document.getElementById("km").value;
    let milla = parseInt(km)*0.621371;

    document.getElementById("milla").innerHTML = milla + ' M';
}