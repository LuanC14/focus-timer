import { controls, buttonPressAudio } from './buttons.js'
import { utils } from './utils.js'
import { helpModal } from './help.js'
import { buttonsThemeManager, musics, elementsTheme } from './themes.js'
import { pageMode } from './darkmode.js'

let button = controls().buttons
let Utils = utils(button) // Utils contem os controles do contador. Está recebendo o objeto button.
let help = helpModal(button).help // Modal do botão de ajuda. Está recebendo o objeto button
let pageModeTools = pageMode(elementsTheme) // Função do DarkMode. Está recebendo objetos contendo os elementos dos cards musicais

let applyTheme = buttonsThemeManager().managerTheme
let removeThemeCards = buttonsThemeManager().markOff

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

// ------------------ THEME MUSIC CONTROLS -----------------------------
button.florest.addEventListener('click', () => {
    if(elementsTheme.cardFlorest.classList.contains('theme-selected')) {
        return removeThemeCards ()
    }
    removeThemeCards()
    applyTheme(elementsTheme.cardFlorest, elementsTheme.svgFlorest, musics.florestTheme, elementsTheme.volumeFlorest)
})

button.rain.addEventListener('click', () => {
    if(elementsTheme.cardRain.classList.contains('theme-selected')) {
        return removeThemeCards ()
    }
    removeThemeCards()
    applyTheme(elementsTheme.cardRain, elementsTheme.svgRain, musics.rainTheme, elementsTheme.volumeRain)
})

button.coffeshop.addEventListener('click', () => {
    if(elementsTheme.cardCoffeshop.classList.contains('theme-selected')) {
        return removeThemeCards ()
    }
    removeThemeCards()
    applyTheme(elementsTheme.cardCoffeshop, elementsTheme.svgCoffe, musics.coffeshopTheme, elementsTheme.volumeCoffeshop)
})

button.fire.addEventListener('click', () => {
    if(elementsTheme.cardFire.classList.contains('theme-selected')) {
        return removeThemeCards ()
    }
    removeThemeCards()
    applyTheme(elementsTheme.cardFire, elementsTheme.svgFire, musics.fireTheme, elementsTheme.volumeFire)
})

// ---- DARK MODE CONTROL ----
pageModeTools.light.addEventListener('click',()=>{
    removeThemeCards()
    pageModeTools.mode()
} )

pageModeTools.dark.addEventListener('click',()=>{
    removeThemeCards()
    pageModeTools.mode()
})







