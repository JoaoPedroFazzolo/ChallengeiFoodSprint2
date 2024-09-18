// Cargos existentes
const roles = ['Financeiro', 'Cardapio', 'Administrador', 'Atendimento'];

// Função para achar a pessoa pelo ID
function findEmployeeRowById(id) {
    const rows = document.querySelectorAll('tbody tr');
    return Array.from(rows).find(row => row.firstElementChild.textContent.trim() === id);
}

// Cadastrar Funcionario
document.querySelectorAll('.btn-custom')[0].addEventListener('click', function () {
    const nome = prompt("Digite o nome do funcionário:");
    if (!nome) {
        alert("Por favor, insira o nome do funcionário.");
        return;
    }

    let role = prompt(`Escolha o cargo do funcionário (Digite o número):\n1. Financeiro\n2. Cardápio\n3. Administrador\n4. Atendimento`);
    role = parseInt(role);

    if (role < 1 || role > 4 || isNaN(role)) {
        alert("Escolha inválida. Por favor, insira um número de 1 a 4.");
        return;
    }

    const dataEntrada = prompt("Digite a data de entrada (dd/mm/yyyy):");
    if (!dataEntrada) {
        alert("Por favor, insira a data de entrada.");
        return;
    }

    // Adicionar a pessoa para a tabela
    const tableBody = document.querySelector('tbody');
    const newRow = document.createElement('tr');
    const id = tableBody.children.length + 1;

    newRow.innerHTML = `
        <td>${id}</td>
        <td>${nome}</td>
        <td><p class="status ${roles[role - 1].toLowerCase()}">${roles[role - 1]}</p></td>
        <td>${dataEntrada}</td>
        <td>-</td>
    `;

    tableBody.appendChild(newRow);

    alert(`Funcionário ${nome} cadastrado com sucesso!`);
});

// Editar Funcionario
document.querySelectorAll('.btn-custom')[1].addEventListener('click', function () {
    const id = prompt("Digite o ID do funcionário que deseja editar:");
    
    if (id) {
        const employeeRow = findEmployeeRowById(id);

        if (!employeeRow) {
            alert(`Funcionário com ID ${id} não encontrado.`);
            return;
        }

        // Allow user to change the role
        let newRole = prompt(`Escolha o novo cargo do funcionário (Digite o número):\n1. Financeiro\n2. Cardápio\n3. Administrador\n4. Atendimento`);
        newRole = parseInt(newRole); // Convert input to number

        if (newRole >= 1 && newRole <= 4 && !isNaN(newRole)) {
            // Update the role in the table
            const roleCell = employeeRow.children[2];
            roleCell.innerHTML = `<p class="status ${roles[newRole - 1].toLowerCase()}">${roles[newRole - 1]}</p>`;
        } else {
            alert("Cargo inválido. O cargo não foi alterado.");
        }

        // Allow user to add "Data de exclusão"
        const dataExclusao = prompt("Digite a data de exclusão (dd/mm/yyyy) ou deixe em branco para não alterar:");
        if (dataExclusao) {
            employeeRow.children[4].textContent = dataExclusao;
        }

        alert(`Funcionário com ID ${id} editado com sucesso!`);
    } else {
        alert("Por favor, insira um ID válido.");
    }
});

// Search functionality for the table
const searchInput = document.querySelector('.form-control');
searchInput.addEventListener('input', function () {
    const filter = searchInput.value.toLowerCase();
    const tableRows = document.querySelectorAll('tbody tr');

    tableRows.forEach(function (row) {
        const rowData = row.textContent.toLowerCase();
        if (rowData.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
