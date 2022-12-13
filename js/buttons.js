export function controls() {

    const buttons = {
        helpButton : document.querySelector('.help-button'),
        closeButton : document.querySelector('.close-button'),
        increaseButton: document.querySelector('.button-increase'),
        stopButton: document.querySelector('.button-stop'),
        decreaseButton: document.querySelector('.button-decrease'),
        playButton : document.querySelector('.button-play')
    }

    return {
        buttons
    }

}