const chamarsenha = document.querySelector("#texto1")
const ListadeSenhas = document.querySelector("#texto2")
const botaoRegular = document.querySelector("#botao1")
const botaoPrioridade = document.querySelector("#botao2")

let contadorRegular = 0;
let contadorPrioridade = 0;

botaoRegular.addEventListener("click", (event) => {
    botaoRegular.disabled = true;
    contadorRegular++
    chamarsenha.innerHTML = "R" + contadorRegular
    let li = document.createElement("li")
    li.textContent = "R" + contadorRegular
    ListadeSenhas.appendChild(li)
    ListadeSenhas.insertBefore(li, ListadeSenhas.children[0])
    let falarRegular = document.createElement("textarea");
    falarRegular.textContent = "Regular" + contadorRegular;
    var voz = new SpeechSynthesisUtterance(falarRegular.value);
    speechSynthesis.speak(voz);
    setTimeout(() => {
        botaoRegular.disabled = false;
    }, 2000);

});

botaoPrioridade.addEventListener("click", (event) => {
    botaoPrioridade.disabled = true;
    contadorPrioridade++
    chamarsenha.innerHTML = "P" + contadorPrioridade
    let li = document.createElement("li")
    li.textContent = "P" + contadorPrioridade
    ListadeSenhas.appendChild(li)
    ListadeSenhas.insertBefore(li, ListadeSenhas.children[0])
    let falarPrioridade = document.createElement("textarea");
    falarPrioridade.textContent = "prioridade" + contadorPrioridade;
    var voz = new SpeechSynthesisUtterance(falarPrioridade.value);
    speechSynthesis.speak(voz);
    setTimeout(() => {
        botaoPrioridade.disabled = false;
    }, 2000);
});
