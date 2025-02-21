
//VARIAVEIS
//Recebe um número aleatorio de 1 a 10
let numeroMaximo = 100;
let  numeroSecreto = parseInt((Math.random() * numeroMaximo) + 1) ;
let chute;
let tentativas = 1;

//dando as boas vindas ao usuário
alert('Bem-vindo ao jogo!');


// CÓDIGO DE VERIFICAÇÃO

//vai repetir até o chute for igual ao numero definido
while(chute != numeroSecreto){

     chute = prompt(`Escolha um número de 1 a ${numeroMaximo}`);
     
     if(numeroSecreto == chute){
        console.log(`Você teve ${tentativas} tentativas`)
        break;
    }else{
        if(numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        }else if(numeroSecreto < chute){
            alert(`O número é menor que ${chute}`);
        }
    }

    tentativas++;
    
}

//let palavraTentantiva = tentativa > 1? 'tentantivas': 'tentativa';

alert("Parabéns, você acertou o número secreto!");


