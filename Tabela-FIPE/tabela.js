const botao = document.querySelector("#botaoProcurar");
const veiculo = document.querySelector("#veiculo");
const marca = document.querySelector("#marca");
const modelo = document.querySelector("#modelo");
const anoVeiculo = document.querySelector("#anoVeiculo");
const marca2 = document.querySelector("#marca2")
const modelo2 = document.querySelector("#modelo2")
const codigo2 = document.querySelector("#codigo2")
const ano2 = document.querySelector("#ano2")
const referencia2 = document.querySelector("#referencia2")
const valor = document.querySelector("#valor")

veiculo.addEventListener("change", (event) => {
    let url = "https://parallelum.com.br/fipe/api/v1/" + veiculo.value + "/marcas"; 

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    console.log(url)
    let marcas = JSON.parse(request.response);
    console.log(marcas)

    marca.innerHTML = ""

    let optionA = document.createElement("option");
    optionA.textContent = "Selecione a Marca do Veiculo"
    marca.appendChild(optionA)
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

    let optionB = document.createElement("option");
    optionB.textContent = "Selecione o Modelo do Veiculo"
    modelo.appendChild(optionB)

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

    let optionC = document.createElement("option");
    optionC.textContent = "Selecione o Ano do Veiculo"
    anoVeiculo.appendChild(optionC)

    for (let index = 0; index < modelosAnos.length; index++) {
        let option3 = document.createElement("option");
        option3.textContent =  modelosAnos[index].nome;
        option3.value =  modelosAnos[index].codigo;
        anoVeiculo.appendChild(option3);
       
   }

});

botao.addEventListener("click", (event) => {
    let url4 = "https://parallelum.com.br/fipe/api/v1/" + veiculo.value + "/marcas/" + marca.value + "/modelos/" + modelo.value + "/anos/" + anoVeiculo.value;

    let request4 = new XMLHttpRequest();
    request4.open("GET", url4, false);
    request4.send();
    let informacoes = JSON.parse(request4.response);
    console.log(informacoes)

    marca2.innerHTML = "Marca: " + informacoes.Marca
    modelo2.innerHTML = "Modelo: " + informacoes.Modelo
    codigo2.innerHTML = "Código FIPE: " + informacoes.CodigoFipe
    ano2.innerHTML = "Ano: " + informacoes.AnoModelo + " " + informacoes.Combustivel
    referencia2.innerHTML = "Referencia FIPE: " + informacoes.MesReferencia
    valor.innerHTML = "Valor: " + informacoes.Valor
    
});
