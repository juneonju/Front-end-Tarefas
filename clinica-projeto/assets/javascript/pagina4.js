//Todas as variaveis de campos preenchiveis ou funções clickaveis para usuarios
const nome = document.querySelector("#nomeContatoFormulario")
const email = document.querySelector("#emailContatoFormulario")
const texto = document.querySelector("#areaTextoContatoFormulario")
const botao = document.querySelector("#botaoEnviarContatoFormulario")
const mensagem = document.querySelector("#mensagemConfirmar")

//Evento que vai enviar informações de contato para a clinica
botao.addEventListener("click", (event) => {
    if((nome.value !== "") || (email.value !== "") || (texto.value !== "")){
        mensagem.innerHTML = "Obrigado pelo contato."
    }else{
        mensagem.innerHTML = "Campos vazios!"
    }
});