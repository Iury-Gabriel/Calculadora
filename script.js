let tela = document.querySelector(".numeros");
let total = '';
let primeiraTecla = true;

function adicionarTela(e) {
    let tecla = e.target.innerHTML;
    const ultimoCaractere = total.slice(-1);
    const operadores = ['+', '-', 'x', '÷', '%'];

    if (total.length > 13) {
        alert('Atingido máximo de números na tela, apague os números e tente novamente');
    } else {
        if (primeiraTecla && (operadores.includes(tecla) || tecla === '.')) {
            // Não permite operadores ou ponto como a primeira tecla
        } else {
            if (!operadores.includes(ultimoCaractere) || !operadores.includes(tecla)) {
                const ultimoNumero = total.split(/[\+\-\x÷]/).pop();
                if (tecla === '.' && ultimoNumero.includes('.')) {
                    // não pode botar um ponto após o numero
                } else {
                    total += tecla;
                    tela.innerHTML = total;
                    if (operadores.includes(tecla)) {
                        primeiraTecla = true; // Reinicia a restrição após um operador ou ponto
                    } else {
                        primeiraTecla = false;
                    }
                }
            }
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
