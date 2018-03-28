

var s = 0;

function dodaj(x) {
 var  idcena = "cena" + x.id;  

cena = new Number(document.getElementById(idcena).innerHTML);
    s += cena;

    document.getElementById("suma").innerHTML = "Ukupna suma: " + s;
}

function oduzmi(x) {
    x = cena;
    s -= cena;
    document.getElementById("suma").innerHTML = "Ukupna suma: " + s;
}
/*


var s = 0;

function dodaj(y) {
    y = cena;
    s += cena;

    document.getElementById("suma").innerHTML = "Ukupna suma: " + s;
}

function oduzmi(y) {
    y = cena;
    s -= cena;
    document.getElementById("suma").innerHTML = "Ukupna suma: " + s;
}
var cena = document.getElementById("cena3").innerHTML;
cena = "cena" + document.getElementById("2");
cena = new Number(document.getElementById("cena2").innerHTML);

var s = 0;

function dodaj(y) {
    y = cena;
    s += cena;

    document.getElementById("suma").innerHTML = "Ukupna suma: " + s;
}

function oduzmi(y) {
    y = cena;
    s -= cena;
    document.getElementById("suma").innerHTML = "Ukupna suma: " + s;
}
*/
