// Aqui eu puxo campos do html que eu vou usar, a maioria são divs e dois são botões
const body = document.querySelector("body")
const categoria = document.querySelector("#campo-categoria");
const carrinho = document.querySelector("#campo-carrinho");
const produto = document.querySelector("#campo-produto");
const botaoLimpar = document.querySelector("#botaoLimpar")
const abrirFinalização = document.querySelector("#abrirModal")
const pagina = document.querySelector("#pagina")

// Aqui eu criei uma lista vazia pra armazenar imagens pra puxar pro modal
let imagensProdutos = []

//Esse evento load vai funcionar pra carregar as categorias dos produtos
window.addEventListener("load", function (event) {

    mostrarCategorias();

}); 

//Função que vai requisitar as imagens e dados da API em botões
function mostrarCategorias() {
    
    var url1 = "https://fakestoreapi.com/products/categories"

    var request1 = new XMLHttpRequest();
    request1.open("GET", url1, false);
    request1.send();

    var dados1 = JSON.parse(request1.response);
    console.log(dados1);

    for (let index = 0; index < dados1.length; index++) {
        let botao = document.createElement("button");
        botao.className = "botao"
        botao.textContent = dados1[index];
        botao.value = dados1[index];
        
        botao.addEventListener("click", function (event){

            produto.innerHTML = "";
            mostrarProdutosCategorias(botao.textContent);

        });

        categoria.appendChild(botao);

   }
}

//função pra preencher o campo de produtos com imagens, nomes e preços
function mostrarProdutosCategorias(categoria2) {

    let url2 = 'https://fakestoreapi.com/products/category/' + categoria2;

    let request2 = new XMLHttpRequest();
    request2.open("GET", url2, false);
    request2.send();

    let produtos = JSON.parse(request2.response);

    console.log(produtos);

    for (let index = 0; index < produtos.length; index++) {
        

        let produtosImg = document.createElement("img");
        produtosImg.id = "produtosImg";
        produtosImg.src = produtos[index].image;

        let produtosH3 = document.createElement("h3");
        produtosH3.id = "produtosH3";
        produtosH3.textContent = produtos[index].title;

        let descricaoH3 = document.createElement("h3");
        descricaoH3.id = "produtosH3";
        descricaoH3.textContent = produtos[index].description;

        let produtosPreco = document.createElement("h4");
        produtosPreco.id = "produtostP";
        produtosPreco.textContent = "R$" + produtos[index].price;
        
        produto.appendChild(produtosImg);
        produto.appendChild(produtosH3);
        produto.appendChild(produtosPreco);

        //Aqui eu vou criar um Modal pra aparecer os produtos que vou querer adicionar no carrinho
        let modal = document.createElement("div");
        modal.id = "modal";

        let imagem = document.createElement("img");
        imagem.id = "imagensProduto";

        let texto = document.createElement("h3");
        texto.id = "textoProduto";

        let preco = document.createElement("h4");
        preco.id = "precoProduto";

        let descricaoDiv = document.createElement("div");
        descricaoDiv.id = "descricaoDiv"

        let botaoSair = document.createElement("button");
        botaoSair.textContent = "X";
        botaoSair.id = "botaoSair";

        let botaoAdicionar = document.createElement("button");
        botaoAdicionar.textContent = "Adicionar no Carrinho";
        botaoAdicionar.id = "botaoAdicionar";

        body.appendChild(modal);
        modal.appendChild(imagem);
        descricaoDiv.appendChild(texto);
        modal.appendChild(preco);
        modal.appendChild(descricaoDiv);
        modal.appendChild(botaoSair);
        modal.appendChild(botaoAdicionar);

        //Evento de click das imagens no campo de produtos que, quando clickada, vai mostrar o modal
        produtosImg.addEventListener("click", (event) =>{

            imagem.src  = produtosImg.src
            imagem.id = "produtosModal"
            texto.textContent = descricaoH3.textContent
            texto.id = "texto"
            preco.textContent = produtosPreco.textContent
            preco.id = "produtostPModal"
            modal.style.display = "flex"
    
        });

        //evento de click do botão dentro do modal pra fechar ele
        botaoSair.addEventListener("click", (event) => {

            modal.style.display = "none";
            
        });

        //evento de click do botão pra adicionar dados no carrinho, como imagens e nomes dos produtos
        botaoAdicionar.addEventListener("click", (event) => {

            let divCarrinho = document.createElement("div")
            divCarrinho.id = "divCarrinho"
            let imagemCarrinho = document.createElement("img")
            imagemCarrinho.src = imagem.src
            imagemCarrinho.id = "imagensNoCarrinho"
            let nomeProduto = document.createElement("h4")
            nomeProduto.textContent = produtosH3.textContent
            divCarrinho.appendChild(imagemCarrinho)
            divCarrinho.appendChild(nomeProduto)
            carrinho.appendChild(divCarrinho)
            
            //Aqui eu preencho a lista de imagens que fiz no inicio do arquivo
            imagensProdutos.push(imagemCarrinho)

        });
    
        //evento de click do botão para limpar o Carrinho
        botaoLimpar.addEventListener("click", (event) =>{

            imagensProdutos.pop()
            carrinho.innerHTML = ""
            let textoArea = document.createElement("h1")
            textoArea.textContent = "Carrinho"
            carrinho.appendChild(textoArea)

        });
    }
}

