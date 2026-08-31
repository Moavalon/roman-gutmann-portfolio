document.addEventListener('DOMContentLoaded', () => {
    goldBesitz = JSON.parse(localStorage.getItem("neuGold"));
    gold = document.getElementById("gold");
    gold.innerHTML = goldBesitz;

    holzBesitz = JSON.parse(localStorage.getItem("holz"));
    holz = document.getElementById("holz");
    holz.innerHTML = holzBesitz;

    steinBesitz = JSON.parse(localStorage.getItem("stein"));
    stein = document.getElementById("stein");
    stein.innerHTML = steinBesitz;

    anzahlArbeiter = JSON.parse(localStorage.getItem("arbeiter"));
    let arbeiterAnzeige = document.getElementById("arbeiter");
    arbeiterAnzeige.innerHTML = anzahlArbeiter;

    anzahlHandwerker = JSON.parse(localStorage.getItem("handwerker"));
    let handwerkerAnzeige = document.getElementById("handwerker");
    handwerkerAnzeige.innerHTML = anzahlHandwerker;

    abschnitt = JSON.parse(localStorage.getItem("abschnitt"));
    let abschnittAnzeige = document.getElementById("abschnitt");
    abschnittAnzeige.innerHTML = abschnitt;
    

    burgGold = JSON.parse(localStorage.getItem("burgGold"));
    let burgGoldAnzeige = document.getElementById("burgGold");
    burgGoldAnzeige.innerHTML = burgGold;

    burgHolz = JSON.parse(localStorage.getItem("burgHolz"));
    let burgHolzAnzeige = document.getElementById("burgHolz");
    burgHolzAnzeige.innerHTML = burgHolz;

    burgStein = JSON.parse(localStorage.getItem("burgStein"));
    let burgSteinAnzeige = document.getElementById("burgStein");
    burgSteinAnzeige.innerHTML = burgStein;

    burgArbeiter = JSON.parse(localStorage.getItem("burgArbeiter"));
    let burgArbeiterAnzeige = document.getElementById("burgArbeiter");
    burgArbeiterAnzeige.innerHTML = burgArbeiter;

    burgHandwerker = JSON.parse(localStorage.getItem("burgHandwerker"));
    let burgHandwerkerAnzeige = document.getElementById("burgHandwerker");
    burgHandwerkerAnzeige.innerHTML = burgHandwerker;


    if (goldBesitz>=burgGold && holzBesitz>=burgHolz && steinBesitz>=burgStein && anzahlArbeiter>=burgArbeiter && anzahlHandwerker>=burgHandwerker) {
        document.getElementById("burgBau").style.visibility = "visible";}

});

function spielEnde(){
    abschnitt = JSON.parse(localStorage.getItem("abschnitt"));
if (abschnitt<4){
    window.location.href='land.html';
}else{
    window.location.href='gewonnen.html';}

}
function burgBau(){
    abschnitt = JSON.parse(localStorage.getItem("abschnitt"));
    abschnitt ++;
    burgGold = burgGold*2;
    localStorage.setItem("burgGold", JSON.stringify(burgGold));
    burgGoldAnzeige = document.getElementById("burgGold");
    burgGoldAnzeige.innerHTML = burgGold;
    burgHolz = burgHolz*2;
    localStorage.setItem("burgHolz", JSON.stringify(burgHolz));
    burgHolzAnzeige = document.getElementById("burgHolz");
    burgHolzAnzeige.innerHTML = burgHolz;
    burgStein = burgStein*2;
    localStorage.setItem("burgStein", JSON.stringify(burgStein));
    burgSteinAnzeige = document.getElementById("burgStein");
    burgSteinAnzeige.innerHTML = burgStein;
    burgArbeiter = burgArbeiter*2;
    localStorage.setItem("burgArbeiter", JSON.stringify(burgArbeiter));
    burgArbeiterAnzeige = document.getElementById("burgArbeiter");
    burgArbeiterAnzeige.innerHTML = burgArbeiter;
    burgHandwerker = burgHandwerker*2;
    localStorage.setItem("burgHandwerker", JSON.stringify(burgHandwerker));
    burgHandwerkerAnzeige = document.getElementById("burgHandwerker");
    burgHandwerkerAnzeige.innerHTML = burgHandwerker;
    localStorage.setItem("abschnitt", JSON.stringify(abschnitt));
    if (goldBesitz>=burgGold && holzBesitz>=burgHolz && steinBesitz>=burgStein && anzahlArbeiter>=burgArbeiter && anzahlHandwerker>=burgHandwerker) {
        document.getElementById("burgBau").style.visibility = "visible";}else{
    document.getElementById("burgBau").style.visibility = "hidden";}
    
    if(abschnitt==4){
        window.location.href='gewonnen.html';
    }else{
        abschnittAnzeige = document.getElementById("abschnitt");
    abschnittAnzeige.innerHTML = abschnitt;
    }
}