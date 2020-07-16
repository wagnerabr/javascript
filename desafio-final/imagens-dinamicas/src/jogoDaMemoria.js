class JogoDaMemoria {
    constructor({ tela }) {
        this.tela = tela

        this.heroisIniciais = [
            {
                img: './arquivos/aranha.png', 
                nome: 'aranha'
            },
            {
                img: './arquivos/ariel.png', 
                nome: 'ariel'
            },
            {
                img: './arquivos/batman.png', 
                nome: 'batman'
            },
            {
                img: './arquivos/bela.png', 
                nome: 'bela'
            },
            {
                img: './arquivos/branca.png', 
                nome: 'branca'
            },
            {
                img: './arquivos/cinderela.png', 
                nome: 'cinderela'
            },
            {
                img: './arquivos/deadpool.png', 
                nome: 'deadpool'
            },
            {
                img: './arquivos/flash.png', 
                nome: 'flash'
            },
            {
                img: './arquivos/groot.png', 
                nome: 'groot'
            },
            {
                img: './arquivos/jasmin.png', 
                nome: 'jasmin'
            },
            {
                img: './arquivos/leia.png', 
                nome: 'leia'
            },
            {
                img: './arquivos/thor.png', 
                nome: 'thor'
            }
        ],
        this.iconePadrao = './arquivos/default.png';
        this.heroisEscondidos = []
        this.heroisSelecionados = []

    }

    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais);
        this.tela.configurarBotaoJogar(this.jogar.bind(this));
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this));
    }
    embaralhar() {
        const copias = this.heroisIniciais
        .concat(this.heroisIniciais)
        //entra em cada item e cria um id aleatoria
        .map(item => {
            return Object.assign({}, item, {
                id: Math.random()/0.5
            })
        })
        //Ordernar de forma aleatória
        .sort(() => Math.random);

        this.tela.atualizarImagens(copias);

        setTimeout(() => {
            this.esconderHerois(copias) 
        }, 1000);

        
    }
    esconderHerois(herois) {
        //Vamos trocar a imagem de todos os herois existentes
        //pelo icone padrao
        //como fizemos no construtor, vamos extrair somente o necessário
        //usando a sintaxe ({ chave: 1}) estamos falando que vamos retornar 
        //o que tiver dentro dos parenteses
        //quando nao usamos : (exemplo do id), o JS entende que o nome
        //é o mesmo do valor. Ex. id: id, vira id,
        const heroisOcultos = herois.map(({nome, id}) => ({id, nome, img: this.iconePadrao}))
        this.tela.atualizarImagens(heroisOcultos);
        //guardar os herois para saber se está certo ou nao
        this.heroisOcultos = heroisOcultos;
    }
    verificarSelecao(id, nome) {
        const item = {id, nome};
        //vamos verificar a quantidade de herois selecionados
        //e tomar a açao se escolheu certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch (heroisSelecionados) {
            case 0:
                //adiciona a escolha dentro de uma lista
                this.heroisSelecionados.push(item);
                break;
            case 1:
                //vamos obter o primeiro item da lista
                const [ opcao1 ] = this.heroisSelecionados
                //zerar lista anterior
                this.heroisSelecionados = [];
                //conferir se o nome e id são iguais
                if (opcao1.nome === item.nome && opcao1 !== item.id) {
                    this.exibirHerois(item.nome, item.img)
                    //parar a execução
                    return;
                }

                alert('Combinação incorreta!');
                break;        
            default:
                break;
        }
    }
    exibirHerois(nomeDoHeroi) {
        const { img } = this.heroisIniciais.find(({ nome }) => nomeDoHeroi === nome)

        this.tela.exibirHerois(nomeDoHeroi, img)
    }
    jogar() {
        this.embaralhar()
    }
}