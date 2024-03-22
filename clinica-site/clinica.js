const relogio = setInterval(function time() {

    let hora = document.querySelector("#hora")

    const dataAtual = new Date();

    let horaAtual = dataAtual.toLocaleTimeString()  

    hora.innerHTML = horaAtual
    
});
