document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const erroMsg = document.getElementById("erroMsg");

    // Login fictício: você pode trocar por um backend real depois
    if (email === "cliente@brillare.com" && senha === "joias123") {
        alert("Login realizado com sucesso!");
        window.location.href = "produtos.html";
    } else {
        erroMsg.style.display = "block";
    }
});
// Exibir mensagem de erro se o login falhar
document.getElementById("erroMsg").addEventListener("click", function () {
    this.style.display = "none";
});