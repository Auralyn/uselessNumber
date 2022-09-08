function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateNumber() {
    let random = getRandomInt(2);
    if(random == 0) {
        var countryCode = getRandomInt(999);
    }
    else{
        var countryCode = getRandomInt(99);
    }
    let areaCode = getRandomInt(99999);
    let phoneNumber = getRandomInt(99999999990);

    const element = document.getElementById("randomNumber");
    element.innerHTML = "+" + countryCode.toString() + " " + areaCode.toString() + " " + phoneNumber.toString();
}

function pauseAudio() {
    document.getElementById("audio").pause();
}

window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 1;
    audio.play();
});

document.getElementById("pause").onclick = function() {
    var audio = document.getElementById("audio");
    if (audio.paused) audio.play();
    else audio.pause();
};