/*Afrika*/
var af08 = 1028;
var af18 = 1235.5;
/*South America*/
var sa08 = 1132.6;
var sa18 = 1261.5;
/*Europe*/
var eu08 = 4965.7;
var eu18 = 4209.3;
/*North America*/
var na08 = 6600.4;
var na18 = 6035.6;
/*Asia*/
var as08 = 12954.7;
var as18 = 16274.1;
/*Australia*/
var au08 = 1993;
var au18 = 2100.5;
/*Welt*/
var welt18 = af18 + sa18 + eu18 + na18 + as18 + au18;
/*Afrika%*/
var af_we = af18 / welt18 * 100;
var af_af = 100 / af08 * af18 - 100;
var af_af2 = af18 - af08;
/*South Amerika%*/
var sa_we = sa18 / welt18 * 100;
var sa_sa = 100 / sa08 * sa18 - 100;
var sa_sa2 = sa18 - sa08;
/*Europe%*/
var eu_we = eu18 / welt18 * 100;
var eu_eu = 100 / eu08 * eu18 - 100;
var eu_eu2 = eu18 - eu08;
/*North America*/
var na_we = na18 / welt18 * 100;
var na_na = 100 / na08 * na18 - 100;
var na_na2 = na18 - na08;
/*Asia%*/
var as_we = as18 / welt18 * 100;
var as_as = 100 / as08 * as18 - 100;
var as_as2 = as18 - as08;
/*Australia%*/
var au_we = au18 / welt18 * 100;
var au_au = 100 / au08 * au18 - 100;
var au_au2 = au18 - au08;
/*Console*/
console.log("Die Emission von Afrika ist:", af18.toFixed(1), "kg CO2.", "Relativ zur Gesamtemission der Welt verursacht Europa damit", af_we.toFixed(1), "%.", "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um", af_af.toFixed(1), "% verändert.", "2018 im Vergleich zu 2008 sind das", af_af2.toFixed(1), "kg CO2.");
console.log("Die Emission von Südamerika ist:", sa18.toFixed(1), "kg CO2.", "Relativ zur Gesamtemission der Welt verursacht Europa damit", sa_we.toFixed(1), "%.", "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um", sa_sa.toFixed(1), "% verändert.", "2018 im Vergleich zu 2008 sind das", as_as2.toFixed(1), "kg CO2.");
console.log("Die Emission von Europa ist:", eu18.toFixed(1), "kg CO2.", "Relativ zur Gesamtemission der Welt verursacht Europa damit", eu_we.toFixed(1), "%.", "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um", eu_eu.toFixed(1), "% verändert.", "2018 im Vergleich zu 2008 sind das", eu_eu2.toFixed(1), "kg CO2.");
console.log("Die Emission von Nordamerika ist:", na18.toFixed(1), "kg CO2.", "Relativ zur Gesamtemission der Welt verursacht Europa damit", na_we.toFixed(1), "%.", "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um", na_na.toFixed(1), "% verändert.", "2018 im Vergleich zu 2008 sind das", na_na2.toFixed(1), "kg CO2.");
console.log("Die Emission von Asien ist:", as18.toFixed(1), "kg CO2.", "Relativ zur Gesamtemission der Welt verursacht Europa damit", as_we.toFixed(1), "%.", "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um", as_as.toFixed(1), "% verändert.", "2018 im Vergleich zu 2008 sind das", as_as2.toFixed(1), "kg CO2.");
console.log("Die Emission von Australien ist:", au18.toFixed(1), "kg CO2.", "Relativ zur Gesamtemission der Welt verursacht Europa damit", au_we.toFixed(1), "%.", "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um", au_au.toFixed(1), "% verändert.", "2018 im Vergleich zu 2008 sind das", au_au2.toFixed(1), "kg CO2.");
//# sourceMappingURL=A5_javascript.js.map