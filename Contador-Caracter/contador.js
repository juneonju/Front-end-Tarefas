const txtArea = document.querySelector("#areatexto")
const caracter = document.querySelector("#caracteres")
const caracter2 = document.querySelector("#menos")
const texto = document.querySelector("#texto")

txtArea.addEventListener("input", (event) => {

    let qtdcaracter = txtArea.value.length;
    let limite = 100 - qtdcaracter
    caracter.innerHTML = limite

        if (caracter.innerHTML == false){

            texto.innerHTML = "você atingiu o maximo de caracteres"

        }else{

            texto.innerHTML = ""

        }
        if(caracter.innerHTML == 0){
            caracter.innerhtml =""
        }

});