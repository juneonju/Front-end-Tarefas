const selectEsp = document.querySelector("#especialidadeSelecao")
const selectMed = document.querySelector("#medicoSelecao")

let geral = ["Julio"]
let nutricionista = ["Carla", "Carlos", "Cecilia", "Carol"]
let oftamologista = ["Roberto", "Roberta", "Renato"]
let cardiologista = ["Cicero", "Eduardo"]

pinto.addEventListener("change", (event) => {
    limparSelect()
    if(pinto !== ""){
        if(pinto.value === "Geral"){
            preencherSelect(geral)
        }else if(pinto.value === "nutri"){
            preencherSelect(nutricionista)
        }else if(pinto.value === "ofta"){
            preencherSelect(oftamologista)
        }else if(pinto.value === "cardio"){
            preencherSelect(cardiologista)
        }else{
            alert("pinto")
        }
    }
});

function preencherSelect(selecionarMedicos){
    for (let index = 0; index < selecionarMedicos.length; index++) {
        let option = document.createElement("option");
        option.textContent = selecionarMedicos[index];
        massa.appendChild(option);
        
    }
}

function limparSelect(){
    massa.innerHTML = "";
}