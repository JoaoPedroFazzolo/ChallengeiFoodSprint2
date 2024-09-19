// Array com os cargos
const roles = ['Financeiro', 'Cardápio', 'Administrador', 'Atendimento'];
const myModal = document.getElementById('addEmployeeModalLabel')
const myInput = document.getElementById('editEmployeeModalLabel')

// Função para cadastrar funcionário - Salvar
document.getElementById('saveEmployeeBtn').addEventListener('click', function () {
    const nome = document.getElementById('employeeName').value;
    const role = parseInt(document.getElementById('employeeRole').value);
    const dataEntrada = document.getElementById('employeeDate').value;

    // Verifica se todos os campos estão preenchidos corretamente
    if (!nome || isNaN(role) || !dataEntrada) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Adicionar um funcionário à tabela
    const tableBody = document.querySelector('.tabelaFuncionarios');  // Seleciona o tbody correto
    const id = tableBody.children.length + 1;  // Gera um novo ID com base na quantidade de linhas da tabela
    const newRow = document.createElement('tr'); // Cria uma nova linha na tabela

    // Define o conteúdo da nova linha
    newRow.innerHTML = `
        <td>${id}</td>
        <td>${nome}</td>
        <td><p class="status ${roles[role - 1].toLowerCase()}">${roles[role - 1]}</p></td>
        <td>${dataEntrada}</td>
        <td>-</td>
    `;

    // Adiciona a nova linha à tabela
    tableBody.appendChild(newRow);

    // Fechar o modal após salvar o funcionário
    const addEmployeeModal = new bootstrap.Modal(document.getElementById('addEmployeeModal'));
    addEmployeeModal.hide();

    // Limpar o formulário
    document.getElementById('addEmployeeForm').reset();
});


document.addEventListener('DOMContentLoaded', function () {
    const updateEmployeeBtn = document.getElementById('updateEmployeeBtn');
    const editEmployeeForm = document.getElementById('editEmployeeForm');

    updateEmployeeBtn.addEventListener('click', function () {
        // Obter dados do formulário
        const employeeId = document.getElementById('editEmployeeId').value;
        const employeeName = document.getElementById('editEmployeeName').value;
        const employeeRole = document.getElementById('editEmployeeRole').value;
        const exclusionDate = document.getElementById('editEmployeeExclusionDate').value;

        // Validar se o ID do funcionário foi fornecido
        if (!employeeId) {
            alert('Por favor, insira o ID do Funcionário.');
            return;
        }

        // Encontrar a linha correspondente na tabela
        const tableBody = document.querySelector('.tabelaFuncionarios');
        const rows = tableBody.querySelectorAll('tr');
        let rowToUpdate = null;

        rows.forEach(row => {
            if (row.cells[0].textContent === employeeId) {
                rowToUpdate = row;
            }
        });

        if (rowToUpdate) {
            // Atualizar os dados da linha na tabela
            rowToUpdate.cells[1].textContent = employeeName;
            rowToUpdate.cells[2].innerHTML = `
                    <p class="status ${getRoleClass(employeeRole)}">${getRoleName(employeeRole)}</p>
                `;
            rowToUpdate.cells[4].textContent = exclusionDate || '-';
        } else {
            alert('Funcionário não encontrado.');
        }
    });

    // Funções auxiliares para obter o nome e a classe do cargo
    function getRoleName(roleId) {
        switch (roleId) {
            case '1': return 'Financeiro';
            case '2': return 'Cardápio';
            case '3': return 'Administrador';
            case '4': return 'Atendimento';
            default: return 'Desconhecido';
        }
    }

    function getRoleClass(roleId) {
        switch (roleId) {
            case '1': return 'financeiro';
            case '2': return 'cardapio';
            case '3': return 'administrador';
            case '4': return 'atendimento';
            default: return 'desconhecido';
        }
    }
});

function findEmployeeRowById(id) {
    const rows = document.querySelectorAll('tbody tr');
    return Array.from(rows).find(row => row.firstElementChild.textContent.trim() === id);
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

