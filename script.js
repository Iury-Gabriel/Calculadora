let tela = document.querySelector(".numeros");
let total = '';

function adicionarTela(e) {
    let tecla = e.target.innerHTML;
    total += tecla;
    tela.innerHTML = total;
}

function Calcular() {
    total = '';
    let resultado = eval(tela.innerHTML);
    total = resultado;
    if(resultado == undefined) {
        tela.innerHTML = '';
        total = '';
    } else {
        tela.innerHTML = resultado;
    }
    
    
}

function limparTela() {
    tela.innerHTML = '';
    total = '';
}