// Simulação de adição de itens ao pedido

// Seleciona todos os botões "Adicionar"
const botoesAdicionar = document.querySelectorAll('.adicionar');

// Seleciona a lista onde os itens do pedido serão exibidos
const listaPedido = document.getElementById('lista_pedido');

// Seleciona o elemento que exibirá o valor total
const totalElemento = document.getElementById('total');

// Criação de variável que armazena o total do pedido
let total = 0;

// Percorre todos os botões "Adicionar" e adiciona um evento de clique
botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        // Obtém o elemento pai do botão (o produto)
        const produto = botao.parentElement;

        // Obtém o nome do produto a partir do texto da tag <h3>
        const nome = produto.querySelector('h3').textContent;

        // Obtém o preço do produto, removendo o "R$" e convertendo para número decimal
        const preco = parseFloat(produto.querySelector('.preco').textContent.replace("R$", "").replace(",", "."));

        // Cria um novo item <li> para adicionar o produto ao pedido
        const itemPedido = document.createElement('li');
        

        // Adiciona o item criado à lista de pedidos
        listaPedido.appendChild(itemPedido);

        // Atualiza o total da compra
        total += preco;
        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
    });
});
