/*Werte nach Kontinenten*/
/*Afrika*/
var af08=1028;
var af18=1235.5;
/*South America*/
var sa08=1132.6;
var sa18=1261.5;
/*Europe*/
var eu08=4965.7;
var eu18=4209.3;
/*North America*/
var na08=6600.4;
var na18=6035.6;
/*Asia*/
var as08=12954.7;
var as18=16274.1;
/*Australia*/
var au08=1993;
var au18=2100.5;
/*Welt Gesamtrechnung*/
var welt18=af18+sa18+eu18+na18+as18+au18;
/*Kontinentnamen*/
var af="Africa"
var sa="Southamerica"
var na="Northamerica"
var eu="Europe"
var as="Asia"
var au="Australia"

/*Window load*/
window.addEventListener("load",function(){
/*Funktionen mit Rechnungen*/
function kontinent (ko, ko08, ko18,){
    document.querySelector("#titleRegion").innerHTML=ko;
    document.querySelector(".zahl").innerHTML=ko18.toFixed(1);
    document.querySelector("#kontinent").innerHTML=ko;
    document.querySelector(".zurwelt").innerHTML=(ko18/welt18*100).toFixed(1)+"%";
    document.querySelector(".wachstumprozent").innerHTML=(100/ko08*ko18-100).toFixed(1)+"%";
    document.querySelector(".wachstumabsolut").innerHTML=(ko18-ko08).toFixed(1);
    document.getElementById("chart").setAttribute("style","height:"+(ko18/welt18*100).toFixed(1)+"%;");
}
/*Beim klicken ändern sich die Werte*/
document.querySelector(".europe").addEventListener("click", function(){kontinent(eu,eu08,eu18);});
document.querySelector(".northamerica").addEventListener("click", function(){kontinent(na,na08,na18);});
document.querySelector(".southamerica").addEventListener("click", function(){kontinent(sa,sa08,sa18);});
document.querySelector(".africa").addEventListener("click", function(){kontinent(af,af08,af18);});
document.querySelector(".asia").addEventListener("click", function(){kontinent(as,as08,as18);});
document.querySelector(".australia").addEventListener("click", function(){kontinent(au,au08,au18);});

})