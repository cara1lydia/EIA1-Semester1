window.addEventListener("load", function () {
    /*Variablen*/
    const todolist = document.querySelector("ul");
    const inputtodo = document.querySelector("input");
    let index = 0;
    let indexopen = 0;
    let indexdone = 0;
    // tslint:disable-next-line: no-any
    const artyom = new Artyom();
    /*Funktion für Counter*/
    function counter() {
        document.querySelector("#counter").innerHTML = String(index);
    }
    function counteropen() {
        document.querySelector("#counteropen").innerHTML = String(indexopen);
    }
    function counterdone() {
        document.querySelector("#counterdone").innerHTML = String(indexdone);
    }
    /*Funktion zur hinzufügen einer Aufgabe*/
    function addingyourtask() {
        index++;
        indexopen++;
        counter();
        counteropen();
        /*Liste mit hinzugefügt dem Wert des Inputs gleichgesetzt*/
        const todoli = document.createElement("li");
        todoli.classList.add("todotext");
        todoli.innerHTML = inputtodo.value;
        /*Buttons erstellen, mit Icons besetzen und Liste zuordnen*/
        const checkcircle = document.createElement("div");
        checkcircle.classList.add("circle");
        todoli.appendChild(checkcircle);
        let check = document.createElement("button");
        check.classList.add("checkbutton");
        check.setAttribute("class", "fa fa-check");
        todoli.appendChild(check);
        const deletetask = document.createElement("button");
        deletetask.classList.add("trashbutton");
        deletetask.setAttribute("class", "fa fa-trash-o");
        todoli.appendChild(deletetask);
        /*Liste der UL in HTML zuordnen*/
        todolist.appendChild(todoli);
        console.log(todoli);
        /*Wert bei hinzufügen der Aufgabe zurücksetzen*/
        inputtodo.value = "";
        /*Klickbarkeit der Button*/
        deletetask.addEventListener("click", function () {
            todolist.removeChild(todoli);
            index--;
            counter();
            if (indexdone >= 1)
                indexdone--;
            counterdone();
            if (indexopen >= 1)
                indexopen--;
            counteropen();
        });
        check.addEventListener("click", function () {
            if (check.style.opacity != "100%") {
                check.style.opacity = "100%";
                indexopen--;
                counteropen();
                indexdone++;
                counterdone();
            }
        });
    }
    artyom.addCommands({
        indexes: ["add task *"],
        smart: true,
        // tslint:disable-next-line: no-any
        action: function (i, wildcard) {
            console.log("A task was added: " + wildcard);
            addingyourtask(wildcard);
        }
    });
    function voicecontrol() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "en-BR",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    /*Bei Enter wird ein Aufgabenfeld erstellt, also die Funktion addingyourtask ausgeführt*/
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            addingyourtask();
        }
    });
    /*Bei Klicken des Mikrofons wird startArtyom angesteuert*/
    document.querySelector("#mic").addEventListener("click", function () {
        voicecontrol();
    });
});
//# sourceMappingURL=A10_javascript.js.map