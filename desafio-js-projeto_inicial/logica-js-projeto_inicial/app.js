
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 1000;
let saldoDisponivel = 1000;
let mensagemErro = 'ERRO! Preencha todos os campos';


alert('Boas vindas ao nosso site');
alert(mensagemErro);
nome = prompt('Qual o seu primeiro nome?');
idade = prompt('Qual a sua idade?');

if(idade >= 18 ){
    alert('Pode tirar a habilitação');
}