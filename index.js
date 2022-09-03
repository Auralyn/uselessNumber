function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateNumber() {
    let num = getRandomInt(99999999999999);
    let text = num.toString();

    const element = document.getElementById("randomNumber");
    element.innerHTML = "+" + text.substring(0,2) + " " + text.substring(2, 6) + " " + text.substring(6, 99);
}

function pauseAudio() {
    document.getElementById("audio").pause();
}

