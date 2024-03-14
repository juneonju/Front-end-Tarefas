const botaoNovo = document.querySelector("#botaoNovo");
const botaoSalvar = document.querySelector("#botaoSalvar");

botaoNovo.addEventListener("click", (event) => {
    modal.style.display = "flex";
});
botaoSalvar.addEventListener("click", (event) => {
    modal.style.display = "none";
});