document.addEventListener('DOMContentLoaded', () => {
    const timeInMin = document.querySelector('textarea').value;
    function timeOut() {
        const blackScreen = document.createElement('img');
        blackScreen.setAttribute('src', 'images/stop.png')
        blackScreen.setAttribute('width', '500px')
        blackScreen.setAttribute('height', '500px')
        document.querySelector('body').appendChild(blackScreen)
    }

    const button = document.querySelector("button")

    button.addEventListener("click", setTimeout(timeOut, 5000))

})
