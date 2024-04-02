const especialidadeEscolha = document.querySelector("#especialidadeEscolha");
const divConteudo = document.querySelector("#conteudo2")

        let tabela = document.createElement("table")
        tabela.id = "tabela2"
        let cabecaTabela = document.createElement("thead")
        cabecaTabela.id = "tabelaHead2"
        let linhaTR = document.createElement("tr")
        linhaTR.className = "linha"
        let conteudoNome = document.createElement("th")
        conteudoNome.textContent = "Nome"
        counteudoNome.className = "th"
        let conteudoEspecialidade = document.createElement("th")
        conteudoEspecialidade.textContent = "Especialidade"
        counteudoEspecialidade.className = "th"
        let conteudoConvenio = document.createElement("th")
        conteudoConvenio.textContent = "Convenio"
        conteudoConvenio.className = "th"
        let corpoTabela = document.createElement("tbody")
        let linhaTD = document.createElement("tr")
        linhaTD.className = "linha"
        corpoTabela.id = "tabelaBody"
        let conteudoNomeTD = document.createElement("td")
        conteudoNomeTD.textContent = "gilberto gil"
        conteudoNomeTD.className = "td"
        let conteudoEspecialidadeTD = document.createElement("td")
        conteudoEspecialidadeTD.textContent = "Geral"
        conteudoESpecialidadeTD.className = "td"
        let conteudoConvenioTD = document.createElement("td")
        conteudoConvenioTD.textContent = "SUS"
        conteudoConvenioTD.className = "td"

        divConteudo.appendChild(tabela)
        tabela.appendChild(cabecaTabela)
        cabecaTabela.appendChild(linhaTR)
        linhaTR.appendChild(conteudoNome)
        linhaTR.appendChild(conteudoEspecialidade)
        linhaTR.appendChild(conteudoConvenio)
        tabela.appendChild(corpoTabela)
        corpoTabela.appendChild(linhaTD)
        linhaTD.appendChild(conteudoNomeTD)
        linhaTD.appendChild(conteudoEspecialidadeTD)
        linhaTD.appendChild(conteudoConvenioTD)


function mudarTabela(){
    
    if(especialidadeEscolha.value == "1"){

        

    }else if(especialidadeEscolha.value == "2"){
        tabela3.style.display = "flexbox";
    }else if(especialidadeEscolha.value == "3"){
        tabela4.style.display = "flexbox";
    }else if(especialidadeEscolha.value == "4"){
        tabela5.style.display = "flexbox";
    }else{
        alert("ta dando errado")
    }

}