let amigos = [];


function adicionar(){
    let amigo = document.getElementById('nome-amigo');

    if(amigo.value == ''){
        alert('Digite o nome do amigo');
        return;
    }

    if(amigos.includes(amigo.value)){
        alert('Amigo já adicionado');
    }

    let lista = document.getElementById('lista-amigos');

    amigos.push(amigo.value);

    if(lista.textContent== ''){
        lista.textContent = amigo.value;
    }else{
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';


    atualizarLista();
    atualizarSorteio();
}


function sortear(){
   embaralha(amigos);
   if(amigos.length < 4){
       alert('Adicione mais amigos para sortear');
       return;
   }

   let sorteio = document.getElementById('lista-sorteio');
   
   for(let i = 0; i < amigos.length; i++){
        sorteio.innerHTML +=  amigos[i] + ' tirou ' + amigos[(i+1)%amigos.length] + '<br>';

   }

}

function embaralha(lista){
    for(let indice = lista.length; indice; indice--){
        let indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice-1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice-1]];
    }
}


function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}


function reiniciar(){
    document.getElementById('lista-sorteio').innerHTML = '';
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
}

let minhaLista = [1, 2, 3];
let outraLista = [4, 5, 6];
let novaLista = minhaLista.concat(outraLista);
console.log(novaLista);


novaLista.pop();
console.log(novaLista);


function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

fisherYatesShuffle(novaLista);
console.log(novaLista);

function removerDuplicatas(array) {
    return [...new Set(array)];
}

let listaSemDuplicatas = removerDuplicatas(novaLista);
console.log(listaSemDuplicatas);





function validarNumero(numero) {
    if (numero > 0) {
        return 'positivo';
    } else if (numero < 0) {
        return 'negativo';
    } else {
        return 'zero';
    }
}

console.log(validarNumero(5));  // positivo
console.log(validarNumero(-3)); // negativo
console.log(validarNumero(0));  // zero


function verificarMaioridade(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}

console.log(verificarMaioridade(20)); // Maior de idade
console.log(verificarMaioridade(16)); // Menor de idade


function validarStringVazia(str) {
    return str === '';
}

function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function calcularMedia(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Números inválidos';
    }
    return (num1 + num2) / 2;
}

function tamanhoArray(array) {
    return array.length;
}

let meuArray = [1, 2, 3, 4, 5];
console.log(meuArray.includes(3)); // true

function elementoPresente(array, elemento) {
    return array.includes(elemento);
}

let arrayStrings = ['apple', 'banana', 'cherry'];
console.log(arrayStrings.includes('banana')); // true

function estudantePresente(estudantes, estudanteProcurado) {
    return estudantes.some(estudante => JSON.stringify(estudante) === JSON.stringify(estudanteProcurado));
}

function somaParesProdutoImpares(array) {
    let somaPares = 0;
    let produtoImpares = 1;
    array.forEach(num => {
        if (num % 2 === 0) {
            somaPares += num;
        } else {
            produtoImpares *= num;
        }
    });
    return { somaPares, produtoImpares };
}