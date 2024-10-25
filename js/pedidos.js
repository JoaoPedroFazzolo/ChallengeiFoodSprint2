const formasDePagamento = ['Crédito', 'Débito', 'Pix', 'Vale Alimentação', 'Vale Refeição'];
const myModal = document.getElementById('addOrderModalLabel');
const myInput = document.getElementById('editOrderModalLabel');

// Botão - Cadastrar
// Função para cadastrar pedido - Salvar
document.getElementById('saveOrderBtn').addEventListener('click', function () {
    const pagamento = document.getElementById('paymentMethod').value;
    const itens = document.getElementById('items').value;
    const pago = parseFloat(document.getElementById('totalPaid').value) || 0;
    const despesas = parseFloat(document.getElementById('totalExpense').value) || 0;
    const totalReceber = pago - despesas;

    const dataHorario = document.getElementById('orderDateTime').value;
    const data = new Date(dataHorario);
    const formattedDate = data.toLocaleDateString('pt-BR', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
    });
    const formattedTime = data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    const dataNova = `${formattedDate}, ${formattedTime}`;

    // Verifica se todos os campos estão preenchidos corretamente
    if (isNaN(pagamento) || !pago || !despesas || !totalReceber || !dataHorario) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Seleciona o tbody correto
    const tableBody = document.getElementById('transactionTable');  // Corrigido para o ID correto
    const id = Math.floor(Math.random() * 9000) + 1000; // generates a random number between 100 and 999
    const clientId = tableBody.children.length + 1;
    const newRow = document.createElement('tr'); // Cria uma nova linha na tabela

    // Define o conteúdo da nova linha
    newRow.innerHTML = `
        <td>${id}</td>
        <td>${clientId}</td>
        <td>${formasDePagamento[pagamento - 1]}</td>
        <td>${itens}</td>
        <td>R$${pago},00</td>
        <td>R$${despesas},00</td>
        <td>R$${totalReceber},00</td>
        <td>${dataNova}</td>
    `;

    // Adiciona a nova linha à tabela
    tableBody.appendChild(newRow);

    // Fechar o modal após salvar o pedido
    const addOrderModal = new bootstrap.Modal(document.getElementById('addOrderModal'));
    addOrderModal.hide();

    // Limpar o formulário
    document.getElementById('addOrderForm').reset();
});

// Foco automático no campo de input quando o modal é mostrado
myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus();
});

//Botão - Editar
document.addEventListener('DOMContentLoaded', function () {
    const updateOrderBtn = document.getElementById('updateOrderBtn');

    updateOrderBtn.addEventListener('click', function () {
        // Obter dados do formulário
        const orderId = document.getElementById('editOrderId').value;
        const totalPaid = document.getElementById('editTotalPaid').value;
        const totalExpense = document.getElementById('editTotalExpense').value;

        // Validar se o ID do funcionário foi fornecido
        if (!orderId) {
            alert('Por favor, insira o ID do Pedido.');
            return;
        }

        // Encontrar a linha correspondente na tabela
        const tableBody = document.querySelector('#transactionTable');
        const rows = tableBody.querySelectorAll('tr');
        let rowToUpdate = null;

        rows.forEach(row => {
            if (row.cells[0].textContent === orderId) {
                rowToUpdate = row;
            }
        });

        if (rowToUpdate) {
            // Atualizar os dados da linha na tabela
            rowToUpdate.cells[4].textContent = `R$${parseFloat(totalPaid)},00`;
            rowToUpdate.cells[5].textContent = `R$${parseFloat(totalExpense)},00`;
            const difference = parseFloat(totalPaid) - parseFloat(totalExpense);
            rowToUpdate.cells[6].textContent = `R$${parseFloat(difference)},00`;
            // Limpar o formulário
            document.getElementById('editOrderForm').reset();
        } else {
            alert('Pedido não encontrado.');
            // Limpar o formulário
            document.getElementById('editOrderForm').reset();
        }
    });
});

function findOrderRowById(orderId) {
    const rows = document.querySelectorAll('tbody tr');
    return Array.from(rows).find(row => row.firstElementChild.textContent.trim() === orderId);
}

// Busca
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function () {
    const filter = searchInput.value.trim().toLowerCase();  // Converte o valor da busca para minúsculas
    const tableRows = document.querySelectorAll('tbody tr');  // Seleciona todas as linhas da tabela

    tableRows.forEach(function (row) {
        let rowMatches = false;

        // Verifica todas as células da linha
        row.querySelectorAll('td').forEach(function (cell) {
            const cellText = cell.textContent.trim().toLowerCase();  // Converte o texto da célula para minúsculas
            if (cellText.includes(filter)) {  // Verifica se a célula contém o valor de busca
                rowMatches = true;
            }
        });

        // Exibe ou oculta a linha com base na correspondência
        row.style.display = rowMatches ? '' : 'none';
    });
});