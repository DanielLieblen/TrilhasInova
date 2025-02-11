let nome = "Daniel";

console.log(nome); // Daniel

let idade = 25;
let altura = 1.75;

console.log(idade); // 25
console.log(altura); // 1.75

let preco = 50;
let desconto = 0.2;

let precoComDesconto = preco - (preco * desconto);

console.log(precoComDesconto); // 40


let temperatura = 30;
if(temperat > 25) {
    console.log("Está calor!");
} else {
    console.log("Está fresco!");
}


let idade2 = 17;
if(idade2 >= 18) {
    console.log("Voce eh menor de idade");
} else {
    console.log(" Eh maior de idade");


}

let nota = 7;

if(nota >= 7) {
    console.log("Aprovado");
} else {    
    console.log("Reprovado");
}

let numero1 = 10;
let numero2 = 20;

if(numero1 == numero2) {
    console.log("Os números são iguais");
} else {
    console.log("Os números são diferentes");
}

let nome3 = "Daniel";
let idade3 = 25;

console.log("Ola, meu nome eh:" + nome3 + "e a idade eh: "+ idade3); // O nome é Daniel e a idade é 25

console.log(`Ola. meu nome é ${nome3} e a idade é ${idade3}`); // O nome é Daniel e a idade é 25

contador = 1;
while(contador <= 10) {
    console.log("O contador é: " + contador);
    contador++;
}

let num = 5;
let chute = 0;

while (num != 5){
    chute = prompt("Digite um número");
    if(chute == num) {
        console.log("Acertou");
    } else {
        console.log("Errou");
    }
    break;
}

let tabuada = 7;
let contador = 1;

while(contador <= 10) {
    console.log(tabuada + "x" + contador + "=" + tabuada * contador);
    contador++;
}



let cont = 0;

while(cont <= 20) {
    if(cont %2 == 0) {
        console.log(cont);
    }
}

function areaDeUmCirculo(raio) {
    return 3.14 * raio * raio;
}

console.log(areaDeUmCirculo(5));

// 14

let num1 = 10;  //declaracao de variaveis
let num2 = 15;

function soma(num1, num2) { //funcao que faz a soma de duas variaveis
    return num1 + num2; //retorno da funcao
}

console.log(soma(num1, num2)); //imprime o resultado da funcao



let x = 10;
let y = 20;

let z = x + y;

console.log(z);
