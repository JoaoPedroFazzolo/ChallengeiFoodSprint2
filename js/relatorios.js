// Baixar relatorio em Excel
document.getElementById('excelBtn').addEventListener('click', function () {
    const table = document.getElementById('transactionTable').closest('table'); // Gets the full table element
    const wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, 'relatorio.xlsx');
});

// Baixar relatorio em PDF
document.getElementById('pdfBtn').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Pegando os dados do cabeçalho e do corpo da tabela
    const table = document.getElementById('transactionTable').closest('table');
    const headers = [...table.querySelectorAll('thead th')].map(th => th.innerText);
    const rows = [...table.querySelectorAll('tbody tr')].map(tr => {
        return [...tr.querySelectorAll('td')].map(td => td.innerText);
    });

    // Gerando o relatório PDF com cabeçalho
    doc.autoTable({
        head: [headers],   // Cabeçalhos da tabela
        body: rows,        // Dados do corpo da tabela
    });

    doc.save('relatorio.pdf');
});