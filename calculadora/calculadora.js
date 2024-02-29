const valor1 = document.querySelector("#n1");
const valor2 = document.querySelector("#n2");
const botao1 = document.querySelector("#soma");
const botao2 = document.querySelector("#sub");
const botao3 = document.querySelector("#div");
const botao4 = document.querySelector("#mult");
const txtResultado = document.querySelector("#resultado");

botao1.addEventListener("click", (event) => {
    let numero1 = Number(valor1.value);
    let numero2 = Number(valor2.value);
    let resultado = numero1 + numero2;

    txtResultado.textContent = resultado;

});

botao2.addEventListener("click", (event) => {
    let numero1 = Number(valor1.value);
    let numero2 = Number(valor2.value);
    let resultado = numero1 - numero2;

    txtResultado.textContent = resultado;

});

botao3.addEventListener("click", (event) => {
    let numero1 = Number(valor1.value);
    let numero2 = Number(valor2.value);
    let resultado = numero1 / numero2;

    txtResultado.textContent = resultado;

});

botao4.addEventListener("click", (event) => {
    let numero1 = Number(valor1.value);
    let numero2 = Number(valor2.value);
    let resultado = numero1 * numero2;

    txtResultado.textContent = resultado;

});