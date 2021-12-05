/*Variablen*/
var sample: string[] = [  "../Aufgabe07/Materialien07/A.mp3", 
                        "../Aufgabe07/Materialien07/C.mp3", 
                        "../Aufgabe07/Materialien07/F.mp3", 
                        "../Aufgabe07/Materialien07/G.mp3", 
                        "../Aufgabe07/Materialien07/Hihat.mp3",
                        "../Aufgabe07/Materialien07/Kick.mp3", 
                        "../Aufgabe07/Materialien07/Snare.mp3", 
                        "../Aufgabe07/Materialien07/Laugh1.mp3", 
                        "../Aufgabe07/Materialien07/Laugh2.mp3"];
var beat: string[] = [sample[5], sample[4], sample[6]];
var playbeat: boolean = false;
var recordbeat: boolean = false;

/*Windows Load*/
window.addEventListener("load", function(): void {

/*Funktion Drumpad*/
function playSound(sample: string): void {
    var los: HTMLAudioElement = new Audio(sample);
    los.play();
    if (recordbeat == true) {
        beat.push (sample);
    }
}

/*Funktion Playbutton*/
function thebeat(): void {
    playbeat = true;
    document.getElementById("play").setAttribute("class", "fa fa-pause");
    var indx: number = 0;
    var int: any = setInterval(playint, 500);
    function playint(): void {
        if (!playbeat) {
            clearInterval (int);   
        }
        else if (indx >= beat.length) {
            indx = 0;
            playSound(beat[indx]);
        }
        else {
            playSound(beat[indx]);
        }
        indx++;
    }
}

/*Playbutton zum Stopbutton*/
function pausebeat(): void {
    playbeat = false;
    document.getElementById("play").setAttribute("class", "fas fa-play");
}

/*Random Beat*/
function randombeat(): void {
    deletebeat();
    for (let i: number = 0; i < 8; i++) {
        beat.push(sample[Math.floor((Math.random() * 7))]);
    }
}

/*Beat löschen*/
function deletebeat(): void {
    pausebeat();
    beat = [];
}

/*Beat aufnehmen*/
function recording(): void {
    deletebeat();
    recordbeat = true; 
    document.getElementById("record").setAttribute("style", "opacity: 100%");
}

/*Aufnahme stoppen*/
function stoprecording(): void {
    recordbeat = false;
    document.getElementById("record").setAttribute("style", "opacity: 50%");
}

/*Ausführung Funktionen*/
document.querySelector(".b1").addEventListener("click", function(): void {playSound(sample[5]); });
document.querySelector(".b2").addEventListener("click", function(): void {playSound(sample[6]); });
document.querySelector(".b3").addEventListener("click", function(): void {playSound(sample[4]); });

document.querySelector(".b4").addEventListener("click", function(): void {playSound(sample[2]); });
document.querySelector(".b5").addEventListener("click", function(): void {playSound(sample[3]); });
document.querySelector(".b6").addEventListener("click", function(): void {playSound(sample[0]); });
document.querySelector(".b7").addEventListener("click", function(): void {playSound(sample[1]); });

document.querySelector(".b8").addEventListener("click", function(): void {playSound(sample[7]); });
document.querySelector(".b9").addEventListener("click", function(): void {playSound(sample[8]); });


document.querySelector("#play").addEventListener("click", function (): void {if (!playbeat) {thebeat(); } else {pausebeat(); }});
document.querySelector("#shuffle").addEventListener("click", randombeat);
document.querySelector("#trash").addEventListener("click", deletebeat);
document.querySelector("#record").addEventListener("click", function(): void {if (!recordbeat) {recording(); } else {stoprecording(); }});

});