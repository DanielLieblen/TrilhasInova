let totalGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    if (!validarEntrada(produto, quantidade)) {
        return;
    }

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}

function validarEntrada(produto, quantidade) {
  if (!produto || produto.indexOf('-') === -1 || produto.indexOf('R$') === -1) {
    alert('Por favor, selecione um produto válido.');
    return false;
  }
  if (isNaN(quantidade) || quantidade <= 0) {
    alert('Por favor, insira uma quantidade válida.');
    return false;
  }
  return true;
}

document.getElementById('adicionar').addEventListener('click', function() {
  let produto = document.getElementById('produto').value;
  let quantidade = document.getElementById('quantidade').value;

  if (validarEntrada(produto, quantidade)) {
    adicionar();
  }
});

document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  
  console.log(`Nome: ${nome}, Email: ${email}`);
  
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `Nome: ${nome}, Email: ${email}`;
});

document.getElementById('modificar').addEventListener('click', function() {
  let paragrafo = document.getElementById('paragrafo');
  paragrafo.textContent = 'O conteúdo deste parágrafo foi modificado!';
});

let num1 = 10;
let num2 = 20;
let soma = num1 + num2;
console.log(`A soma de ${num1} e ${num2} é ${soma}.`);


let texto = "Esta é a primeira frase; Esta é a segunda frase; Esta é a terceira frase";
let frases = texto.split(';');
console.log(frases);


let numeros = "1,2,3,4,5";
let arrayNumeros = numeros.split(',');
console.log(arrayNumeros);