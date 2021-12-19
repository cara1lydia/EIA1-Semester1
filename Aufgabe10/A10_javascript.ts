// tslint:disable-next-line: no-any
declare var Artyom: any;

window.addEventListener("load", function(): void {

    /*Variablen*/
    const todolist: HTMLElement =  document.querySelector("ul");
    const inputtodo: HTMLInputElement = document.querySelector("input");
    let index: number = 0;
    let indexopen: number = 0;
    let indexdone: number = 0; 
    // tslint:disable-next-line: no-any
    const artyom: any = new Artyom();
    
    /*Funktion für Counter*/
    function counter(): void {
        document.querySelector("#counter").innerHTML = String(index);
    }

    function counteropen(): void {
        document.querySelector("#counteropen").innerHTML = String(indexopen);
    }

    function counterdone(): void {
        document.querySelector("#counterdone").innerHTML = String(indexdone);
    }
    
    /*Funktion zur hinzufügen einer Aufgabe*/
    function addingyourtask(): void {
        index++;
        indexopen++;
        counter ();
        counteropen ();
    
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
        deletetask.addEventListener("click", function (): void { todolist.removeChild(todoli); index--; counter(); 
                                                                 if (indexdone >= 1) indexdone--; counterdone (); 
                                                                 if (indexopen >= 1) indexopen--; counteropen (); });                                                    
        check.addEventListener("click", function (): void {if 
            (check.style.opacity != "100%") {check.style.opacity = "100%"; indexopen--; counteropen (); indexdone++; counterdone (); }});
    }

    artyom.addCommands({
        indexes: ["add task *"],
        smart: true,
        // tslint:disable-next-line: no-any
        action: function(i: any, wildcard: string): void {
            console.log("A task was added: " + wildcard);
            addingyourtask(wildcard);
        }
    });

    function voicecontrol(): void {
        artyom.fatality();
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "en-BR",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
        
    }
    
    /*Bei Enter wird ein Aufgabenfeld erstellt, also die Funktion addingyourtask ausgeführt*/
    document.addEventListener("keydown", function (event: KeyboardEvent): void { 
        if (event.keyCode == 13) {
            addingyourtask (); }});
    /*Bei Klicken des Mikrofons wird startArtyom angesteuert*/
    document.querySelector("#mic").addEventListener("click", function(): void {
        voicecontrol(); });
    });
    