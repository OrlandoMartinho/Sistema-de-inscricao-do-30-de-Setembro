// Carregar o modal dinamicamente
fetch("../../components/usuarios/modal-inscricao.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("modal-container").innerHTML = html;
        configurarModal(); // Inicializa os eventos do modal
    });

function configurarModal() {
    const modal = document.getElementById("modalDialog");
    const abrirModal = document.getElementById("abrirModal");
    const fecharModal = document.getElementById("closeModal");

    if (!modal) return;

    abrirModal.addEventListener("click", () => {
        modal.showModal();
    });

    fecharModal.addEventListener("click", () => {
        modal.close();
    });

    // Fechar modal ao clicar fora
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
}
