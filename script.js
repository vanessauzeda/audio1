let audio = document.getElementById("audio");

function retroceder(){
audio.currentTime -= 15;
}

function avancar(){
    audio.currentTime += 15;
}

function diminuir(){
    audio.volume -= 0.2;
}

function aumentar(){
    audio.volume += 0.2;
}

function Nomute(){
    audio.muted = false;
}

function mute(){
    audio.muted = true;
}

function play(){
    audio.play();
}

function pause(){
    audio.pause();
}