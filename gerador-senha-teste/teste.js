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