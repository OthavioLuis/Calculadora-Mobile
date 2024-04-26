var v1 = document.getElementById('valor1');
var v2 = document.getElementById('valor2');
var somar = document.getElementById('btnSomar');
var subtrair = document.getElementById('btnSub');
var multiplicar = document.getElementById('btnMult');
var dividir = document.getElementById('btnDiv');

somar.onclick = function() {
    calcular('+');
}
subtrair.onclick = function() {
    calcular('-');
}
multiplicar.onclick = function() {
    calcular('*');
}
dividir.onclick = function() {
    calcular('/');
}

function calcular(operador) {
    var valor1 = parseFloat(v1.value);
    var valor2 = parseFloat(v2.value);
    var resultadoOperacao;

    switch(operador) {
        case '+':
            resultadoOperacao = valor1 + valor2;
            break;
        case '-':
            resultadoOperacao = valor1 - valor2;
            break;
        case '*':
            resultadoOperacao = valor1 * valor2;
            break;
        case '/':
            resultadoOperacao = valor1 / valor2;
            break;
        default:
            resultadoOperacao = "Operação inválida";
    }
    document.getElementById('resultado').innerText = resultadoOperacao;
}