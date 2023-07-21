const button = document.querySelector("button")

// function timeOut() {
//     setTimeout(() => alert(`Time is up! Go to bed!`), `${Number(document.querySelector("textarea").value)}` * 1000);
// }


// listen for button click and setTimout to input, alert user when time is up
button.addEventListener('click', () => {
    setTimeout(() => alert(`Time is up! Go to bed!`), `${Number(document.querySelector("textarea").value)}` * 1000)
});


// // listen for button click and close popup when clicked
// button.addEventListener('click', () => {
//     window.close(), 1000;
// });


