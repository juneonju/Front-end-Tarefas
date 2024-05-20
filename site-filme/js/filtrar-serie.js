const pageBackground = document.querySelector("#pagina-background2")
const main = document.querySelector("main")

function filtroFilmes(classificar){

    pageBackground.innerHTML = ""

    let caminhoIMG2 = "https://media.themoviedb.org/t/p/w200";

    let url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=' + classificar.value;

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmMwY2VhZDUzN2RjYTVlZGQ0ZWZmMzUyNjJiOTBmZSIsInN1YiI6IjY2Mzk1ZTAxYzYxNmFjMDEyYTFiZDQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vdUNpwn5h4ADOUT-5kYClJb2fc0GckzXoSWzcZkc5Q0');
    request.send();
    console.log(url);

    let lista1 = JSON.parse(request.response);
    console.log(lista1);

    for (let index = 0; index < lista1.results.length; index++) {
        let poster2 = document.createElement("img");
        poster2.src = caminhoIMG2 + lista1.results[index].poster_path;
        poster2.className = "pointer"
        let titulos = document.createElement("h1");
        titulos.textContent = lista1.results[index].name;
        let textos = document.createElement("h3");
        textos.textContent = lista1.results[index].overview;
        let id = document.createElement("h1");
        id.textContent = lista1.results[index].id;
       
        
        pageBackground.appendChild(poster2)

        let imgModal = document.createElement("img")
        imgModal.src = caminhoIMG2 + lista1.results[index].poster_path;
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
        botaoFechar.className = "pointer"

        poster2.addEventListener("click", (event) => {

            function buscarTrailer(idFilme){

                let url = 'https://api.themoviedb.org/3/tv/' + idFilme + '/videos?language=en-US'
            
                let request = new XMLHttpRequest();
                request.open("GET", url, false);
                request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmMwY2VhZDUzN2RjYTVlZGQ0ZWZmMzUyNjJiOTBmZSIsInN1YiI6IjY2Mzk1ZTAxYzYxNmFjMDEyYTFiZDQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vdUNpwn5h4ADOUT-5kYClJb2fc0GckzXoSWzcZkc5Q0');
                request.send();
                let listavideos = JSON.parse(request.response);
                console.log(listavideos);
            
                for (let index = 0; index < listavideos.results.length; index++) {
                    
                    iframe.src = "http://www.youtube.com/embed/" + listavideos.results[index].key 
                    
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