const fotos = document.querySelectorAll(".fotos img")
const imagemnova = document.querySelector("#imagemfull")
const botao1 = document.querySelector("#botao1")
const botao2 = document.querySelector("#botao2")

var contador = 0

imagemnova.src = fotos[0].src;


for (let index = 0; index < fotos.length; index++) {

    fotos[index].addEventListener("click", (event) => {

        imagemnova.src = fotos[index].src
        
    });
    
}

    botao1.addEventListener("click", (event) =>{

        if (contador > 0){

            contador--;
            imagemnova.src = fotos[contador].src;
    
        }

    });



    botao2.addEventListener("click", (event) =>{
        
        if (contador < fotos.length -1){

            contador++;
            imagemnova.src = fotos[contador].src;
    
        }
        
    });
