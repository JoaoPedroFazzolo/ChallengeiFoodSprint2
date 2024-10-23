const myModal = document.getElementById('addOrderModalLabel');
const myInput = document.getElementById('editOrderModalLabel');

// Botão - Cadastrar
// Função para cadastrar pedido - Salvar
document.getElementById('saveOrderBtn').addEventListener('click', function () {
    const numero = document.getElementById('orderNumber').value;
    const pago = document.getElementById('totalPaid').value;
    const despesas = document.getElementById('totalExpense').value;
    const totalReceber = document.getElementById('totalReceivable').value;
    const dataHorario = document.getElementById('orderDateTime').value;

    // Verifica se todos os campos estão preenchidos corretamente
    if (!numero || !pago || !despesas || !totalReceber || !dataHorario) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Seleciona o tbody correto
    const tableBody = document.getElementById('transactionTable');  // Corrigido para o ID correto
    const newRow = document.createElement('tr'); // Cria uma nova linha na tabela

    // Define o conteúdo da nova linha
    newRow.innerHTML = `
        <td class="text-center">${numero}</td>
        <td class="text-end">R$ ${pago}</td>
        <td class="text-end">R$ ${despesas}</td>
        <td class="text-end">R$ ${totalReceber}</td>
        <td class="text-center">${new Date(dataHorario).toLocaleString()}</td>
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
