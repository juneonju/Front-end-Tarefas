const botao = document.querySelector("#botaoEnviar")
const textoCidade = document.querySelector("#inputCidade")
const temperatura = document.querySelector("#temperatura")
const sensacaoTermica = document.querySelector("#sensacaoTermica")
const temperaturaMaxima = document.querySelector("#temperaturaMaxima")
const temperaturaMinima = document.querySelector("#temperaturaMinima")
const velocidadeVento = document.querySelector("#velocidadeVento")
const umidadeAr = document.querySelector("#umidadeAr")

botao.addEventListener("click", (event) => {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + textoCidade.value + "&units=metric&appid=f0343e46279876f26557d325a22b7e84";

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();

    let dado = JSON.parse(request.response);
    console.log(dado)

    temperatura.innerHTML = "Temperatura: " + dado.main.temp + "°C"
    sensacaoTermica.innerHTML = "Sensação Termica: " + dado.main.feels_like + "°C"
    temperaturaMaxima.innerHTML = "Temperatura Maxima: " + dado.main.temp_max + "°C"
    temperaturaMinima.innerHTML = "Temperatura Minima: " + dado.main.temp_min + "°C"
    velocidadeVento.innerHTML = "Velocidade do vento: " + dado.wind.speed + " km/h"
    umidadeAr.innerHTML = "Umidade do ar: " + dado.main.humidity + "%"
})