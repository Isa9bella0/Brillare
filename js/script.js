document.querySelector("button").addEventListener("click", function() {
    window.location.href = "produtos.html";
});
document.querySelectorAll(".dropdown > a").forEach(item => {
    item.addEventListener("click", function(event) {
        event.preventDefault();
        this.nextElementSibling.classList.toggle("active");
    });
});
let carrinho = [];

function adicionarAoCarrinho(event, nome, preco) {
    event.stopPropagation(); // Evita conflitos com o clique no item
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    let carrinhoHtml = "";
    carrinho.forEach(produto => {
        carrinhoHtml += `<li>${produto.nome} - R$ ${produto.preco.toFixed(2)}</li>`;
    });
    document.getElementById("carrinho").innerHTML = carrinhoHtml;
}

function mostrarDetalhes(nome, preco) {
    alert(`Detalhes do Produto:\nNome: ${nome}\nPreço: ${preco}`);
}
