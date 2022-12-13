export function utils(button) {

    let minutesDisplay = document.querySelector('.minutes-display')
    let secondsDisplay = document.querySelector('.seconds-display')
    let updateManual = document.querySelector('.manual-update')
    let timeOut
    let minutesValue = 25

    updateManual.addEventListener('click', () => {
        minutesValue = prompt("Digite quantos minutos que você deseja")
        minutesValue = Math.trunc(Number(minutesValue)) // Caso o usuário digite valores com casas decimais

        if (minutesValue <= 0 || isNaN(minutesValue)) {
            updateTimeDisplay("0", "0")
            return alert("Valor invalido, tente novamente.")
        } 
        
        updateTimeDisplay(minutesValue, 0)
    })

    function finishCount() {
        clearTimeout(timeOut)
        button.playButton.removeAttribute('disabled')
        button.increaseButton.removeAttribute('disabled')
        button.decreaseButton.removeAttribute('disabled')
    }

    function updateTimeDisplay(mins, secs) {
        minutesDisplay.textContent = String(mins).padStart(2, "0")
        secondsDisplay.textContent = String(secs).padStart(2, "0")
    }

    function countdown() {

        timeOut = setTimeout(function () {

            let seconds = Number(secondsDisplay.textContent)

            if (seconds <= 0 && minutesValue <= 0) {
                return finishCount()
            }

            if (seconds <= 0) {
                seconds = 60
                minutesValue = minutesValue - 1
                updateTimeDisplay(minutesValue, seconds)
            }

            seconds = seconds - 1
            updateTimeDisplay(minutesValue, seconds)
            countdown()


        }, 1000)
    }

    function increaseMinutes() {
        if (minutesValue < 5) {
            minutesValue = 5
            return updateTimeDisplay(minutesValue, 0)
        }

        minutesValue = minutesValue + 5
        updateTimeDisplay(minutesValue, 0)
    }

    function decreaseMinutes() {

        if (minutesValue <= 1) {
            return alert("O contador vai ficar zerado, adicione alguns minutos para poder usar o contador")
        }

        if (minutesValue <= 5) {
            minutesValue = minutesValue - 1
            updateTimeDisplay(minutesValue, 0)
            return
        }

        minutesValue = minutesValue - 5
        updateTimeDisplay(minutesValue, 0)
    }

    function playCount() {
        if (minutesValue <= 0) {
            return alert("O contador está zerado, clique no botão + para adicionar cinco minutos")
        }

        countdown()
        button.playButton.setAttribute("disabled", "disabled")
        button.increaseButton.setAttribute('disabled', 'disabled')
        button.decreaseButton.setAttribute('disabled', 'disabled')
    }

    function doubleClickStop() {
        finishCount()
        minutesValue = 25
        minutesDisplay.textContent = "25"
        secondsDisplay.textContent = "00"
    }

    return {
        finishCount,
        countdown,
        increaseMinutes,
        decreaseMinutes,
        playCount,
        doubleClickStop
    }
}