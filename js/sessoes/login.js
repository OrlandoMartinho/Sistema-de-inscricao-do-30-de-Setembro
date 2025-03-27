document.getElementById("entrar").addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do botão

    // Capturar valores do formulário
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Simulação de autenticação (Substitua por uma requisição real à API)
    if (email =="admin@gmail.com"&&senha=="12345678") {
        window.location.href = "../../pages/avaliadores/avaliador-home.html"
    } else{
        alert("Credenciais inválidas ,por favor tente novamente")
    }
});