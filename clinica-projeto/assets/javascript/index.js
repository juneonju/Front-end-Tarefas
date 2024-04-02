const relogio = setInterval(function time() {

    let hora = document.querySelector("#hora")

    const dataAtual = new Date();

    let horaAtual = dataAtual.toLocaleTimeString()  

    hora.innerHTML = horaAtual
    
});

const nomeContato = document.querySelector("#nomeContato")
const emailContato = document.querySelector("#emailContato")
const telefoneContato = document.querySelector("#telefoneContato")
const cepContato = document.querySelector("#cepContato")
const ruaContato = document.querySelector("#ruaContato")
const numerocasaContato = document.querySelector("#numerocasaContato")
const complementoContato = document.querySelector("#complementoContato")
const dataConsulta = document.querySelector("#dataConsulta")
const especialidadeSelecao = document.querySelector("#especialidadeSelecao")
const medicoSelecao = document.querySelector("#medicoSelecao")
const planoSelecao = document.querySelector("#planoSelecao")
const botaoEnviar = document.querySelector("#botaoEnviar")

botaoEnviar.addEventListener("click", (event) => {
    if((nomeContato.value === "") || (emailContato.value === "") || (telefoneContato.value === "") || (cepContato.value === "") || (ruaContato.value === "") || (numerocasaContato.value === "") || (complementoContato.value === "") || (dataConsulta.value === "") || (especialidadeSelecao.value === "") || (medicoSelecao.value === "") || (planoSelecao.value === "")){
        alert("você não vai ser atendido em")
    }else{
        alert("você vai ser atendido meu mano")
    }
});

const especialidadeEscolha = document.querySelector("especialidadeEscolha")

especialidadeEscolha.addEventListener("click", (event) => {
    
    if(especialidadeEscolha.value == "geralValor"){
        tabela2.style.display = "flexbox";
    }else if(especialidadeEscolha.value == "nutricionistaValor"){
        tabela3.style.display = "flexbox";
    }else if(especialidadeEscolha.value == "oftamologistaValor"){
        tabela4.style.display = "flexbox";
    }else if(especialidadeEscolha.value == "cardiologiaValor"){
        tabela5.style.display = "flexbox";
    }else{
        alert("ta dando errado")
    }
});