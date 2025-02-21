//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const nomes_de_amigos = [];
        let n_sorteio;
        let sorteado = "..."; 

        //Exibe mensagem de erro ao deixar o campo vazio
        function validarValor(){
             window.alert('Insira um valor válido');
        }

        //Essa função controla a lista de amigos que foi adicionado
        function exibirLista(){

            //limpa a lista para que não hajam duplicatas
            document.getElementById('listaAmigos').innerHTML = '';

            //adiciona cada nome na lista
            for(let i = 0; i <= nomes_de_amigos.length -1; i++){
                
                //cria um elemento de uma lista
                let lista = document.createElement('li');
                //cria o texto de um elemento, sem exibi-lo
                let cada_nome = document.createTextNode(nomes_de_amigos[i]);
                //vincula um elemento com seu texto
                lista.appendChild(cada_nome);
                //adiciona a li dentro de um ul
                document.getElementById('listaAmigos').appendChild(lista);
                
            }

        }
        
        function adicionarAmigo(){
            
            if(document.querySelector('input').value != ""){           
            //adiciona o nome na lista
            nomes_de_amigos.push(document.querySelector('input').value.toUpperCase());
            //limpa o campo
            document.querySelector('input').value = '';
            //mostra a lista
            exibirLista();
        }else{
            //mostra a mensagem de erro
            validarValor();           
        }
     

        }

        function sortearAmigo(){
            //pega o tamanho da lista e sorteia um numero
            n_sorteio = parseInt(Math.random() * nomes_de_amigos.length );
            //define o sorteado 
            sorteado = nomes_de_amigos[n_sorteio]; 

            //muda o texto do html para dar a noticia
             if(sorteado != undefined){ 
                //se sorteado não for nulo, será exibido
                document.getElementById('resultado').innerHTML = `O seu amigo secreto é ${sorteado} `
             }else{
                //mostra a mensagem de erro
                validarValor();
             };
             


        }

       
        

        
