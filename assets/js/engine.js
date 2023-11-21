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
        key.addEventListener('click', () => playTune(key.dataset.key.toLowerCase()))
        state.values.validKeys.push(key.dataset.key.toLowerCase())
    })
    document.addEventListener('keydown', (pressed) => playTune(pressed.key))
}

function playTune(note) {
    if (state.values.validKeys.includes(note)) {
        state.objects.audio.src = `./assets/audio/${note}.wav`
        state.objects.audio.play()
        animateKeyboard(note.toUpperCase())
    }
}

function animateKeyboard(key) {
    state.values.clickedKey = document.querySelector(`[data-key='${key}']`)
    state.values.clickedKey.classList.add('active')
    setTimeout(() => {
        state.values.clickedKey.classList.remove('active')
    }, 125)
}

function addListenerSlider() {
    state.view.volumeSlider.addEventListener('input', (slider) => {
        state.objects.audio.volume = slider.target.value
    })
}

function addListenerChecker() {
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