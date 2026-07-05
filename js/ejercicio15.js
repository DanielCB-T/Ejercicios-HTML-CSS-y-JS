let estudiantes = [];
let i = 0;

function registra(){
    let estudiante = {
        nombre : document.getElementById("nombreEst").value,
        calificacion : document.getElementById("calificacion").value
    };

    estudiantes.push(estudiante);
    estudiantes.forEach (estudiante => {
        console.log("Nombre: "+estudiante.nombre);
    });
}

function calcular(){
    if (estudiantes.length === 0){return 0;}

    let sumTotal = estudiantes.reduce((total, estudiante) =>{
        return total + Number(estudiante.calificacion);},0
    );
    
    let promedio = sumTotal / estudiantes.length;
    document.getElementById("promedio").innerHTML = promedio;

    let calMax = Math.max(...estudiantes.map( est => est.calificacion));
    document.getElementById("calfAlta").innerHTML = calMax;

    let calMin = Math.min(... estudiantes.map(e => e.calificacion));
    document.getElementById("calfBaja").innerHTML = calMin;

}