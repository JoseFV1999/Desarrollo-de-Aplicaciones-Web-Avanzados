function ArregloIzquierda(){
    let cantidad = prompt("Ingrese la cantidad de elementos de su lista");
    let arreglo = [];
    var cont = 0;
    while (cont < cantidad){
        let numero = prompt("Ingrese el numero "+(cont+1))
        arreglo.push(numero)
        cont = cont+1;
        console.log(cont)
    }
    alert("El arreglo ingresado es: "+arreglo);
    var Desplazamiento = prompt("Cantidad de desplazamientos: ");
    for (var i = 0; i < Number(Desplazamiento); i++){
        var ultimo = arreglo.shift();
        arreglo.push(ultimo)
    }
    console.log(arreglo)
}