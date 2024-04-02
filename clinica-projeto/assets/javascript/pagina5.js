const nomeContato = document.querySelector("#nomeContato");
const emailContato = document.querySelector("#emailContato");
const telefoneContato = document.querySelector("#telefoneContato");
const cepContato = document.querySelector("#cepContato");
const ruaContato = document.querySelector("#ruaContato");
const numerocasaContato = document.querySelector("#numerocasaContato");
const complementoContato = document.querySelector("#complementoContato");
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
    || (complementoContato.value === "") || (dataConsulta.value === "") || (especialidadeSelecao.value === "")
    || (medicoSelecao.value === "") || (planoSelecao.value === "")){
        alert("você não vai ser atendido em")
    }else{
        alert("você vai ser atendido meu mano")
    }
});