const state = {
    /* views - variáveis para exibição na tela */
    view: {
        keys: document.querySelectorAll('.key')
    },
    /* values - variáveis para controle interno */
    values: {
    },
    /* actions - variáveis que cotrolam ações na engine */
    actions: {
    },
    /* objects - variáveis que carregam informações externas */
    objects: {
        audio: new Audio()
    }
}

function addListenerKey() {
    state.view.keys.forEach((key) => {
        key.addEventListener('click', () => playTune(key.dataset.key))
    })
    document.addEventListener('keydown', (pressed) => playTune(pressed.key))
}

function playTune(note) {
    state.objects.audio.src = `./assets/audio/${note.toLowerCase()}.wav`
    state.objects.audio.play()
}

function main() {
    addListenerKey()
}

main();