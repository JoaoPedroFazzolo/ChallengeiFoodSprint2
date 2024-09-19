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

