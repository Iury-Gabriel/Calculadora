let tela = document.querySelector(".numeros");
let total = '';

function adicionarTela(e) {
    let tecla = e.target.innerHTML;
    const ultimoCaractere = total.slice(-1);
    const operadores = ['+', '-', '*', '/'];

    if (!operadores.includes(ultimoCaractere) || !operadores.includes(tecla)) {
        total += tecla;
        tela.innerHTML = total;
    } else {

    }
}

function Calcular() {
    let resultado = eval(tela.innerHTML);
    if (resultado == undefined) {
        tela.innerHTML = '';
        total = '';
    } else {
        tela.innerHTML = resultado;
        total = resultado.toString();
    }
}

function limparTela() {
    tela.innerHTML = '';
    total = '';
}
