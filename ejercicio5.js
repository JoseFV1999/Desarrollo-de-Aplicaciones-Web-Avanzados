function ArregloIzquierda(Desplazamiento){
    var Desplazamiento = prompt("Cantidad de desplazamientos: ");
    var arreglo = [1,2,3,4,5];
    for (var i = 0; i < Number(Desplazamiento); i++){
        var ultimo = arreglo.shift();
        arreglo.push(ultimo)
    }
    console.log(arreglo)
}