document.getElementById("cadastroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const sucessoMsg = document.getElementById("sucessoMsg");

    // Simulação de cadastro
    if (nome && email && senha) {
        localStorage.setItem("usuarioBrillare", JSON.stringify({ nome, email, senha }));
        sucessoMsg.style.display = "block";

        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    }
});
// Exibir mensagem de sucesso após o cadastro
document.getElementById("sucessoMsg").addEventListener("click", function () {
    this.style.display = "none";
});
// Limpar o formulário após o envio         

document.getElementById("cadastroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmaSenha").value;
    const sucessoMsg = document.getElementById("sucessoMsg");
    const erroMsg = document.getElementById("erroMsg");

    // Limpar mensagens anteriores
    erroMsg.style.display = "none";
    sucessoMsg.style.display = "none";

    // Verificar se o email já foi cadastrado
    let usuariosCadastrados = JSON.parse(localStorage.getItem("usuariosBrillare")) || [];
    const usuarioExistente = usuariosCadastrados.find(usuario => usuario.email === email);

    if (usuarioExistente) {
        erroMsg.style.display = "block";
        erroMsg.textContent = "Este email já foi cadastrado!";
        return;
    }

    // Verificar se as senhas coincidem
    if (senha !== confirmaSenha) {
        erroMsg.style.display = "block";
        erroMsg.textContent = "As senhas não coincidem!";
        return;
    }

    // Validar a senha (mínimo de 8 caracteres, pelo menos 1 número, 1 maiúscula e 1 minúscula)
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regexSenha.test(senha)) {
        erroMsg.style.display = "block";
        erroMsg.textContent = "Senha deve ter pelo menos 8 caracteres, 1 letra maiúscula, 1 minúscula e 1 número!";
        return;
    }

    // Simular o cadastro
    usuariosCadastrados.push({ nome, email, senha });
    localStorage.setItem("usuariosBrillare", JSON.stringify(usuariosCadastrados));

    // Mostrar mensagem de sucesso
    sucessoMsg.style.display = "block";
    sucessoMsg.textContent = "Cadastro realizado com sucesso! Você será redirecionado para o login.";

    // Redirecionar após 2 segundos
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
});
