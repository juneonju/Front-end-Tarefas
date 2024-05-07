// Aqui eu puxo campos do html que eu vou usar, a maioria são divs e dois são botões
const body = document.querySelector("body")
const categoria = document.querySelector("#campo-categoria");
const carrinho = document.querySelector("#campo-carrinho");
const produto = document.querySelector("#campo-produto");
const botaoLimpar = document.querySelector("#botaoLimpar")
const abrirModal = document.querySelector("#abrirModal")
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

            //Aqui eu excluo as imagens pre-existentes na lista
            imagensProdutos.pop()
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

//Aqui eu crio outro modal para ser a parte de finalização de compra onde você insere dados como endereço e contato
let modal2 = document.createElement("div");
modal2.id = "modal2";

let titulos = document.createElement("div")
titulos.id = "titulos"

let produtosInfo = document.createElement("div")
produtosInfo.id = "produtosInfo"

let endereco = document.createElement("div")
endereco.id = "endereco"

let dadosPessoais = document.createElement("div")
dadosPessoais.id = "dadosPessoais"

let botaoFechar = document.createElement("button")
botaoFechar.id = "botaoFechar"
botaoFechar.textContent = "X"

let enderecoTitulo = document.createElement("h2")
enderecoTitulo.textContent = "Endereço:"

let tituloCep = document.createElement("label")
tituloCep.textContent = "CEP:"

let inputCep = document.createElement("input")
inputCep.className = "dadoInput"
inputCep.type = "number"

let acharDados = document.createElement("button")
acharDados.id = "botaoAcharDados"
acharDados.textContent = "Procurar endereço"

let tituloEstado = document.createElement("label")
tituloEstado.textContent = "Estado:"

let inputEstado = document.createElement("input")
inputEstado.className = "dadoInput"
inputEstado.type = "text"
inputEstado.disabled = true

let tituloCidade = document.createElement("label")
tituloCidade.textContent = "Cidade:"

let inputCidade = document.createElement("input")
inputCidade.className = "dadoInput"
inputCidade.type = "text"
inputCidade.disabled = true

let tituloBairro = document.createElement("label")
tituloBairro.textContent = "Bairro:"

let inputBairro = document.createElement("input")
inputBairro.className = "dadoInput"
inputBairro.type = "text"
inputBairro.disabled = true

let tituloRua = document.createElement("label")
tituloRua.textContent = "Rua:"

let inputRua = document.createElement("input")
inputRua.className = "dadoInput"
inputRua.type = "text"
inputRua.disabled = true

let dadosTitulo = document.createElement("h2")
dadosTitulo.textContent = "Dados Pessoais:"

let dadosNome = document.createElement("label")
dadosNome.textContent = "Nome:"

let inputNome = document.createElement("input")
inputNome.className = "dadoInput"
inputNome.type = "text"

let dadosEmail = document.createElement("label")
dadosEmail.textContent = "Email:"

let inputEmail = document.createElement("input")
inputEmail.className = "dadoInput"
inputEmail.type = "email"

let dadosTelefone = document.createElement("label")
dadosTelefone.textContent = "Telefone:"

let inputTelefone = document.createElement("input")
inputTelefone.className = "dadoInput"
inputTelefone.type = "number"

let selecaoPagamento = document.createElement("select")
selecaoPagamento.id = "selecaoPagamento"

let opt = document.createElement("option")
opt.textContent = "Selecione sua forma de pagamento"
opt.hidden = true

let opt1 = document.createElement("option")
opt1.textContent = "Boleto"

let opt2 = document.createElement("option")
opt2.textContent = "Credito"

let opt3 = document.createElement("option")
opt3.textContent = "Pix"

let botaoFazerPedido = document.createElement("button")
botaoFazerPedido.textContent = "fazer pedido"
botaoFazerPedido.id = "botaoFazerPedido" 

let produtoModal2 = document.createElement("h2");
produtoModal2.id = "tituloModal2";
produtoModal2.textContent = "Produtos";

pagina.appendChild(modal2);
modal2.appendChild(titulos)
modal2.appendChild(produtosInfo)
modal2.appendChild(endereco)
modal2.appendChild(dadosPessoais)
titulos.appendChild(produtoModal2);
endereco.appendChild(enderecoTitulo)
endereco.appendChild(tituloCep)
endereco.appendChild(inputCep)
endereco.appendChild(acharDados)
endereco.appendChild(tituloEstado)
endereco.appendChild(inputEstado)
endereco.appendChild(tituloCidade)
endereco.appendChild(inputCidade)
endereco.appendChild(tituloBairro)
endereco.appendChild(inputBairro)
endereco.appendChild(tituloRua)
endereco.appendChild(inputRua)
dadosPessoais.appendChild(dadosTitulo)
dadosPessoais.appendChild(dadosNome)
dadosPessoais.appendChild(inputNome)
dadosPessoais.appendChild(dadosEmail)
dadosPessoais.appendChild(inputEmail)
dadosPessoais.appendChild(dadosTelefone)
dadosPessoais.appendChild(inputTelefone)
selecaoPagamento.appendChild(opt)
selecaoPagamento.appendChild(opt1)
selecaoPagamento.appendChild(opt2)
selecaoPagamento.appendChild(opt3)
dadosPessoais.appendChild(selecaoPagamento)
dadosPessoais.appendChild(botaoFazerPedido)
modal2.appendChild(botaoFechar)

//aqui eu crio um evento de click no botão pra aparecer o modal de finalização de compra
abrirModal.addEventListener("click", (event) =>{
                
    //Aqui eu crio um For pra percorrer a lista que eu criei de imagens bem no inicio do arquivo e passar elas pro modal
    for (let index = 0; index < imagensProdutos.length; index++) {

        let imagemProdutoCompra = document.createElement("img")
        imagemProdutoCompra.id = "imagemProdutoCompra"
        imagemProdutoCompra.src = imagensProdutos[index].src;

        produtosInfo.appendChild(imagemProdutoCompra)

        botaoLimpar.addEventListener("click", (event) =>{

            produtosInfo.innerHTML = ""
            produtosInfo.removeChild(imagemProdutoCompra)

        });
                    
        //Nesse evento de click eu zero o Modal e fecho ele
        botaoFechar.addEventListener("click", (event) => {
    
            produtosInfo.removeChild(imagemProdutoCompra)
            modal2.style.display = "none"
            
        });

        //Nesse evento de click eu zero o Modal de finalização de compra e fecho ele
        botaoFazerPedido.addEventListener("click", (event) => {

            produtosInfo.removeChild(imagemProdutoCompra)
            modal2.style.display = "none"

        });
               
    } 
        
    modal2.style.display = "block"

});

botaoLimpar.addEventListener("click", (event) =>{

    produtosInfo.innerHTML = ""
    

});
//Nesse evento de click eu fecho o modal de finalização de compra
botaoFechar.addEventListener("click", (event) => {
    
    modal2.style.display = "none"

});

//Nesse evento de click do botão dentro do modal de finalização de pagina, eu procuro o endereço do usuario pelo cpf digitado no input
acharDados.addEventListener("click", (event) => {
            
    let url = "https://viacep.com.br/ws/" + inputCep.value + "/json";
        
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
                
    let endereco = JSON.parse(request.response);
    console.log(endereco)
    inputEstado.value = endereco.uf;
    inputCidade.value = endereco.localidade;
    inputRua.value = endereco.logradouro;
    inputBairro.value = endereco.bairro;
             
});