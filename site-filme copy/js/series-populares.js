const divSeriesPopulares = document.querySelector("#posters-series-populares")
const main2 = document.querySelector("main")

window.onload =  buscar();

function buscar(){

    let caminhoIMG = "https://media.themoviedb.org/t/p/w200";

    let url2 = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';

    let request = new XMLHttpRequest();
    request.open("GET", url2, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmMwY2VhZDUzN2RjYTVlZGQ0ZWZmMzUyNjJiOTBmZSIsInN1YiI6IjY2Mzk1ZTAxYzYxNmFjMDEyYTFiZDQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vdUNpwn5h4ADOUT-5kYClJb2fc0GckzXoSWzcZkc5Q0');
    request.send();
    console.log(url2);

    let lista = JSON.parse(request.response);
    console.log(lista);

    for (let index = 0; index < lista.results.length; index++) {
        let imgModal = document.createElement("img")
        imgModal.src = caminhoIMG + lista.results[index].poster_path;
        let titulos = document.createElement("h1");
        titulos.textContent = lista.results[index].title;
        let textos = document.createElement("h3");
        textos.textContent = lista.results[index].overview;
        let id = document.createElement("h1");
        id.textContent = lista.results[index].id;

        let poster2 = document.createElement("img");
        poster2.src = caminhoIMG + lista.results[index].poster_path;
        divSeriesPopulares.appendChild(poster2)

        let iframe = document.createElement("iframe")
        iframe.id = "iframe"
        let modal = document.createElement("div")
        modal.id = "modal"
        let poster = document.createElement("div")
        poster.id = "poster"
        let tituloFilme = document.createElement("div")
        tituloFilme.id = "tituloFilme"
        let trailer = document.createElement("div")
        trailer.id = "trailer"
        let texto = document.createElement("div")
        texto.id = "texto"
        let botaoFecharDiv = document.createElement("div")
        botaoFecharDiv.id = "botaoFecharDiv"
        let botaoFechar = document.createElement("button")
        botaoFechar.id = "botaoFechar"
        botaoFechar.textContent = "X"

        poster2.addEventListener("click", (event) => {

            function buscarTrailer(idFilme){

                let url = 'https://api.themoviedb.org/3/tv/' + idFilme + '/videos?language=en-US'
                
                let request = new XMLHttpRequest();
                request.open("GET", url, false);
                request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmMwY2VhZDUzN2RjYTVlZGQ0ZWZmMzUyNjJiOTBmZSIsInN1YiI6IjY2Mzk1ZTAxYzYxNmFjMDEyYTFiZDQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vdUNpwn5h4ADOUT-5kYClJb2fc0GckzXoSWzcZkc5Q0');
                request.send();
                let listavideos2 = JSON.parse(request.response);
                console.log(listavideos2);
                
                for (let index = 0; index < listavideos2.results.length; index++) {
                        
                    iframe.src = "http://www.youtube.com/embed/" + listavideos2.results[index].key 
                        
                }
            }

            buscarTrailer(id.textContent)
            modal.style.display = "block"
            main.appendChild(modal)
            modal.appendChild(poster)
            modal.appendChild(tituloFilme)
            modal.appendChild(trailer)
            modal.appendChild(texto)
            modal.appendChild(botaoFecharDiv)
            poster.appendChild(imgModal)
            tituloFilme.appendChild(titulos)
            trailer.appendChild(iframe)
            texto.appendChild(textos)
            botaoFecharDiv.appendChild(botaoFechar)

        });

        botaoFechar.addEventListener("click", (event) => {

            modal.style.display = "none"

        });
    }
}