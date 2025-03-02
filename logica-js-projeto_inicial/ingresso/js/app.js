function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd').value;

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}

document.getElementById('comprar-btn').addEventListener('click', function() {
    let qtd = document.getElementById('qtd').value;
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida e positiva.');
    } else {
        comprar();
    }
});


function converterParaInteiro(str) {
    return parseInt(str);
}

function adicionar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        alert('Divisão por zero não é permitida.');
        return null;
    }
    return a / b;
}

function calcular(operacao, a, b) {
    switch (operacao) {
        case 'adicao':
            return adicionar(a, b);
        case 'subtracao':
            return subtrair(a, b);
        case 'multiplicacao':
            return multiplicar(a, b);
        case 'divisao':
            return dividir(a, b);
        default:
            alert('Operação inválida.');
            return null;
    }
}

// Exemplo de uso:
let operacao = 'adicao'; // Pode ser 'adicao', 'subtracao', 'multiplicacao' ou 'divisao'
let a = 10;
let b = 5;
let resultado = calcular(operacao, a, b);
if (resultado !== null) {
    console.log(`O resultado da ${operacao} é: ${resultado}`);
}


function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}

// Exemplo de uso:
let numero = 7;
let resultadoParOuImpar = verificarParOuImpar(numero);
console.log(`O número ${numero} é: ${resultadoParOuImpar}`);


function converterTemperatura(temperatura, escala) {
    if (escala === 'Celsius') {
        return (temperatura * 9/5) + 32; // Converte Celsius para Fahrenheit
    } else if (escala === 'Fahrenheit') {
        return (temperatura - 32) * 5/9; // Converte Fahrenheit para Celsius
    } else {
        alert('Escala inválida. Use "Celsius" ou "Fahrenheit".');
        return null;
    }
}

// Exemplo de uso:
let temperatura = 25;
let escala = 'Celsius';
let temperaturaConvertida = converterTemperatura(temperatura, escala);
if (temperaturaConvertida !== null) {
    console.log(`A temperatura ${temperatura}° ${escala} convertida é: ${temperaturaConvertida}° ${escala === 'Celsius' ? 'Fahrenheit' : 'Celsius'}`);
}