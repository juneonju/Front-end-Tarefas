const areaImg = document.querySelector('#div-poster-titulo');
const img = document.querySelector('#imgPadrao');
const titulo = document.querySelector('#titulo-filme')

let listaPoster = [];
let listaTitulos = [];
let contador = 0;
let contador2 = 0;

window.onload =  buscar();

function buscar(){

    let caminhoIMG = "https://media.themoviedb.org/t/p/w200";

    let url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmMwY2VhZDUzN2RjYTVlZGQ0ZWZmMzUyNjJiOTBmZSIsInN1YiI6IjY2Mzk1ZTAxYzYxNmFjMDEyYTFiZDQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vdUNpwn5h4ADOUT-5kYClJb2fc0GckzXoSWzcZkc5Q0');
    request.send();
    console.log(url);

    let lista = JSON.parse(request.response);
    console.log(lista);

    for (let index = 0; index < lista.results.length; index++) {
        let poster = document.createElement("img");
        poster.src = caminhoIMG + lista.results[index].poster_path;
        
        listaPoster.push(poster);

    }

    img.src = listaPoster[0].src;
        setInterval(() => {
        if (contador >= listaPoster.length) {
            contador = 0;
        }
        img.src = listaPoster[contador].src;
        contador++;
    }, 3000);


    for (let index = 0; index < lista.results.length; index++) {
        let titulos = document.createElement("h3");
        titulos.className = "titulos";
        titulos.textContent = lista.results[index].title;

        listaTitulos.push(titulos);
        
    }

    titulo.textContent = listaTitulos[0].textContent
        setInterval(() => {
            if (contador2 >= listaTitulos.length) {
                contador2 = 0;
            }
            titulo.textContent = listaTitulos[contador2].textContent;
            contador2++;
        }, 3000);

}
  