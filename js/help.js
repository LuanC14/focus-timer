let messageHelp = document.querySelector('.help-message')

export function helpModal(button){

 const help = {

    openMessage: ()=>{
        messageHelp.classList.remove('hide')
        button.helpButton.classList.add('hide')
    },

    closeMessage: ()=>{
        messageHelp.classList.add('hide')
        button.helpButton.classList.remove('hide')
    }
}

return {
    help
}

}