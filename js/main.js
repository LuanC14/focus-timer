import { controls, buttonPressAudio } from './buttons.js'
import { utils } from './utils.js'
import { helpModal } from './help.js'
import { buttonsThemeManager, musics } from './themes.js'
import { pageMode } from './darkmode.js'

let svgFlorest = document.querySelector('.florest-button svg path')
let svgRain = document.querySelector('.rain-button svg path')
let svgCoffe = document.querySelector('.coffeshop-button svg path')
let svgFire = document.querySelector('.fire-button svg path')

let cardFlorest = document.querySelector('.card-florest')
let cardRain = document.querySelector('.card-rain')
let cardFire = document.querySelector('.card-fire')
let cardCoffeshop = document.querySelector('.card-coffeshop')

let volumeFlorest = document.querySelector('#volFlorest')
let volumeRain = document.querySelector('#volRain')
let volumeCoffeshop = document.querySelector('#volCoffeshop')
let volumeFire = document.querySelector('#volFire')

let button = controls().buttons
let Utils = utils(button) // Utils que contem os controles do contador recebendo o button, variável que contem o objeto com os botões
let help = helpModal(button).help // Modal do botão de ajuda, recebendo o button, variável que contem o objeto com os botões

let soundsControl = buttonsThemeManager().managerTheme
let removeTheme = buttonsThemeManager().markOff
let pageModeTools = pageMode(volumeCoffeshop, volumeFire, volumeFlorest, volumeRain, svgCoffe, svgFire, svgFlorest, svgRain,
    cardCoffeshop, cardFire, cardFlorest, cardRain)


// --------------- Countdown controls ------------------------
button.playButton.addEventListener('click', () => {
    Utils.playCount()
    buttonPressAudio.play()
})

button.stopButton.addEventListener('click', () => {
    Utils.finishCount()
    buttonPressAudio.play()
})
button.stopButton.addEventListener('dblclick', () => {
    Utils.doubleClickStop()
    buttonPressAudio.play()
})
button.increaseButton.addEventListener('click', () => {
    Utils.increaseMinutes()
    buttonPressAudio.play()
})
button.decreaseButton.addEventListener('click', () => {
    Utils.decreaseMinutes()
    buttonPressAudio.play()
})
button.helpButton.addEventListener('click', help.openMessage)
button.closeButton.addEventListener('click', help.closeMessage)

// ------------------ Cards themes controls -----------------------------
button.florest.addEventListener('click', () => {

    soundsControl(cardFlorest, svgFlorest, musics.florestTheme, volumeFlorest)
    removeTheme(
        cardRain, cardFire, cardCoffeshop,
        svgFire, svgRain, svgCoffe,
        musics.coffeshopTheme, musics.fireTheme, musics.rainTheme)
})

button.rain.addEventListener('click', () => {
    soundsControl(cardRain, svgRain, musics.rainTheme, volumeRain)
    removeTheme(
        cardFlorest, cardCoffeshop, cardFire,
        svgCoffe, svgFire, svgFlorest,
        musics.coffeshopTheme, musics.fireTheme, musics.florestTheme)
})

button.coffeshop.addEventListener('click', () => {
    soundsControl(cardCoffeshop, svgCoffe, musics.coffeshopTheme, volumeCoffeshop)
    removeTheme(
        cardFlorest, cardRain, cardFire,
        svgFire, svgFlorest, svgRain,
        musics.fireTheme, musics.florestTheme, musics.rainTheme)
})

button.fire.addEventListener('click', () => {
    soundsControl(cardFire, svgFire, musics.fireTheme, volumeFire)
    removeTheme(
        cardRain, cardFlorest, cardCoffeshop,
        svgCoffe, svgFlorest, svgRain,
        musics.coffeshopTheme, musics.florestTheme, musics.rainTheme)
})

pageModeTools.light.addEventListener('click', pageModeTools.mode)

pageModeTools.dark.addEventListener('click', pageModeTools.mode)







