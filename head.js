fetch("head.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("head-container").innerHTML = data;
  })
  .catch((error) => console.error("Erro ao carregar o head:", error));

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
}
