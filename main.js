//Simulação de adicção de itens de pedido
// Seleciona todos os botões que possuem a classe "Adicionar"

const botoesAdicionar = document.querySelectorAll ('.adicionar');

//Selecionar a lista onde os itens do pedido serão exbidos

const listaPeido = document.getElementById ('lista_pedido');

// Seleciona o elemento que exibirá o valor total

const totalElemento = document.getElementById ('total');

//Criação devariavel que armazena total do pedido

let total=0;

//Percorre todos os botões "Adicionar" e adiciona um evento de click em cada um 

botoesAdicionar.forEach((botao)=>{

    botao.addEventListener('click', () =>{
        //Obtem o elemento pai do botão
        cont = botao.parentElement;

        //Obtem o nome do produto a patir do texto da tag <h3>
        

    });
    

})