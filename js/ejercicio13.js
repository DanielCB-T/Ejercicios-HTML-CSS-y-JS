function verificar(){
    let edad = document.getElementById("edad").value;

    if (parseInt(edad)>17){
        document.getElementById("decision").innerHTML = "Usted puede votar :)";
    }
    else{
        document.getElementById("decision").innerHTML = "Usted no puede votar.";
    }
}
