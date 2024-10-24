// Busca
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function () {
    const filter = searchInput.value.trim().toLowerCase();
    const tableRows = document.querySelectorAll('tbody tr');

    tableRows.forEach(function (row) {
        let rowMatches = false;

        // Verifica todas as células da linha
        row.querySelectorAll('td').forEach(function (cell) {
            const cellText = cell.textContent.trim().toLowerCase();
            if (cellText.includes(filter)) {
                rowMatches = true;
            }
        });

        row.style.display = rowMatches ? '' : 'none';
    });
});

