const listaImagens = ["imagens/imagem1.jpg", "imagens/imagem2.jpeg", "imagens/imagem3.jpg", "imagens/imagem4.jpg", "imagens/imagem5.jpeg"]
const galeria = document.querySelector(".galeria")
const exibicao = document.querySelector(".exibicao")
const navegacao = document.createElement("div")

const titulo = document.createElement("h1")
exibicao.appendChild(titulo)
titulo.innerHTML = "galeria de fotos"
const copiaImagem = document.createElement("img")
exibicao.appendChild(copiaImagem)

for (let index = 0; index < listaImagens.length; index++) {
    const imagem = document.createElement("img")
    imagem.src = listaImagens[index]
    galeria.appendChild(imagem)

    imagem.addEventListener("click", (event) => {
        copiaImagem.src = imagem.src
    }); 
}

const botao1 = document.createElement("button")
const botao2 = document.createElement("button")
botao1.innerHTML = "Anterior"
botao2.innerHTML = "Proximo"
navegacao.id = "navegacao"
exibicao.appendChild(navegacao)
navegacao.appendChild(botao1)
navegacao.appendChild(botao2)
