function onLoand() {
    const dependencias = {
        tela: Tela
    }

    const jogoDaMemoria = new JogoDaMemoria(dependencias);

    jogoDaMemoria.inicializar();
}

window.onload = onLoand