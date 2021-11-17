/*Rechnungen aus Aufgabe 5*/
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
/*Welt*/
var welt18=af18+sa18+eu18+na18+as18+au18;
/*Afrika%*/
var af_we=af18/welt18*100;
var af_af=100/af08*af18-100;
var af_af2=af18-af08;
/*South Amerika%*/
var sa_we=sa18/welt18*100;
var sa_sa=100/sa08*sa18-100;
var sa_sa2=sa18-sa08;
/*Europe%*/
var eu_we=eu18/welt18*100;
var eu_eu=100/eu08*eu18-100;
var eu_eu2=eu18-eu08;
/*North America*/
var na_we=na18/welt18*100;
var na_na=100/na08*na18-100;
var na_na2=na18-na08;
/*Asia%*/
var as_we=as18/welt18*100;
var as_as=100/as08*as18-100;
var as_as2=as18-as08;
/*Australia%*/
var au_we=au18/welt18*100;
var au_au=100/au08*au18-100;
var au_au2=au18-au08;

/*Window load*/
window.addEventListener("load",function(){

/*Funktion Europa*/
function euro (){
    document.querySelector("#titleRegion").innerHTML="Europe";
    document.querySelector(".zahl").innerHTML=eu18.toFixed(1);
    document.querySelector(".emission18").innerHTML="Emission absolute of Europe in 2018";
    document.querySelector(".zurwelt").innerHTML=eu_we.toFixed(1);
    document.querySelector(".wachstumprozent").innerHTML=eu_eu.toFixed(1);
    document.querySelector(".wachstumabsolut").innerHTML=eu_eu2.toFixed(1);
}
/*Funktion Nordamerika*/
function noda (){
    document.querySelector("#titleRegion").innerHTML="Northamerica";
    document.querySelector(".zahl").innerHTML=na18.toFixed(1);
    document.querySelector(".emission18").innerHTML="Emission absolute of Northamerica in 2018";
    document.querySelector(".zurwelt").innerHTML=na_we.toFixed(1);
    document.querySelector(".wachstumprozent").innerHTML=na_na.toFixed(1);
    document.querySelector(".wachstumabsolut").innerHTML=na_na2.toFixed(1);
}
/*Funktion Südamerika*/
function suda (){
    document.querySelector("#titleRegion").innerHTML="Southamerica";
    document.querySelector(".zahl").innerHTML=sa18.toFixed(1);
    document.querySelector(".emission18").innerHTML="Emission absolute of Southamerica in 2018";
    document.querySelector(".zurwelt").innerHTML=sa_we.toFixed(1);
    document.querySelector(".wachstumprozent").innerHTML=sa_sa.toFixed(1);
    document.querySelector(".wachstumabsolut").innerHTML=sa_sa2.toFixed(1);
}
/*Funktion Afrika*/
function afri (){
    document.querySelector("#titleRegion").innerHTML="Africa";
    document.querySelector(".zahl").innerHTML=af18.toFixed(1);
    document.querySelector(".emission18").innerHTML="Emission absolute of Africa in 2018";
    document.querySelector(".zurwelt").innerHTML=af_we.toFixed(1);
    document.querySelector(".wachstumprozent").innerHTML=af_af.toFixed(1);
    document.querySelector(".wachstumabsolut").innerHTML=af_af2.toFixed(1);
}
/*Funktion Asien*/
function asi (){
    document.querySelector("#titleRegion").innerHTML="Asia";
    document.querySelector(".zahl").innerHTML=as18.toFixed(1);
    document.querySelector(".emission18").innerHTML="Emission absolute of Asia in 2018";
    document.querySelector(".zurwelt").innerHTML=as_we.toFixed(1);
    document.querySelector(".wachstumprozent").innerHTML=as_as.toFixed(1);
    document.querySelector(".wachstumabsolut").innerHTML=as_as2.toFixed(1);
}
/*Funktion Australien*/
function austr (){
    document.querySelector("#titleRegion").innerHTML="Australia";
    document.querySelector(".zahl").innerHTML=au18.toFixed(1);
    document.querySelector(".emission18").innerHTML="Emission absolute of Australia in 2018";
    document.querySelector(".zurwelt").innerHTML=au_we.toFixed(1);
    document.querySelector(".wachstumprozent").innerHTML=au_au.toFixed(1);
    document.querySelector(".wachstumabsolut").innerHTML=au_au2.toFixed(1);
}
/*Bei klicken ändern sich die Werte*/
document.querySelector(".europe").addEventListener("click", euro);
document.querySelector(".northamerica").addEventListener("click", noda);
document.querySelector(".southamerica").addEventListener("click", suda);
document.querySelector(".africa").addEventListener("click", afri);
document.querySelector(".asia").addEventListener("click", asi);
document.querySelector(".australia").addEventListener("click", austr);

})