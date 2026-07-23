const prompt = require("prompt-sync")();


let num1 = parseFloat(prompt("Escribe el primer número: "));
let num2 = parseFloat(prompt("Escribe el segundo número: "));
let num3 = parseFloat(prompt("Escribe el tercer numero: "));

if(num1 == num2 && num1 == num3) {
    console.log("Todos los números son iguales.")

} else if (num1 >= num2 && num1 >= num3) {

    if(num2 >= num3) {
        console.log("Mayor a menor: " + num1 + ", " + num2 + ", " + num3);
        console.log("Menor a mayor: " + num3 + ", " + num2 + ", " + num1);

    } else {
        console.log("Mayor a menor: " + num1 + ", " + num3 + ", " + num2);
        console.log("Menor a mayor: " + num2 + ", " + num3 + ", " + num1);
    }
} else if (num2 >= num1 && num2 >= num3){

    if (num1 >= num3) {
        console.log("Mayor a menor: " + num2 + ", " + num1 + ", " + num3);
        console.log("Menor a mayor: " + num3 + ", " + num1 + ", " + num2);

    }else {
        console.log("Mayor a menor: " + num2 + ", " + num3 + ", " + num1);
        console.log("Menor a mayor: " + num1 + ", " + num3 + ", " + num2);
    }

} else {

    if (num1 >= num2) {
        console.log("Mayor a menor: " + num3 + ", " + num1 + ", " + num2);
        console.log("Menor a mayor: " + num2 + ", " + num1 + ", " + num3);
    } else {
        console.log("Mayor a menor: " + num3 + ", " + num2 + ", " + num1);
        console.log("Menor a mayor: " + num1 + ", " + num2 + ", " + num3);
    }
}

