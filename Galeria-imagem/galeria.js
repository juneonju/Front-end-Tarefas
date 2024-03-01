const botao1 = document.querySelector("#foto1")
const botao2 = document.querySelector("#foto2")
const botao3 = document.querySelector("#foto3")
const botao4 = document.querySelector("#foto4")
const botao5 = document.querySelector("#foto5")
const imagemnova = document.querySelector("#imagemfull")

botao1.addEventListener("click", (event) => {

    imagemnova.src = botao1.src
    imagemnova.style.display = "block"
    
});

botao2.addEventListener("click", (event) => {

    imagemnova.src = botao2.src
    
});

botao3.addEventListener("click", (event) => {

    imagemnova.src = botao3.src
    
});

botao4.addEventListener("click", (event) => {

    imagemnova.src = botao4.src
    
});

botao5.addEventListener("click", (event) => {

    imagemnova.src = botao5.src
    
});