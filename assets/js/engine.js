const state = {
    /* views - variáveis para exibição na tela */
    view: {
        keys: document.querySelectorAll('.key'),
        volumeSlider: document.querySelector('.slider input'),
        toggleChecker: document.querySelector('.key-check input')
    },
    /* values - variáveis para controle interno */
    values: {
        validKeys: [],
        clickedKey: '',
        volume: .5
    },
    /* objects - variáveis que carregam informações externas */
    objects: {
        audio: new Audio()
    }
}

function addListenerKey() {
    /* função que possibilita teclas serem clicadas */

    /* adiciona interação de mouse com cada uma das teclas */
    state.view.keys.forEach((key) => {
        key.addEventListener('click', () => playTune(key.dataset.key.toLowerCase()))
        state.values.validKeys.push(key.dataset.key.toLowerCase())
    })

    /* adiciona interação do teclado com a respectiva tecla */
    document.addEventListener('keydown', (pressed) => playTune(pressed.key))
}

function playTune(note) {
    /* função que executa a nota */

    /* checagem para garantir que apenas teclas válidas sejam executadas */
    if (state.values.validKeys.includes(note)) {
        state.objects.audio.src = `./assets/audio/${note}.wav`
        state.objects.audio.play()
        animateKeyboard(note.toUpperCase())
    }
}

function animateKeyboard(key) {
    /* função que anima a tecla */

    state.values.clickedKey = document.querySelector(`[data-key='${key}']`)
    state.values.clickedKey.classList.add('active')
    setTimeout(() => {
        state.values.clickedKey.classList.remove('active')
    }, 125)
}

function addListenerSlider() {
    /* função que regula o volume */

    state.view.volumeSlider.addEventListener('input', (slider) => {
        state.objects.audio.volume = slider.target.value
    })
}

function addListenerChecker() {
    /* função que ativa ou desativa visibilidade do texto das teclas */

    state.view.toggleChecker.addEventListener('click', () => {
        state.view.keys.forEach((key) => {
            key.classList.toggle('hidden')
        })
    })
}

function main() {
    addListenerKey()
    addListenerSlider()
    addListenerChecker()
}

main();