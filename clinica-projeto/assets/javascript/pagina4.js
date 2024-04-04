const nome = document.querySelector("#nomeContatoFormulario")
const email = document.querySelector("#emailContatoFormulario")
const texto = document.querySelector("#areaTextoContatoFormulario")
const botao = document.querySelector("#botaoEnviarContatoFormulario")
const mensagem = document.querySelector("#mensagemConfirmar")

botao.addEventListener("click", (event) => {
    if((nome.value !== "") || (email.value !== "") || (texto.value !== "")){
        mensagem.innerHTML = "Obrigado pelo contato."
    }else{
        mensagem.innerHTML = "Campos vazios!"
    }
});