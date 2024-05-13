const divSeriesPopulares = document.querySelector("#posters-series-populares")

window.onload =  buscar();

function buscar(){

    let caminhoIMG = "https://media.themoviedb.org/t/p/w200";

    let url2 = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';

    let request = new XMLHttpRequest();
    request.open("GET", url2, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmMwY2VhZDUzN2RjYTVlZGQ0ZWZmMzUyNjJiOTBmZSIsInN1YiI6IjY2Mzk1ZTAxYzYxNmFjMDEyYTFiZDQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vdUNpwn5h4ADOUT-5kYClJb2fc0GckzXoSWzcZkc5Q0');
    request.send();
    console.log(url2);

    let lista1 = JSON.parse(request.response);
    console.log(lista1);

    for (let index = 0; index < lista1.results.length; index++) {
        let poster = document.createElement("img");
        poster.src = caminhoIMG + lista1.results[index].poster_path;
        
        divSeriesPopulares.appendChild(poster)
    }
}