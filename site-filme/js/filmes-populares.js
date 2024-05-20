const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')
const img4 = document.querySelector('#img4')
const img5 = document.querySelector('#img5')
const img6 = document.querySelector('#img6')
const img7 = document.querySelector('#img7')
const img8 = document.querySelector('#img8')
const img9 = document.querySelector('#img9')
const img10 = document.querySelector('#img10')
const img11 = document.querySelector('#img11')
const img12 = document.querySelector('#img12')
const img13 = document.querySelector('#img13')
const img14 = document.querySelector('#img14')
const img15 = document.querySelector('#img15')
const img16 = document.querySelector('#img16')
const img17 = document.querySelector('#img17')
const img18 = document.querySelector('#img18')
const img19 = document.querySelector('#img19')
const img20 = document.querySelector('#img20')

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
        img1.src = caminhoIMG + lista.results[0].poster_path;
        img2.src = caminhoIMG + lista.results[1].poster_path;
        img3.src = caminhoIMG + lista.results[2].poster_path;
        img4.src = caminhoIMG + lista.results[3].poster_path;
        img5.src = caminhoIMG + lista.results[4].poster_path;
        img6.src = caminhoIMG + lista.results[5].poster_path;
        img7.src = caminhoIMG + lista.results[6].poster_path;
        img8.src = caminhoIMG + lista.results[7].poster_path;
        img9.src = caminhoIMG + lista.results[8].poster_path;
        img10.src = caminhoIMG + lista.results[9].poster_path;
        img11.src = caminhoIMG + lista.results[10].poster_path;
        img12.src = caminhoIMG + lista.results[11].poster_path;
        img13.src = caminhoIMG + lista.results[12].poster_path;
        img14.src = caminhoIMG + lista.results[13].poster_path;
        img15.src = caminhoIMG + lista.results[14].poster_path;
        img16.src = caminhoIMG + lista.results[15].poster_path;
        img17.src = caminhoIMG + lista.results[16].poster_path;
        img18.src = caminhoIMG + lista.results[17].poster_path;
        img19.src = caminhoIMG + lista.results[18].poster_path;
        img20.src = caminhoIMG + lista.results[19].poster_path;     

    }
}