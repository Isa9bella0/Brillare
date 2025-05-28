class Carrinho {
    constructor() {
        this.itens = JSON.parse(localStorage.getItem("carrinho")) || [];
        this.contadorElemento = document.getElementById("contador");
        this.listaCarrinhoElemento = document.getElementById("itensCarrinho");
        this.totalElemento = document.getElementById("totalCarrinho");
        this.atualizarContador();
        this.exibirItens();
    }

    adicionarItem(nome, preco, imagem) {
        this.itens.push({ nome, preco, imagem });
        this.salvarCarrinho();
        this.atualizarContador();
        this.exibirItens();
    }

    removerItem(index) {
        this.itens.splice(index, 1);
        this.salvarCarrinho();
        this.atualizarContador();
        this.exibirItens();
    }

    limparCarrinho() {
        this.itens = [];
        this.salvarCarrinho();
        this.atualizarContador();
        this.exibirItens();
    }

    salvarCarrinho() {
        localStorage.setItem("carrinho", JSON.stringify(this.itens));
    }

    atualizarContador() {
        if (this.contadorElemento) {
            this.contadorElemento.textContent = this.itens.length;
        }
    }

    exibirItens() {
        if (!this.listaCarrinhoElemento) return;

        this.listaCarrinhoElemento.innerHTML = "";

        if (this.itens.length === 0) {
            this.listaCarrinhoElemento.innerHTML = "<p>Seu carrinho está vazio.</p>";
        } else {
            this.itens.forEach((item, index) => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <div class="item-carrinho">
                        <img src="${item.imagem}" alt="${item.nome}" width="80" />
                        <div>
                            <strong>${item.nome}</strong><br>
                            R$ ${item.preco.toFixed(2).replace(".", ",")}
                        </div>
                        <button onclick="meuCarrinho.removerItem(${index})">Remover</button>
                    </div>
                `;
                this.listaCarrinhoElemento.appendChild(li);
            });
        }

        // Atualiza total
        if (this.totalElemento) {
            const total = this.itens.reduce((sum, item) => sum + parseFloat(item.preco), 0);

            this.totalElemento.textContent = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
        }
    }
}

// Instancia o carrinho e adiciona eventos
document.addEventListener("DOMContentLoaded", () => {
    window.meuCarrinho = new Carrinho();

    // Adiciona evento aos botões de adicionar
    document.querySelectorAll(".botaoAdicionar").forEach(botao => {
        botao.addEventListener("click", (event) => {
            const nome = event.target.dataset.nome;
            const preco = parseFloat(event.target.dataset.preco);
            const imagem = event.target.dataset.imagem;
            meuCarrinho.adicionarItem(nome, preco, imagem);
        });
    });
});
// Função para limpar o carrinho
function limparCarrinho() {
    if (confirm("Você tem certeza que deseja limpar o carrinho?")) {
        meuCarrinho.limparCarrinho();
    }
}