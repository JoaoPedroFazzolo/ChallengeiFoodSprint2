// Array com os cargos
const roles = ['Financeiro', 'Cardapio', 'Administrador', 'Atendimento'];

// Função para cadastrar funcionario
document.getElementById('saveEmployeeBtn').addEventListener('click', function () {
    const nome = document.getElementById('employeeName').value;
    const role = parseInt(document.getElementById('employeeRole').value);
    const dataEntrada = document.getElementById('employeeDate').value;

    // Verifica se todos os campos estão preenchidos corretamente
    if (!nome || isNaN(role) || !dataEntrada) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Adicionar um funcionário a tabela
    const tableBody = document.querySelector('.tabelaFuncionarios');
    const id = tableBody.children.length + 1;  
    const newRow = document.createElement('tr'); 

    // Define o conteudo da nova linha
    newRow.innerHTML = `
        <td>${id}</td>
        <td>${nome}</td>
        <td><p class="status ${roles[role - 1].toLowerCase()}">${roles[role - 1]}</p></td>
        <td>${dataEntrada}</td>
        <td>-</td>
    `;

    tableBody.appendChild(newRow);

    // Fechar o modal após salvar o funcionário
    const addEmployeeModal = new bootstrap.Modal(document.getElementById('addEmployeeModal'));
    addEmployeeModal.hide();

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

        if (!employeeId) {
            alert('Por favor, insira o ID do Funcionário.');
            return;
        }

        const tableBody = document.querySelector('.tabelaFuncionarios');
        const rows = tableBody.querySelectorAll('tr');
        let rowToUpdate = null;

        rows.forEach(row => {
            if (row.cells[0].textContent === employeeId) {
                rowToUpdate = row;
            }
        });

        if (rowToUpdate) {
            rowToUpdate.cells[1].textContent = employeeName;
            rowToUpdate.cells[2].innerHTML = `
                    <p class="status ${getRoleClass(employeeRole)}">${getRoleName(employeeRole)}</p>
                `;
            rowToUpdate.cells[4].textContent = exclusionDate || '-';
        } else {
            alert('Funcionário não encontrado.');
        }
    });

    // Obter o nome e a classe do cargo
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
    const filter = searchInput.value.trim().toLowerCase();
    const tableRows = document.querySelectorAll('tbody tr');

    tableRows.forEach(function (row) {
        const rowData = row.textContent.trim().toLowerCase();
        if (rowData.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});