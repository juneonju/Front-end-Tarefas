const botao = document.querySelector("#botao")
const areaImg = document.querySelector("#area-img")


window.onload =  buscar()

function buscar(){

    let url1 = "https://media.themoviedb.org/t/p/w200"

    let url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmMwY2VhZDUzN2RjYTVlZGQ0ZWZmMzUyNjJiOTBmZSIsInN1YiI6IjY2Mzk1ZTAxYzYxNmFjMDEyYTFiZDQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vdUNpwn5h4ADOUT-5kYClJb2fc0GckzXoSWzcZkc5Q0');
    request.send();
    console.log(url);

    let lista = JSON.parse(request.response)
    console.log(lista)

    for (let index = 0; index < lista.results.length; index++) {
        let poster = document.createElement("img")
        poster.className = "imgPadrao"
        let divInfo = document.createElement("div")
        poster.src = url1 + lista.results[index].poster_path

        divInfo.appendChild(poster)
        areaImg.appendChild(divInfo)

        botao.addEventListener('click', (event) => {

        });
        
    }
}
  