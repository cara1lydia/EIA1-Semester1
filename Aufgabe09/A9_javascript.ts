window.addEventListener("load", function(): void {

/*Variablen*/
const todolist: HTMLElement =  document.querySelector("ul");
const inputtodo: HTMLInputElement = document.querySelector("input");
let index: number = 0;

/*Funktion für Counter*/
function counter(): void {
    document.querySelector("#counter").innerHTML = String(index);
}

/*Funktion zur hinzufügen einer Aufgabe*/
function addingyourtask(): void {
    index++;
    counter ();

    /*Liste mit hinzugefügt dem Wert des Inputs gleichgesetzt*/
    const todoli: HTMLLIElement = document.createElement("li");
    todoli.classList.add("todotext");
    todoli.innerHTML = inputtodo.value; 

    /*Buttons erstellen, mit Icons besetzen und Liste zuordnen*/
    const checkcircle: HTMLElement = document.createElement("div");
    checkcircle.classList.add("circle");
    todoli.appendChild(checkcircle);

    let check: HTMLElement = document.createElement("button");
    check.classList.add("checkbutton");
    check.setAttribute("class", "fa fa-check");
    todoli.appendChild(check);

    const deletetask: HTMLElement = document.createElement("button");
    deletetask.classList.add("trashbutton");
    deletetask.setAttribute("class", "fa fa-trash-o");
    todoli.appendChild(deletetask);

    
 

    /*Liste der UL in HTML zuordnen*/
    todolist.appendChild(todoli);
    console.log(todoli);

    /*Wert bei hinzufügen der Aufgabe zurücksetzen*/
    inputtodo.value = "";

    /*Klickbarkeit der Button*/
    deletetask.addEventListener("click", function (): void { todolist.removeChild(todoli); index--; counter(); });
    check.addEventListener("click", function (): void {if (check.style.opacity != "100%") {check.style.opacity = "100%"; }});
}

/*Bei Enter wird ein Aufgabenfeld erstellt, also die Funktion addingyourtask ausgeführt*/
document.addEventListener("keydown", function (event: KeyboardEvent): void { 
    if (event.keyCode == 13) {
        addingyourtask (); }});

});

