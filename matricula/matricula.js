const botao = document.querySelector("#botao")
const pergunta = document.querySelector("#matricula")
const tabela = document.querySelector("#tabela")


botao.addEventListener("click", (event) => {
    if(pergunta.value == ""){
        alert("Você não digitou sua matricula.")
    }else{
    let linha = document.createElement("tr")
    linha.className = "cabecalho"
    tabela.appendChild(linha)
    let matricula = document.createElement("td")
    matricula.className = "cabecalho"
    linha.appendChild(matricula)
    let data = document.createElement("td")
    data.className = "cabecalho"
    linha.appendChild(data)
    let hora = document.createElement("td")
    hora.className = "cabecalho"
    linha.appendChild(hora)
    const dataAtual = new Date();
    let valor = document.createElement("tr")
    valor.textContent = pergunta.value  
    matricula.appendChild(valor)
    let data2 = document.createElement("tr")
    data2.textContent = dataAtual.toLocaleDateString()
    data.appendChild(data2)
    let hora2 = document.createElement("tr")
    hora2.textContent = dataAtual.toLocaleTimeString()
    hora.appendChild(hora2)
    }
});