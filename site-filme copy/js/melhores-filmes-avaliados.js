const areaImg = document.querySelector('#div-poster-titulo');
const img = document.querySelector('#posterImage');
const titulo = document.querySelector('#titulo-filme')
const main5 = document.querySelector("main")

let listaPoster = [];
let listaTitulos = [];
let contador = 0;
let contador2 = 0;

window.onload =  buscar();

function buscar(){

    let caminhoIMG = "https://media.themoviedb.org/t/p/w200";

    let url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200";

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmMwY2VhZDUzN2RjYTVlZGQ0ZWZmMzUyNjJiOTBmZSIsInN1YiI6IjY2Mzk1ZTAxYzYxNmFjMDEyYTFiZDQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vdUNpwn5h4ADOUT-5kYClJb2fc0GckzXoSWzcZkc5Q0');
    request.send();
    console.log(url);

    let lista = JSON.parse(request.response);
    console.log(lista);

    for (let index = 0; index < lista.results.length; index++) {
        let poster2 = document.createElement("img");
        poster2.src = caminhoIMG + lista.results[index].poster_path;
        let titulos2 = document.createElement("h3");
        titulos2.className = "titulos";
        titulos2.textContent = lista.results[index].title;
        
        listaPoster.push(poster2);
        listaTitulos.push(titulos2);

    }

    img.src = listaPoster[0].src;
        setInterval(() => {
        if (contador >= listaPoster.length) {
            contador = 0;
        }
        img.src = listaPoster[contador].src;
        contador++;
    }, 3000);

    titulo.textContent = listaTitulos[0].textContent
        setInterval(() => {
            if (contador2 >= listaTitulos.length) {
                contador2 = 0;
            }
            titulo.textContent = listaTitulos[contador2].textContent;
            contador2++;
        }, 3000);

}
