const botao = document.querySelector("#botaoProcurar");
const veiculo = document.querySelector("#veiculo");
const marca = document.querySelector("#marca");
const modelo = document.querySelector("#modelo");
const anoVeiculo = document.querySelector("#anoVeiculo");

veiculo.addEventListener("change", (event) => {
    let url = "https://parallelum.com.br/fipe/api/v1/" + veiculo.value + "/marcas"; 

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    console.log(url)
    let marcas = JSON.parse(request.response);
    console.log(marcas)

    marca.innerHTML = ""

    for (let index = 0; index < marcas.length; index++) {
         let option = document.createElement("option");
         option.textContent = marcas[index].nome;
         option.value = marcas[index].codigo;
         marca.appendChild(option);
        
    }
});

marca.addEventListener("change", (event) => {
    let url2 = "https://parallelum.com.br/fipe/api/v1/" + veiculo.value + "/marcas/" + marca.value + "/modelos";

    let request2 = new XMLHttpRequest();
    request2.open("GET", url2, false);
    request2.send();
    console.log(url2)
    let modelos = JSON.parse(request2.response);
    console.log(modelos)

    modelo.innerHTML = ""

    for (let index = 0; index < modelos.modelos.length; index++) {
        let option2 = document.createElement("option");
        option2.textContent = modelos.modelos[index].nome;
        option2.value = modelos.modelos[index].codigo;
        modelo.appendChild(option2);
       
   }

});

modelo.addEventListener("change", (event) => {
    let url3 = "https://parallelum.com.br/fipe/api/v1/" + veiculo.value + "/marcas/" + marca.value + "/modelos/" + modelo.value + "/anos";

    let request3 = new XMLHttpRequest();
    request3.open("GET", url3, false);
    request3.send();
    console.log(url3)
    let modelosAnos = JSON.parse(request3.response);
    console.log(modelosAnos)
    anoVeiculo.innerHTML = ""

    for (let index = 0; index < modelosAnos.length; index++) {
        let option3 = document.createElement("option");
        option3.textContent =  modelosAnos[index].nome;
        option3.value =  modelosAnos[index].codigo;
        anoVeiculo.appendChild(option3);
       
   }

});

botao.addEventListener("click", (event) => {
    
});
