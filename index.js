//1 Capturar los ingresos numéricos - variable
//2 capturo los ingresos de operaciones - variable
//3 ruta del DOM del resultado o visor
//eventos en los botones recolectar 1 y 2

const display = document.getElementById('resultado');
let numero1 = parseInt(document.querySelector('#uno').innerHTML);
let numero2 = parseInt(document.querySelector('#dos').innerHTML);
let numero3 = parseInt(document.querySelector('#tres').innerHTML);
let numero4 = parseInt(document.querySelector('#cuatro').innerHTML);
let numero5 = parseInt(document.querySelector('#cinco').innerHTML);
let numero6 = parseInt(document.querySelector('#seis').innerHTML);
let numero7 = parseInt(document.querySelector('#siete').innerHTML);
let numero8 = parseInt(document.querySelector('#ocho').innerHTML);
let numero9 = parseInt(document.querySelector('#nueve').innerHTML);
let numero0 = parseInt(document.querySelector('#cero').innerHTML);
let operacion = document.querySelector('#mas').innerHTML;

const botonesMenu = document.querySelectorAll(".btn");

botonesMenu.forEach(presionado =>{
    presionado.addEventListener("click", e);

})

function operaciones(op,num1,num2){
    if (op == '+'){ 
        return (num1 + num2)};
}

display.textContent = operaciones(operacion, numero1, numero2);

console.log(botonesMenu);

