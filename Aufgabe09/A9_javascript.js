window.addEventListener("load", function () {
    /*Variablen*/
    const todolist = document.querySelector("ul");
    const inputtodo = document.querySelector("input");
    let index = 0;
    /*Funktion für Counter*/
    function counter() {
        document.querySelector("#counter").innerHTML = String(index);
    }
    /*Funktion zur hinzufügen einer Aufgabe*/
    function addingyourtask() {
        index++;
        counter();
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
        deletetask.addEventListener("click", function () { todolist.removeChild(todoli); index--; counter(); });
        check.addEventListener("click", function () { if (check.style.opacity != "100%") {
            check.style.opacity = "100%";
        } });
    }
    /*Bei Enter wird ein Aufgabenfeld erstellt also die Funktion addingyourtask ausgeführt*/
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            addingyourtask();
        }
    });
});
//# sourceMappingURL=A9_javascript.js.map