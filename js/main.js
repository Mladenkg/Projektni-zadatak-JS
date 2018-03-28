

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
