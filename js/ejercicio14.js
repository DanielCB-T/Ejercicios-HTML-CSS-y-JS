function iniciar(){
    let cadena = document.getElementById("numStack").value;
    let arreglo = cadena.split(",");
    let arregloNum = arreglo.map(Number);

    let min = Math.min(...arregloNum);
    let max = Math.max(...arregloNum);
    let suma = arregloNum.reduce((acc, valor) => acc + valor, 0);
    let promedio = suma/arregloNum.length;

    document.getElementById("numMenor").innerHTML = min;
    document.getElementById("numMayor").innerHTML = max;
    document.getElementById("promedio").innerHTML = promedio;
}