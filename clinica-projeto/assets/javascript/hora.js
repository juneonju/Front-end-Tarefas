//Essa é uma função que fiz para um relogio no site que mostra o horario em tempo real
const relogio = setInterval(function time() {

    let hora = document.querySelector("#hora")

    const dataAtual = new Date();

    let horaAtual = dataAtual.toLocaleTimeString()  

    hora.innerHTML = horaAtual
    
});