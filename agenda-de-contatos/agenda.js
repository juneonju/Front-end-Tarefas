const botaoNovo = document.querySelector("#botaoNovo");
const botaoSalvar = document.querySelector("#botaoSalvar");
const nome = document.querySelector("#nome1")
const email = document.querySelector("#email1")
const telefone = document.querySelector("#telefone1")
const tabela = document.querySelector("#tabela1")
const botaoSalvar2 = document.querySelector("#botaoSalvar2")
const nomeEditado = document.querySelector("#nome3")
const emailEditado = document.querySelector("#email3")
const telefoneEditado = document.querySelector("#telefone3")


botaoNovo.addEventListener("click", (event) => {
    modal.style.display = "flex";
});
botaoSalvar.addEventListener("click", (event) => {
    let linha = document.createElement("tr")
    tabela.appendChild(linha)

    let nome2 = document.createElement("td")
    nome2.className = "cabecalho"
    nome2.textContent = nome.value  
    linha.appendChild(nome2) 

    let email2 = document.createElement("td")
    email2.className = "cabecalho"
    email2.textContent = email.value  
    linha.appendChild(email2)

    let telefone2 = document.createElement("td")
    telefone2.className = "cabecalho"
    telefone2.textContent = telefone.value  
    linha.appendChild(telefone2)

    let botaoEditar = document.createElement("td")
    botaoEditar.className = "botaoMudança"
    botaoEditar.innerHTML = "Editar"
    linha.appendChild(botaoEditar)

    let botaoExcluir = document.createElement("td")
    botaoExcluir.className = "botaoMudança"
    botaoExcluir.innerHTML = "Excluir"
    linha.appendChild(botaoExcluir)
    modal.style.display = "none";

    botaoExcluir.onclick = function(){
        nome2.remove()
        email2.remove()
        telefone2.remove()
        botaoEditar.remove()
        botaoExcluir.remove()
    }
    
    botaoEditar.onclick = function(){
        modal2.style.display = "flex";
    }
    botaoSalvar2.onclick = function(){
        nome2.textContent = nomeEditado.value 
        linha.appendChild(nome2)

        email2.textContent = emailEditado.value  
        linha.appendChild(email2)

        telefone2.textContent = telefoneEditado.value  
        linha.appendChild(telefone2)

        botaoEditar.className = "botaoMudança"
        botaoEditar.innerHTML = "Editar"
        linha.appendChild(botaoEditar)

        botaoExcluir.className = "botaoMudança"
        botaoExcluir.innerHTML = "Excluir"
        linha.appendChild(botaoExcluir)

        modal2.style.display = "none";
    }
});