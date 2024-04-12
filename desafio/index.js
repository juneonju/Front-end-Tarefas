function sim() {
    alert("TMJ BROTHER")
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = GeraPosicao(10, 90);
    btn.style.left = GeraPosicao(10, 90);
    console.log("opa, desviei....")

}
function GeraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + '%';
}