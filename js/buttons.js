export function controls() {

    const buttons = {
        helpButton: document.querySelector('.help-button'),
        closeButton: document.querySelector('.close-button'),
        increaseButton: document.querySelector('.button-increase'),
        stopButton: document.querySelector('.button-stop'),
        decreaseButton: document.querySelector('.button-decrease'),
        playButton: document.querySelector('.button-play'),

        florest: document.querySelector('.florest-button'),
        rain: document.querySelector('.rain-button'),
        coffeshop: document.querySelector('.coffeshop-button'),
        fire: document.querySelector('.fire-button'),

        darkButton: document.querySelector('.dark'),
        lightButton: document.querySelector('.light')
    }

    return {
        buttons
    }
}

export const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
