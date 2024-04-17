const categoria = document.querySelector("#campo-categoria")
const carrinho = document.querySelector("#campo-carrinho")
const produto = document.querySelector("#campo-produto")


window.addEventListener("load", function (event) {

    mostrarCategorias();

}); 


function mostrarCategorias() {
    
    var url1 = "https://fakestoreapi.com/products/categories"

    var request1 = new XMLHttpRequest();
    request1.open("GET", url1, false);
    request1.send();

    var dados1 = JSON.parse(request1.response);
    console.log(dados1)

    for (let index = 0; index < dados1.length; index++) {
        let botao = document.createElement("button");
        botao.textContent = dados1[index];
        botao.value = dados1[index];
        
        botao.addEventListener("click", function (event){

            produto.innerHTML = "";
            mostrarProdutosCategorias(botao.textContent)

        });

        categoria.appendChild(botao);

   }
}

function mostrarProdutosCategorias(categoria2) {
    var url2 = 'https://fakestoreapi.com/products/category/' + categoria2;

    var request2 = new XMLHttpRequest();
    request2.open("GET", url2, false);
    request2.send();

    var produtos = JSON.parse(request2.response);

    console.log(produtos);

    for (let index = 0; index < produtos.length; index++) {
        

        let produtosImg = document.createElement("img");

        produtosImg.id = "produtosImg";
        produtosImg.src = produtos[index].image;

        let produtosH3 = document.createElement("h3")

        produtosH3.id = "produtosH3";
        produtosH3.textContent = produtos[index].title;

        let produtosPreco = document.createElement("h4");

        produtosPreco.id = "produtostP";
        produtosPreco.textContent = produtos[index].price;
        
        produto.appendChild(produtosImg);
        produto.appendChild(produtosH3);
        produto.appendChild(produtosPreco);

    }
}