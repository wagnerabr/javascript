const ID_CONTEUDO = "conteudo";
const BOTAO_JOGAR = "jogar";
class Tela {
    static obterCodigoHtml(item) {
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;" onclick="window.verificaSelecao('${item.id}', '${item.nome}')">
                <img class="card-img-top" src="${item.img}" name="${item.nome}" alt="Descubra">
            </div>
            <br />
        </div>
        `;
    }

    static alterarConteudo(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO);
        conteudo.innerHTML = codigoHtml;
    }

    static gerarStringHTMLPelaImagem(itens) {
        //para cada item da lista, vai executar a função obterCodigoHtml
        //ao final, vai concatenar tudo em uma unica string
        //Muda array para string
        return itens.map(Tela.obterCodigoHtml).join('');
    }

    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudo(codigoHtml);
    }

    static configurarBotaoJogar(funcaoOnClick) {
        const btnJogar = document.getElementById(BOTAO_JOGAR);
        btnJogar.onclick = funcaoOnClick
    }

    static configurarBotaoVerificarSelecao(funcaoOnClick) {
        window.verificaSelecao = funcaoOnClick
    }

    static exibirHerois(nomeDoHeroi, img) {
        const elementosHtml = document.getElementsByName(nomeDoHeroi);
        // com o forEach, para cada item, dentro do () setamos o valor da imagem
        elementosHtml.forEach(item => {
            item.src = img
        });
    }
}