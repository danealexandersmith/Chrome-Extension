chrome.runtime.onStartup.addListener(function() {

const button = document.querySelector("button")

// function timeOut() {
//     setTimeout(() => alert(`Time is up! Go to bed!`), `${Number(document.querySelector("textarea").value)}` * 1000);
// }

button.addEventListener('click', () => {
    setTimeout(() => alert(`Time is up! Go to bed!`), `${Number(document.querySelector("textarea").value)}` * 1000)
});

button.addEventListener('click', () => {
    window.close(), 1000;
});

})


