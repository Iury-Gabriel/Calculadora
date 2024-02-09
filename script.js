let tela = document.querySelector(".numeros");
let total = '';

function adicionarTela(e) {
    let tecla = e.target.innerHTML;
    const ultimoCaractere = total.slice(-1);
    const operadores = ['+', '-', 'x', '÷', '.', '%'];

    if(total.length > 13) {
        alert('Atingido maximo de numeros na tela, apague os numeros e tente novamente')
    } else {
        if (!operadores.includes(ultimoCaractere) || !operadores.includes(tecla)) {
            total += tecla;
            tela.innerHTML = total;
        } else {
    
        }
    }
}

function Calcular() {
    tela.innerHTML = tela.innerHTML.replaceAll('÷', '/');
    tela.innerHTML = tela.innerHTML.replaceAll('x', '*');
    tela.innerHTML = tela.innerHTML.replaceAll(/%/g, '*0.01*');
    let resultado = eval(tela.innerHTML);
    
    if (resultado == undefined) {
        tela.innerHTML = '';
        total = '';
    } else {
        if(resultado.toString().length > 15) {
            tela.innerHTML = resultado.toFixed(5);
            total = resultado.toString();
        } else {
            tela.innerHTML = resultado;
            total = resultado.toString();
        }
    }
}

function limparTela() {
    tela.innerHTML = '';
    total = '';
}
