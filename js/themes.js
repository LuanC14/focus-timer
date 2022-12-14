export const elementsTheme = {
    svgFlorest: document.querySelector('.florest-button svg path'),
    svgRain: document.querySelector('.rain-button svg path'),
    svgCoffe: document.querySelector('.coffeshop-button svg path'),
    svgFire: document.querySelector('.fire-button svg path'),

    cardFlorest: document.querySelector('.card-florest'),
    cardRain: document.querySelector('.card-rain'),
    cardFire: document.querySelector('.card-fire'),
    cardCoffeshop: document.querySelector('.card-coffeshop'),

    volumeFlorest: document.querySelector('#volFlorest'),
    volumeRain: document.querySelector('#volRain'),
    volumeCoffeshop: document.querySelector('#volCoffeshop'),
    volumeFire: document.querySelector('#volFire'),
}

export const musics = {
    florestTheme: new Audio("./assets/Floresta.wav"),
    rainTheme: new Audio("./assets/Chuva.wav"),
    coffeshopTheme: new Audio("./assets/Cafeteria.wav"),
    fireTheme: new Audio("./assets/Lareira.wav")
}

export function buttonsThemeManager() {

    function managerTheme(button, svg, music, input) {

        if (button.classList.contains('cards-Dark')) {
            button.classList.add('selected-cardDark')
        }

        button.classList.add('theme-selected')
        input.classList.add('inputSelected')
        svg.classList.add('theme-svg')
        music.play()

        input.addEventListener('input', () => {
            music.volume = input.value
        })
    }

    function markOff() {
        elementsTheme.svgFlorest.classList.remove('theme-svg')
        elementsTheme.svgRain.classList.remove('theme-svg')
        elementsTheme.svgCoffe.classList.remove('theme-svg')
        elementsTheme.svgFire.classList.remove('theme-svg')
        
        elementsTheme.cardFire.classList.remove('theme-selected','selected-cardDark')
        elementsTheme.cardFlorest.classList.remove('theme-selected','selected-cardDark')
        elementsTheme.cardCoffeshop.classList.remove('theme-selected','selected-cardDark')
        elementsTheme.cardRain.classList.remove('theme-selected','selected-cardDark')

        elementsTheme.volumeFire.classList.remove('inputSelected')
        elementsTheme.volumeCoffeshop.classList.remove('inputSelected')
        elementsTheme.volumeFlorest.classList.remove('inputSelected')
        elementsTheme.volumeRain.classList.remove('inputSelected')

        musics.florestTheme.pause()
        musics.rainTheme.pause()
        musics.coffeshopTheme.pause()
        musics.fireTheme.pause()
    }
    return {
        managerTheme,
        markOff
    }
}
