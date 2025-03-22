document.addEventListener("DOMContentLoaded", function () {
  // Carrega o modal dinamicamente
  fetch("../../components/usuarios/modal-inscricao.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("modalContainer").innerHTML = data;

          // Agora que o modal foi carregado, podemos selecionar os elementos corretamente
          const openModalBtns = document.querySelectorAll(".apply-btn");
          const modalOverlay = document.getElementById("modalOverlay");
          const closeModalBtn = document.getElementById("closeModal");

          if (!modalOverlay || !closeModalBtn) {
              console.error("Erro: Elementos do modal não foram encontrados.");
              return;
          }

          // Abrir modal ao clicar no botão "Candidatar-se"
          openModalBtns.forEach(button => {
              button.addEventListener("click", () => {
                  modalOverlay.style.display = "flex";
              });
          });

          // Fechar modal ao clicar no botão "X"
          closeModalBtn.addEventListener("click", () => {
              modalOverlay.style.display = "none";
          });

          // Fechar modal ao clicar fora dele
          modalOverlay.addEventListener("click", (event) => {
              if (event.target === modalOverlay) {
                  modalOverlay.style.display = "none";
              }
          });
      })
      .catch(error => console.error("Erro ao carregar o modal:", error));
});
