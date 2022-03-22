function Mayor(num1, num2, num3){
    alert("Ingrese los 3 numeros");
    var num1 = prompt("Numero 1");
    var num2 = prompt("Numero 2");
    var num3 = prompt("Numero 3");
    if (Number(num1) > Number(num2) && Number(num1) > Number(num3)) {
        console.log("El numero mayor es "+num1);
    }
    else if (Number(num2) > Number(num1) && Number(num2) > Number(num3)) {
        console.log("El numero mayor es "+num2);
    }
    else if (Number(num3) > Number(num1) && Number(num3) > Number(num1)) {
        console.log("El numero mayor es "+num3);
    }
}