
let tentativas = 1;
let numeroSecreto;
let numeroSorteados = [1,2,3,4,5,6,7,8,9,10];



//redefine o conteudo
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //vai falar o que foi exibido na tela
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

//exibe a mensagem de inicio
function mensagemInicial(){
    //chama a função que define o conteudo
    exibirTexto( 'h1',`Jogo do número secreto` );
    exibirTexto('p',`Escolha um número entre 1 a 10` );


}

//gera um numero de 1 a 10
function gerarNumeroAleatorio(){

    //Gera um número aletório
    let numeroEscolhido = parseInt(Math.random() * 10 + 1 );
    let quantidadeDeElementosLista = numeroSorteados.length;

    //se todos os números forem sorteados, a lista volta a ficar sem numeros
    if(quantidadeDeElementosLista == 10){
        numeroSorteados = [];
    }

    //se o número secreto já tiver sido escolhido, vai gerar outro
    if(numeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        //insere o número secreto na lista de números usados
        numeroSorteados.push(numeroEscolhido);
        console.log(numeroSorteados);
        return numeroEscolhido;
    }

}

numeroSecreto = gerarNumeroAleatorio();



//limpar o campo
function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    mensagemInicial();
    //o botao de reiniciar fica desativado
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

mensagemInicial();

//ao clicar no botao, retorna uma mensagem no console
function verificarChute(){
    let chute = document.querySelector('input').value;
    

    //se o chute estiver certo, ele vai mostrar o texto e o numero de tentativas
    if(chute == numeroSecreto){
        exibirTexto('h1','Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas': 'tentativa';
        let mensagemTentativa = `Você acertou o número secreto em ${tentativas} ${palavraTentativa}`;
        exibirTexto('p', mensagemTentativa);

        //vai habilitar o botao de reiniciar
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
    //se nao estiver certo, vai dar dicas para chegar no numero
        if(chute > numeroSecreto){
            exibirTexto('p', 'O número secreto é menor');
            
        }else{
            exibirTexto('p', 'O número secreto é maior');
        }

        //soma as tentativas
        tentativas++;

        limpaCampo();

    }
}

