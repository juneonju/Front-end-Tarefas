//Variaveis usadas no codigo
const especialidadeEscolha = document.querySelector("#especialidadeEscolha");
const divConteudo = document.querySelector("#conteudo2")

//Primeira tabela dinamica do codigo
let tabela2 = document.createElement("table")
tabela2.id = "tabela2"

let cabecaTabela = document.createElement("thead")
cabecaTabela.id = "tabelaHead2"

let linhaTR = document.createElement("tr")
linhaTR.className = "linha"

let conteudoNome = document.createElement("th")
conteudoNome.textContent = "Nome"
conteudoNome.className = "th"

let conteudoEspecialidade = document.createElement("th")
conteudoEspecialidade.textContent = "Especialidade"
conteudoEspecialidade.className = "th"

let conteudoConvenio = document.createElement("th")
conteudoConvenio.textContent = "Convenio"
conteudoConvenio.className = "th"

let corpoTabela = document.createElement("tbody")
corpoTabela.id = "tabelaBody"

let linhaTR2 = document.createElement("tr")
linhaTR2.className = "linha"
        
let conteudoNomeTD = document.createElement("td")
conteudoNomeTD.textContent = "julio"
conteudoNomeTD.className = "td"

let conteudoEspecialidadeTD = document.createElement("td")
conteudoEspecialidadeTD.textContent = "Geral"
conteudoEspecialidadeTD.className = "td"

let conteudoConvenioTD = document.createElement("td")
conteudoConvenioTD.textContent = "SUS"
conteudoConvenioTD.className = "td"

divConteudo.appendChild(tabela2)
tabela2.appendChild(cabecaTabela)
cabecaTabela.appendChild(linhaTR)
linhaTR.appendChild(conteudoNome)
linhaTR.appendChild(conteudoEspecialidade)
linhaTR.appendChild(conteudoConvenio)
tabela2.appendChild(corpoTabela)
corpoTabela.appendChild(linhaTR2)
linhaTR2.appendChild(conteudoNomeTD)
linhaTR2.appendChild(conteudoEspecialidadeTD)
linhaTR2.appendChild(conteudoConvenioTD)


//Segunda tabela dinamica do codigo
let tabela3 = document.createElement("table")
tabela3.id = "tabela3"
let cabecaTabela3 = document.createElement("thead")
cabecaTabela3.id = "tabelaHead2"
let linhaTR3 = document.createElement("tr")
linhaTR3.className = "linha"
let conteudoNome2 = document.createElement("th")
conteudoNome2.textContent = "Nome"
conteudoNome2.className = "th"
let conteudoEspecialidade2 = document.createElement("th")
conteudoEspecialidade2.textContent = "Especialidade"
conteudoEspecialidade2.className = "th"
let conteudoConvenio2 = document.createElement("th")
conteudoConvenio2.textContent = "Convenio"
conteudoConvenio2.className = "th"

let corpoTabela2 = document.createElement("tbody")

let linhaTR4 = document.createElement("tr")
linhaTR4.className = "linha"
corpoTabela2.id = "tabelaBody"
let conteudoNomeTD2 = document.createElement("td")
conteudoNomeTD2.textContent = "carla"
conteudoNomeTD2.className = "td"
let conteudoEspecialidadeTD2 = document.createElement("td")
conteudoEspecialidadeTD2.textContent = "Nutricionista"
conteudoEspecialidadeTD2.className = "td"
let conteudoConvenioTD2= document.createElement("td")
conteudoConvenioTD2.textContent = "Unimed"
conteudoConvenioTD2.className = "td"
        
let linhaTR5 = document.createElement("tr")
linhaTR5.className = "linha"
let conteudoNomeTD3 = document.createElement("td")
conteudoNomeTD3.textContent = "carlos"
conteudoNomeTD3.className = "td"
let conteudoEspecialidadeTD3 = document.createElement("td")
conteudoEspecialidadeTD3.textContent = "Nutricionista"
conteudoEspecialidadeTD3.className = "td"
let conteudoConvenioTD3 = document.createElement("td")
conteudoConvenioTD3.textContent = "Hapvida"
conteudoConvenioTD3.className = "td"

let linhaTR6 = document.createElement("tr")
        linhaTR6.className = "linha"
let conteudoNomeTD4 = document.createElement("td")
conteudoNomeTD4.textContent = "cecilia"
conteudoNomeTD4.className = "td"
let conteudoEspecialidadeTD4 = document.createElement("td")
conteudoEspecialidadeTD4.textContent = "Nutricionista"
conteudoEspecialidadeTD4.className = "td"
let conteudoConvenioTD4 = document.createElement("td")
conteudoConvenioTD4.textContent = "SUS"
conteudoConvenioTD4.className = "td"

let linhaTR7 = document.createElement("tr")
linhaTR7.className = "linha"
let conteudoNomeTD5 = document.createElement("td")
conteudoNomeTD5.textContent = "carol"
conteudoNomeTD5.className = "td"
let conteudoEspecialidadeTD5 = document.createElement("td")
conteudoEspecialidadeTD5.textContent = "Nutricionista"
conteudoEspecialidadeTD5.className = "td"
let conteudoConvenioTD5 = document.createElement("td")
conteudoConvenioTD5.textContent = "Smile"
conteudoConvenioTD5.className = "td"

divConteudo.appendChild(tabela3)
tabela3.appendChild(cabecaTabela3)
cabecaTabela3.appendChild(linhaTR3)
linhaTR3.appendChild(conteudoNome2)
linhaTR3.appendChild(conteudoEspecialidade2)
linhaTR3.appendChild(conteudoConvenio2)
tabela3.appendChild(corpoTabela2)
corpoTabela2.appendChild(linhaTR4)
linhaTR4.appendChild(conteudoNomeTD2)
linhaTR4.appendChild(conteudoEspecialidadeTD2)
linhaTR4.appendChild(conteudoConvenioTD2)
corpoTabela2.appendChild(linhaTR5)
linhaTR5.appendChild(conteudoNomeTD3)
linhaTR5.appendChild(conteudoEspecialidadeTD3)
linhaTR5.appendChild(conteudoConvenioTD3)
corpoTabela2.appendChild(linhaTR6)
linhaTR6.appendChild(conteudoNomeTD4)
linhaTR6.appendChild(conteudoEspecialidadeTD4)
linhaTR6.appendChild(conteudoConvenioTD4)
corpoTabela2.appendChild(linhaTR7)
linhaTR7.appendChild(conteudoNomeTD5)
linhaTR7.appendChild(conteudoEspecialidadeTD5)
linhaTR7.appendChild(conteudoConvenioTD5)


//Terceira tabela dinamica do codigo
let tabela4 = document.createElement("table")
tabela4.id = "tabela4"
let cabecaTabela4 = document.createElement("thead")
cabecaTabela4.id = "tabelaHead2"
let linhaTR8 = document.createElement("tr")
linhaTR8.className = "linha"
let conteudoNome3 = document.createElement("th")
conteudoNome3.textContent = "Nome"
conteudoNome3.className = "th"
let conteudoEspecialidade3 = document.createElement("th")
conteudoEspecialidade3.textContent = "Especialidade"
conteudoEspecialidade3.className = "th"
let conteudoConvenio3 = document.createElement("th")
conteudoConvenio3.textContent = "Convenio"
conteudoConvenio3.className = "th"

let corpoTabela3 = document.createElement("tbody")

let linhaTR9 = document.createElement("tr")
linhaTR9.className = "linha"
let conteudoNomeTD6 = document.createElement("td")
conteudoNomeTD6.textContent = "Roberto"
conteudoNomeTD6.className = "td"
let conteudoEspecialidadeTD6 = document.createElement("td")
conteudoEspecialidadeTD6.textContent = "Oftamologista"
conteudoEspecialidadeTD6.className = "td"
let conteudoConvenioTD6 = document.createElement("td")
conteudoConvenioTD6.textContent = "SUS"
conteudoConvenioTD6.className = "td"

let linhaTR10 = document.createElement("tr")
linhaTR10.className = "linha"
let conteudoNomeTD7 = document.createElement("td")
conteudoNomeTD7.textContent = "Roberta"
conteudoNomeTD7.className = "td"
let conteudoEspecialidadeTD7 = document.createElement("td")
conteudoEspecialidadeTD7.textContent = "Oftamologista"
conteudoEspecialidadeTD7.className = "td"
let conteudoConvenioTD7 = document.createElement("td")
conteudoConvenioTD7.textContent = "Unimed"
conteudoConvenioTD7.className = "td"

let linhaTR11 = document.createElement("tr")
linhaTR11.className = "linha"
let conteudoNomeTD8 = document.createElement("td")
conteudoNomeTD8.textContent = "Renato"
conteudoNomeTD8.className = "td"
let conteudoEspecialidadeTD8 = document.createElement("td")
conteudoEspecialidadeTD8.textContent = "Oftamologista"
conteudoEspecialidadeTD8.className = "td"
let conteudoConvenioTD8 = document.createElement("td")
conteudoConvenioTD8.textContent = "Smile"
conteudoConvenioTD8.className = "td"

divConteudo.appendChild(tabela4)
tabela4.appendChild(cabecaTabela4)
cabecaTabela4.appendChild(linhaTR8)
linhaTR8.appendChild(conteudoNome3)
linhaTR8.appendChild(conteudoEspecialidade3)
linhaTR8.appendChild(conteudoConvenio3)
tabela4.appendChild(corpoTabela3)
corpoTabela3.appendChild(linhaTR9)
linhaTR9.appendChild(conteudoNomeTD6)
linhaTR9.appendChild(conteudoEspecialidadeTD6)
linhaTR9.appendChild(conteudoConvenioTD6)
corpoTabela3.appendChild(linhaTR10)
linhaTR10.appendChild(conteudoNomeTD7)
linhaTR10.appendChild(conteudoEspecialidadeTD7)
linhaTR10.appendChild(conteudoConvenioTD7)
corpoTabela3.appendChild(linhaTR11)
linhaTR11.appendChild(conteudoNomeTD8)
linhaTR11.appendChild(conteudoEspecialidadeTD8)
linhaTR11.appendChild(conteudoConvenioTD8)


//Quarta tabela dinamica do codigo
let tabela5 = document.createElement("table")
tabela5.id = "tabela5"
let cabecaTabela5 = document.createElement("thead")
cabecaTabela5.id = "tabelaHead2"
let linhaTR12 = document.createElement("tr")
linhaTR12.className = "linha"
let conteudoNome4 = document.createElement("th")
conteudoNome4.textContent = "Nome"
conteudoNome4.className = "th"
let conteudoEspecialidade4 = document.createElement("th")
conteudoEspecialidade4.textContent = "Especialidade"
conteudoEspecialidade4.className = "th"
let conteudoConvenio4 = document.createElement("th")
conteudoConvenio4.textContent = "Convenio"
conteudoConvenio4.className = "th"

let corpoTabela4 = document.createElement("tbody")

let linhaTR13 = document.createElement("tr")
linhaTR13.className = "linha"
let conteudoNomeTD9 = document.createElement("td")
conteudoNomeTD9.textContent = "Cicero"
conteudoNomeTD9.className = "td"
let conteudoEspecialidadeTD9 = document.createElement("td")
conteudoEspecialidadeTD9.textContent = "Cardiologista"
conteudoEspecialidadeTD9.className = "td"
let conteudoConvenioTD9 = document.createElement("td")
conteudoConvenioTD9.textContent = "SUS"
conteudoConvenioTD9.className = "td"

let linhaTR14 = document.createElement("tr")
linhaTR14.className = "linha"
let conteudoNomeTD10 = document.createElement("td")
conteudoNomeTD10.textContent = "Eduardo"
conteudoNomeTD10.className = "td"
let conteudoEspecialidadeTD10 = document.createElement("td")
conteudoEspecialidadeTD10.textContent = "Cardiologista"
conteudoEspecialidadeTD10.className = "td"
let conteudoConvenioTD10 = document.createElement("td")
conteudoConvenioTD10.textContent = "Smile"
conteudoConvenioTD10.className = "td"



divConteudo.appendChild(tabela5)
tabela5.appendChild(cabecaTabela5)
cabecaTabela5.appendChild(linhaTR12)
linhaTR12.appendChild(conteudoNome4)
linhaTR12.appendChild(conteudoEspecialidade4)
linhaTR12.appendChild(conteudoConvenio4)
tabela5.appendChild(corpoTabela4)
corpoTabela4.appendChild(linhaTR13)
linhaTR13.appendChild(conteudoNomeTD9)
linhaTR13.appendChild(conteudoEspecialidadeTD9)
linhaTR13.appendChild(conteudoConvenioTD9)
corpoTabela4.appendChild(linhaTR14)
linhaTR14.appendChild(conteudoNomeTD10)
linhaTR14.appendChild(conteudoEspecialidadeTD10)
linhaTR14.appendChild(conteudoConvenioTD10)



//Esse é um evento que muda uma tabela para outra se clickar
especialidadeEscolha.addEventListener("change", (event) => {
    if (especialidadeEscolha.value !== "") {
        switch (especialidadeEscolha.value) {
            case "1":
                tabela1.style.display = "none"
                tabela2.style.display = "table"
                tabela3.style.display = "none"
                tabela4.style.display = "none"
                tabela5.style.display = "none"
                break
            case "2":
                tabela1.style.display = "none"
                tabela2.style.display = "none"
                tabela3.style.display = "table"
                tabela4.style.display = "none"
                tabela5.style.display = "none"
                break
            case "3":
                tabela1.style.display = "none"
                tabela2.style.display = "none"
                tabela3.style.display = "none"
                tabela4.style.display = "table"
                tabela5.style.display = "none"
                break
            case "4":
                tabela1.style.display = "none"
                tabela2.style.display = "none"
                tabela3.style.display = "none"
                tabela4.style.display = "none"
                tabela5.style.display = "table"
                break
            default:
                break
        }
    }
});