import { controls } from './buttons.js'
import { utils } from './utils.js'
import { helpModal } from './help.js'
import { buttonsThemeManager , musics } from './sounds.js'


let florestBg = document.querySelector('.florest-button')
let rainBg = document.querySelector('.rain-button')
let coffeBg = document.querySelector('.coffeshop-button')
let fireBg = document.querySelector('.fire-button')


let svgFlorest = document.querySelector('.florest-button svg path')
let svgRain = document.querySelector('.rain-button svg path')
let svgCoffe = document.querySelector('.coffeshop-button svg path')
let svgFire = document.querySelector('.fire-button svg path')

let button = controls().buttons
let Utils = utils(button)
let help = helpModal(button).help

let soundsControl = buttonsThemeManager().Theme
let disabled = buttonsThemeManager().markOff


button.playButton.addEventListener('click', Utils.playCount)
button.stopButton.addEventListener('click', Utils.finishCount)
button.stopButton.addEventListener('dblclick', Utils.doubleClickStop)
button.increaseButton.addEventListener('click', Utils.increaseMinutes)
button.decreaseButton.addEventListener('click', Utils.decreaseMinutes)
button.helpButton.addEventListener('click', help.openMessage)
button.closeButton.addEventListener('click', help.closeMessage)

florestBg.addEventListener('click', () => {
    soundsControl(florestBg, svgFlorest, musics.florestTheme)
    disabled(
        rainBg, fireBg, coffeBg, 
        svgFire,svgRain,svgCoffe, 
        musics.coffeshopTheme,musics.fireTheme,musics.rainTheme)
})

rainBg.addEventListener('click', ()=>{
    soundsControl(rainBg,svgRain, musics.rainTheme)
    disabled(
        florestBg, coffeBg, fireBg,
        svgCoffe,svgFire,svgFlorest,
        musics.coffeshopTheme,musics.fireTheme,musics.florestTheme)
})

coffeBg.addEventListener('click', ()=>{
    soundsControl(coffeBg,svgCoffe, musics.coffeshopTheme)
    disabled(
        florestBg,rainBg,fireBg,
        svgFire,svgFlorest,svgRain,
        musics.fireTheme,musics.florestTheme,musics.rainTheme)
})

fireBg.addEventListener('click', ()=>{
    soundsControl(fireBg,svgFire, musics.fireTheme)
    disabled(
        rainBg,florestBg,coffeBg,
        svgCoffe, svgFlorest, svgRain,
        musics.coffeshopTheme,musics.florestTheme,musics.rainTheme)
})

// Volume Controls




