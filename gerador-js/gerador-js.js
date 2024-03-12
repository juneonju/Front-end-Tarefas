const fundo = document.querySelector("body")
let titulosite = document.createElement("div")
titulosite.id = "titulosite"
fundo.appendChild(titulosite)
let titulosite1 = document.createElement("h1")
titulosite1.textContent = "Gerador de Senha"
titulosite1.id = "titulosite1"
titulosite.appendChild(titulosite1)
let senha = document.createElement("div")
senha.id = "senha"
fundo.appendChild(senha)
let texto = document.createElement("textarea")
texto.disabled = true
texto.id = "texto1"
senha.appendChild(texto)
let Titulo2 = document.createElement("div")
Titulo2.id = "Titulo2"
fundo.appendChild(Titulo2)
let h3 = document.createElement("h3")
h3.textContent = "Ultimas Senhas:"
h3.id = "titulosite2"
Titulo2.appendChild(h3)
let ultimasSenhas = document.createElement("div")
ultimasSenhas.id = "ultimasSenhas"
fundo.appendChild(ultimasSenhas)
let lista = document.createElement("ul")
lista.id = "texto2"
ultimasSenhas.appendChild(lista)
let botoes = document.createElement("div")
botoes.id = "botoes"
fundo.appendChild(botoes)
let botaozinho = document.createElement("button")
botaozinho.textContent = "Gerar Senha"
botaozinho.id = "botao"
botoes.appendChild(botaozinho)

const chamarsenha = document.querySelector("#texto1")
const ListadeSenhas = document.querySelector("#texto2")
const botao = document.querySelector("#botao")

let contadorRegular = 0;
let contadorPrioridade = 0;
let contar = 0;

    botao.addEventListener("click", (event) => {
        if(contar < 3){
                contar++
                botao.disabled = true;
                contadorRegular++;
                chamarsenha.innerHTML = "R" + contadorRegular;
                let li = document.createElement("li");
                li.textContent = "R" + contadorRegular;
                ListadeSenhas.appendChild(li);
                ListadeSenhas.insertBefore(li, ListadeSenhas.children[0]);
                let falarRegular = document.createElement("textarea");
                falarRegular.textContent = "Regular" + contadorRegular;
                var voz = new SpeechSynthesisUtterance(falarRegular.value);
                speechSynthesis.speak(voz);
                setTimeout(() => {
                botao.disabled = false;
                }, 2000);        
        }else{
                contar = 0
                botao.disabled = true;
                contadorPrioridade++;
                chamarsenha.innerHTML = "P" + contadorPrioridade;
                let li = document.createElement("li");
                li.textContent = "P" + contadorPrioridade;
                ListadeSenhas.appendChild(li);
                ListadeSenhas.insertBefore(li, ListadeSenhas.children[0]);
                let falarPrioridade = document.createElement("textarea");
                falarPrioridade.textContent = "prioridade" + contadorPrioridade;
                var voz = new SpeechSynthesisUtterance(falarPrioridade.value);
                speechSynthesis.speak(voz);
                setTimeout(() => {
                botao.disabled = false;
                }, 2000);
        }
});