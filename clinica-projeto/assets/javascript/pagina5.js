//Aqui eu vou definir a maioria das variaveis que vou utilizar na maior parte do codigo
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
const selectEsp = document.querySelector("#especialidadeSelecao")
const selectMed = document.querySelector("#medicoSelecao")

//Esse é um evento pra algumas partes do endereço serem preenchidas automaticamente depois que o CEP for digitado e o usuario apertar Enter
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

//Esse é um evento que enviaria as informações de agendamento logo após todos os campos obrigatorio serem preenchidos, e se eles não forem, ira notificar o usuario
botaoEnviar.addEventListener("click", (event) => {
    if((nomeContato.value === "") || (emailContato.value === "") || (telefoneContato.value === "") 
    || (cepContato.value === "") || (ruaContato.value === "") || (numerocasaContato.value === "")
    || (dataConsulta.value === "") || (selectEsp.value === "")
    || (selectMed.value === "") || (planoSelecao.value === "")){
        
        mensagem.innerHTML = "Existem campos vazios."
    }else{
        mensagem.innerHTML = "Agendamento concluido."
    }
});


//Essa é a parte onde preencho o select de opções de medicos a partir da especialidade escolhida pelo usuario

//Opções de Medicos
let geral = ["Julio"]
let nutricionista = ["Carla", "Carlos", "Cecilia", "Carol"]
let oftamologista = ["Roberto", "Roberta", "Renato"]
let cardiologista = ["Cicero", "Eduardo"]
let opcao = ["Selecione um medico"]

//Esse evento vai indicar as especialidades que cada medico atua e preencher o select de medicos de acordo com a especialidade
selectEsp.addEventListener("change", (event) => {
    limparSelect()
    if(selectEsp !== ""){
        if(selectEsp.value === "geral"){
            preencherSelect(opcao)
            preencherSelect(geral)
        }else if(selectEsp.value === "nutri"){
            preencherSelect(opcao)
            preencherSelect(nutricionista)
        }else if(selectEsp.value === "ofta"){
            preencherSelect(opcao)
            preencherSelect(oftamologista)
        }else if(selectEsp.value === "cardio"){
            preencherSelect(opcao)
            preencherSelect(cardiologista)
        }else{
            alert("error")
        }
    }
});

//Função pra preencher o select de Medicos com options 
function preencherSelect(selecionarMedicos){
    for (let index = 0; index < selecionarMedicos.length; index++) {
        let option = document.createElement("option");
        option.textContent = selecionarMedicos[index];
        selectMed.appendChild(option);
        
    }
}

//Isso serve pra apagar options antigas do select de Plano de Saude
function limparSelect(){
    selectMed.innerHTML = "";
}

//Depois de preencher o select com opções de medicos, eu vou preencher o select do plano de cada respectivo medico no select plano com a opção de medico que o usuario solicitar

//Opções de planos de saude
let sus = ["SUS"]
let hapvida = ["Hapvida"]
let unimed = ["Unimed"]
let smile = ["Smile"]

//Esse evento vai indicar qual é o plano de saude que cada medico atende
selectMed.addEventListener("change", (event) => {
    limparSelect2()
    if(selectMed !== ""){
        if(selectMed.value == "Julio"){
            preencherSelect2(sus)
        }else if(selectMed.value == "Carla"){
            preencherSelect2(unimed)
        }else if(selectMed.value == "Carlos"){
            preencherSelect2(hapvida)
        }else if(selectMed.value == "Cecilia"){
            preencherSelect2(sus)
        }else if(selectMed.value == "Carol"){
            preencherSelect2(smile)
        }else if(selectMed.value == "Roberto"){
            preencherSelect2(sus)
        }else if(selectMed.value == "Roberta"){
            preencherSelect2(unimed)
        }else if(selectMed.value == "Renato"){
            preencherSelect2(smile)
        }else if(selectMed.value == "Cicero"){
            preencherSelect2(sus)
        }else if(selectMed.value == "Eduardo"){
            preencherSelect2(smile)
        }else{
            alert("error")
        }
    }
});

//Função pra preencher o select de Plano de Saude com options 
function preencherSelect2(selecionarPlano){
    for (let index = 0; index < selecionarPlano.length; index++) {
        let option2 = document.createElement("option");
        option2.textContent = selecionarPlano[index];
        planoSelecao.appendChild(option2);
        
    }
}

//Isso serve pra apagar options antigas do select de Plano de Saude
function limparSelect2(){
    planoSelecao.innerHTML = "";
}