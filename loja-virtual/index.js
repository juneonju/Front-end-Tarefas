const body = document.querySelector("body")
const categoria = document.querySelector("#campo-categoria");
const carrinho = document.querySelector("#campo-carrinho");
const produto = document.querySelector("#campo-produto");
const botaoLimpar = document.querySelector("#botaoLimpar")
const abrirModal = document.querySelector("#abrirModal")
const pagina = document.querySelector("#pagina")

let imagensProdutos = []

window.addEventListener("load", function (event) {

    mostrarCategorias();

}); 


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

        produtosImg.addEventListener("click", (event) =>{

            imagem.src  = produtosImg.src
            imagem.id = "produtosModal"
            texto.textContent = descricaoH3.textContent
            texto.id = "texto"
            preco.textContent = produtosPreco.textContent
            preco.id = "produtostPModal"
            modal.style.display = "flex"
    
        });

        botaoSair.addEventListener("click", (event) => {

            modal.style.display = "none";
            
        });

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
            
            imagensProdutos.push(imagemCarrinho)


        });
    
        botaoLimpar.addEventListener("click", (event) =>{

            carrinho.innerHTML = ""
            let textoArea = document.createElement("h1")
            textoArea.textContent = "Carrinho"
            carrinho.appendChild(textoArea)

        });
    }
}

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

        let nomeProdutoCompra = document.createElement("h4")
        nomeProdutoCompra.id = "nomeProdutoCompra"

        let precoProdutoCompra = document.createElement("h4")
        precoProdutoCompra.id = "precoProdutoCompra"

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
        let tituloCidade = document.createElement("label")
        tituloCidade.textContent = "Cidade:"
        let inputCidade = document.createElement("input")
        inputCidade.className = "dadoInput"
        inputCidade.type = "text"
        let tituloBairro = document.createElement("label")
        tituloBairro.textContent = "Bairro:"
        let inputBairro = document.createElement("input")
        inputBairro.className = "dadoInput"
        inputBairro.type = "text"
        let tituloRua = document.createElement("label")
        tituloRua.textContent = "Rua:"
        let inputRua = document.createElement("input")
        inputRua.className = "dadoInput"
        inputRua.type = "text"

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
        let opt = document.createElement("option")
        opt.textContent = "Selecione sua forma de pagamento"
        let opt1 = document.createElement("option")
        opt1.textContent = "Boleto"
        let opt2 = document.createElement("option")
        opt2.textContent = "Credito"
        let opt3 = document.createElement("option")
        opt3.textContent = "Pix"
        let botaoFazerPedido = document.createElement("button")
        botaoFazerPedido.textContent = "fazer pedido"

        let produtoModal2 = document.createElement("h2");
        produtoModal2.id = "tituloModal2";
        produtoModal2.textContent = "Produtos";
        
        pagina.appendChild(modal2);
        modal2.appendChild(titulos)
        modal2.appendChild(produtosInfo)
        modal2.appendChild(endereco)
        modal2.appendChild(dadosPessoais)
        titulos.appendChild(produtoModal2);
        produtosInfo.appendChild(nomeProdutoCompra)
        produtosInfo.appendChild(precoProdutoCompra)
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

        abrirModal.addEventListener("click", (event) =>{
                

                for (let index = 0; index < imagensProdutos.length; index++) {

                    let imagemProdutoCompra = document.createElement("img")
                    imagemProdutoCompra.id = "imagemProdutoCompra"
                    imagemProdutoCompra.src = imagensProdutos[index].src;

                    produtosInfo.appendChild(imagemProdutoCompra)
    
                    botaoFechar.addEventListener("click", (event) => {
    
                        produtosInfo.removeChild(imagemProdutoCompra)
                        modal2.style.display = "none"
            
                    });

                    botaoFazerPedido.addEventListener("click", (event) => {

                        produtosInfo.removeChild(imagemProdutoCompra)
                        modal2.style.display = "none"

                    });
               
                } 
        
            modal2.style.display = "block"

        });

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
    