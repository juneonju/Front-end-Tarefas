const nomeContato = document.querySelector("#nomeContato");
const emailContato = document.querySelector("#emailContato");
const telefoneContato = document.querySelector("#telefoneContato");
const cepContato = document.querySelector("#cepContato");
const ruaContato = document.querySelector("#ruaContato");
const numerocasaContato = document.querySelector("#numerocasaContato");
const dataConsulta = document.querySelector("#dataConsulta");
const planoSelecao = document.querySelector("#planoSelecao");
const botaoEnviar = document.querySelector("#botaoEnviar");
const mensagem = document.querySelector("#mensagemAgendamento")

cepContato.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        let url = "https://viacep.com.br/ws/" + cepContato.value + "/json";

        let request = new XMLHttpRequest();
        request.open("GET", url, false);
        request.send();
        
        let endereco = JSON.parse(request.response);
        console.log(endereco)
        ruaContato.value = endereco.logradouro;
        numerocasaContato.value = endereco.bairro;

    }
     
});

botaoEnviar.addEventListener("click", (event) => {
    if((nomeContato.value === "") || (emailContato.value === "") || (telefoneContato.value === "") 
    || (cepContato.value === "") || (ruaContato.value === "") || (numerocasaContato.value === "")
    || (dataConsulta.value === "") || (especialidadeSelecao.value === "")
    || (medicoSelecao.value === "") || (planoSelecao.value === "")){
        
        mensagem.innerHTML = "Existem campos vazios."
    }else{
        mensagem.innerHTML = "Agendamento concluido."
    }
});

const selectEsp = document.querySelector("#especialidadeSelecao")
const selectMed = document.querySelector("#medicoSelecao")

let geral = ["Julio"]
let nutricionista = ["Carla", "Carlos", "Cecilia", "Carol"]
let oftamologista = ["Roberto", "Roberta", "Renato"]
let cardiologista = ["Cicero", "Eduardo"]

selectEsp.addEventListener("change", (event) => {
    limparSelect()
    if(selectEsp !== ""){
        if(selectEsp.value === "Geral"){
            preencherSelect(geral)
        }else if(selectEsp.value === "nutri"){
            preencherSelect(nutricionista)
        }else if(selectEsp.value === "ofta"){
            preencherSelect(oftamologista)
        }else if(selectEsp.value === "cardio"){
            preencherSelect(cardiologista)
        }else{
            alert("error")
        }
    }
});

function preencherSelect(selecionarMedicos){
    for (let index = 0; index < selecionarMedicos.length; index++) {
        let option = document.createElement("option");
        option.textContent = selecionarMedicos[index];
        selectMed.appendChild(option);
        
    }
}

function limparSelect(){
    selectMed.innerHTML = "";
}