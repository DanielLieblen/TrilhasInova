// alert('Boas-vindas ao jogo do número secreto')
//  let chute = prompt('Escolha um número de 1 e 10')

//  let numeroSecreto = 4

//  if (chute == numeroSecreto) {
//     alert('Acertou')
//  }


//  alert("boas vindas ao nosso site!")

//  let nome = "LUA"

//  let idade = 25

//  let numero = 50

//  let saldoDisponivel = 1000

//  alert("Erro! Preencha todos os campos.")

//  let nome2 = prompt("Qual é o seu nome?")

//    let idade2 = prompt("Qual é a sua idade?")

//    if (idade >=18) {

//        alert("pode tirar a habilitacao")

//    }




alert('Boas vindas ao jogo do número secreto');

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

let numeroSecreto = 4;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

if (chute == numeroSecreto) {
    alert('Acertou');
} else {
    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    console.log('Valor do número secreto:', numeroSecreto);
    alert('O número secreto era ' + numeroSecreto);
}


let dia = prompt('Qual é o dia da semana?')
if(dia == "Domingo"){
      alert('Hoje é dia de churrasco')
}else{
      alert('Hoje não é dia de churrasco')

}

let numero = prompt('Digite um número')
if(numero >0){
      alert('Número positivo')
   
}else{
      alert('Número negativo')
}

let pontuacao = prompt('Qual é a sua pontuação?')
if(pontuacao >=1000){
      alert('Você ganhou um brinde!')

}else{
      alert('Tente novamente!')
}

let saldo = 150.77
alert('Seu saldo é de R$ ${saldo.toFixed(2)}')


let nome = prompt('Qual é o seu nome?')
alert('Olá, ${nome}! Seja bem-vindo(a)')
