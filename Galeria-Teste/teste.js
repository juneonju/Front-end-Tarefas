var listaImagens = ["imagens/Henry1.jpg","imagens/Henry2.jpg","imagens/Henry3.jpg","imagens/Henry4.jpg","imagens/Henry5.jpg"];

const galeria = document.querySelector(".galeria");
const exibicao = document.querySelector(".exibicao");
const imgExibicao = document.createElement("img");
imgExibicao.src = listaImagens[0];
imgExibicao.id = "imgExibicao";
exibicao.appendChild(imgExibicao);

for (let index = 0; index < listaImagens.length; index++) {
    let imagem = document.createElement("img");
    imagem.src = listaImagens[index];
    imagem.addEventListener("click", (event) => {
        imgExibicao = imagem.src;
    });

    galeria.appendChild(imagem);
    
}