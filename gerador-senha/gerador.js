const chamarsenha = document.querySelector("#texto1")
const ListadeSenhas = document.querySelector("#texto2")
const botaoRegular = document.querySelector("#botao1")
const botaoPrioridade = document.querySelector("#botao2")

let contadorRegular = 0;
let contadorRegularNeg = 0;
let contadorPrioridade = 0;

botaoRegular.addEventListener("click", (event) => {
    contadorRegular++
    chamarsenha.innerHTML = "R" + contadorRegular
    let li = document.createElement("li")
    li.textContent = "R" + contadorRegular
    ListadeSenhas.appendChild(li)
    ListadeSenhas.insertBefore(li, ListadeSenhas.children[0])

});

botaoPrioridade.addEventListener("click", (event) => {
    contadorPrioridade++
    chamarsenha.innerHTML = "P" + contadorPrioridade
    let li = document.createElement("li")
    li.textContent = "P" + contadorPrioridade
    ListadeSenhas.appendChild(li)
    ListadeSenhas.insertBefore(li, ListadeSenhas.children[0])
});