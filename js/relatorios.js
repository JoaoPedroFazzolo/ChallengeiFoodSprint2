// Baixar relatorio em Excel
document.getElementById('excelBtn').addEventListener('click', function () {
    const table = document.getElementById('transactionTable');
    const wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, 'relatorio.xlsx');
});

// Baixar relatorio em PDF
document.getElementById('pdfBtn').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.autoTable({ html: '#transactionTable' });
    doc.save('relatorio.pdf');
});