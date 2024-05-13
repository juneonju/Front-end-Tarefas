const divLancamentos = document.querySelector("#posters-novos-filmes")

window.onload =  buscar();

function buscar(){

    let caminhoIMG2 = "https://media.themoviedb.org/t/p/w200";

    let url2 = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

    let request = new XMLHttpRequest();
    request.open("GET", url2, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmMwY2VhZDUzN2RjYTVlZGQ0ZWZmMzUyNjJiOTBmZSIsInN1YiI6IjY2Mzk1ZTAxYzYxNmFjMDEyYTFiZDQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vdUNpwn5h4ADOUT-5kYClJb2fc0GckzXoSWzcZkc5Q0');
    request.send();
    console.log(url2);

    let lista1 = JSON.parse(request.response);
    console.log(lista1);

    for (let index = 0; index < lista1.results.length; index++) {
        let poster2 = document.createElement("img");
        poster2.src = caminhoIMG2 + lista1.results[index].poster_path;
        
        divLancamentos.appendChild(poster2)

    }
}