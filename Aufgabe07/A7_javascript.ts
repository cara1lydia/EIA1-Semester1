/*Sound Variablen*/
var sound=[new Audio("./Materialien07/A.mp3"), 
           new Audio("./Materialien07/C.mp3"), 
           new Audio("./Materialien07/F.mp3"), 
           new Audio("./Materialien07/G.mp3"), 
           new Audio("./Materialien07/Hihat.mp3"),
           new Audio("./Materialien07/Kick.mp3"), 
           new Audio("./Materialien07/Snare.mp3"), 
           new Audio("./Materialien07/Laugh1.mp3"), 
           new Audio("./Materialien07/Laugh2.mp3")];

/*Windows Load*/
window.addEventListener("load", function () {

/*Funktion drumpads*/
function playSound(sound:HTMLAudioElement) {
    sound.play();
}

/*Funktion Plabutton*/
function beat(){
    setInterval(function(){sound[5].play();}, 2000);
    setInterval(function(){sound[4].play();}, 1000);
    setInterval(function(){sound[6].play();}, 500);
}

/*Ausführung Funktionen*/
document.querySelector(".b1").addEventListener('click', function() {playSound(sound[5])});
document.querySelector(".b2").addEventListener('click', function() {playSound(sound[6])});
document.querySelector(".b3").addEventListener('click', function() {playSound(sound[4])});

document.querySelector(".b4").addEventListener('click', function() {playSound(sound[2])});
document.querySelector(".b5").addEventListener('click', function() {playSound(sound[3])});
document.querySelector(".b6").addEventListener('click', function() {playSound(sound[0])});
document.querySelector(".b7").addEventListener('click', function() {playSound(sound[1])});

document.querySelector(".b8").addEventListener('click', function() {playSound(sound[7])});
document.querySelector(".b9").addEventListener('click', function() {playSound(sound[8])});
document.querySelector(".playbutton").addEventListener('click', beat);
});
