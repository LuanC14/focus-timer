export function pageMode(elementsTheme){

    let light = document.querySelector('.light')
    let dark = document.querySelector('.dark')

    let body = document.querySelector('body')
    let minutes = document.querySelector('.minutes-display')
    let point = document.querySelector('.points-display')
    let seconds = document.querySelector('.seconds-display')
    
    let svgPlay = document.querySelector('.play path')
    let svgStop = document.querySelector('.stop path')
    let svgIncrease = document.querySelector('.increase path')
    let svgDecrease = document.querySelector('.decrease path')

    function mode() {

        dark.classList.toggle('hide')
        light.classList.toggle('hide')

        if(dark.classList.contains('hide')){
            minutes.style.color = "#323238"
            point.style.color = "#323238"
            seconds.style.color = "#323238"
        } else {
            minutes.style.color = "white"
            point.style.color = "white"
            seconds.style.color = "white"
        }

        body.classList.toggle('body-dark')

        svgPlay.classList.toggle('svgControl-dark')
        svgStop.classList.toggle('svgControl-dark')
        svgIncrease.classList.toggle('svgControl-dark')
        svgDecrease.classList.toggle('svgControl-dark')

        elementsTheme.cardCoffeshop.classList.toggle('cards-Dark')
        elementsTheme.cardFire.classList.toggle('cards-Dark')
        elementsTheme.cardFlorest.classList.toggle('cards-Dark')
        elementsTheme.cardRain.classList.toggle('cards-Dark')

        elementsTheme.svgCoffe.classList.toggle('svgCard-dark')
        elementsTheme.svgFlorest.classList.toggle('svgCard-dark')
        elementsTheme.svgRain.classList.toggle('svgCard-dark')
        elementsTheme.svgFire.classList.toggle('svgCard-dark')

        elementsTheme.volumeCoffeshop.classList.toggle('darkInput')
        elementsTheme.volumeFire.classList.toggle('darkInput')
        elementsTheme.volumeFlorest.classList.toggle('darkInput')
        elementsTheme.volumeRain.classList.toggle('darkInput')
    }
    return {
        mode,
        light,
        dark
    }
}
