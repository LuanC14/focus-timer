export const musics = {
    florestTheme: new Audio("./assets/Floresta.wav"),
    rainTheme: new Audio("./assets/Chuva.wav"),
    coffeshopTheme: new Audio("./assets/Cafeteria.wav"),
    fireTheme: new Audio("./assets/Lareira.wav")
}

export function buttonsThemeManager() {

    function managerTheme(button, svg, music, input) {
        if (button.classList.contains('theme-selected')) {
            button.classList.remove('theme-selected')
            svg.classList.remove('theme-svg')
            return music.pause()
        }

        button.classList.add('theme-selected')
        svg.classList.add('theme-svg')
        music.play()

        input.addEventListener('input', () => {
            music.volume = input.value
        })
    }

    function markOff(button1, button2, button3, svg1, svg2, svg3, music1, music2, music3) {
        button1.classList.remove('theme-selected')
        button2.classList.remove('theme-selected')
        button3.classList.remove('theme-selected')

        svg1.classList.remove('theme-svg')
        svg2.classList.remove('theme-svg')
        svg3.classList.remove('theme-svg')

        music1.pause()
        music2.pause()
        music3.pause()
    }

    return {
        managerTheme,
        markOff
    }
}
