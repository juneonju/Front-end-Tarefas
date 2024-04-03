const nomeContato = document.querySelector("#nomeContato");
const emailContato = document.querySelector("#emailContato");
const telefoneContato = document.querySelector("#telefoneContato");
const cepContato = document.querySelector("#cepContato");
const ruaContato = document.querySelector("#ruaContato");
const numerocasaContato = document.querySelector("#numerocasaContato");
const dataConsulta = document.querySelector("#dataConsulta");
const especialidadeSelecao = document.querySelector("#especialidadeSelecao");
const medicoSelecao = document.querySelector("#medicoSelecao");
const planoSelecao = document.querySelector("#planoSelecao");
const botaoEnviar = document.querySelector("#botaoEnviar");

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
        alert("você não vai ser atendido em")
    }else{
        alert("você vai ser atendido meu mano")
    }
});

var especialidade = {
    "especialidades": [
        {"sigla": "Geral", "nome": "Clinico Geral", "medicos": ["julio"]},
        {"sigla": "nutri", "nome": "nutricionista", "medicos": ["carla", "carlos", "cecilia", "carol"]},
        {"sigla": "ofta", "nome": "Oftamologista", "medicos": ["roberto", "roberta", "renato"]},
        {"sigla": "cardio", "nome": "Cardiologista", "medicos": ["cicero", "eduardo"]}
    ]};

function buscaMedicos(e){
    document.querySelector("#medicoSelecao").innerHTML = '';
    var medico_select = document.querySelector("#medicoSelecao");
     
    var num_especialidades = especialidade.especialidades.length;
    var j_index = -1;
     
    for(var x=0;x<num_especialidades;x++){
           if(especialidade.especialidades[x].sigla == e){
              j_index = x;
           }
    }
     
    if(j_index != -1){
        
        especialidade.especialidades[j_index].medicos.forEach(function(medicoSelecao){
            var med_opts = document.createElement("option");
            med_opts.setAttribute('value',medicoSelecao);
            med_opts.innerHTML = medicoSelecao;
            medico_select.appendChild(med_opts);
        });
    }else{
            document.querySelector("#medicoSelecao").innerHTML = '';
    }
}