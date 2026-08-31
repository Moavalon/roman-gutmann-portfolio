
let weiterLink = document.getElementById("spielStarten2");
weiterLink.addEventListener('click', spielNeuStarten);


function spielNeuStarten(){
    localStorage.clear();
    let goldBesitz = 100;
    localStorage.setItem("neuGold", JSON.stringify(goldBesitz));
    
    let schulden = 0;
    localStorage.setItem("schulden", JSON.stringify(schulden));
    
    let kreditRahmen = 1000;
    localStorage.setItem("kreditRahmen", JSON.stringify(kreditRahmen));

    let restMöglich = kreditRahmen+schulden;
    localStorage.setItem("restMöglich", JSON.stringify(restMöglich));
    
    let kornBesitz = 0;
    localStorage.setItem("korn", JSON.stringify(kornBesitz));
    
    let holzBesitz = 0;
    localStorage.setItem("holz", JSON.stringify(holzBesitz));
    
    let steinBesitz = 0;
    localStorage.setItem("stein", JSON.stringify(steinBesitz));

    let zinsen = Math.floor(Math.random() * 4) +1;
    localStorage.setItem("zins", JSON.stringify(zinsen));

    let abschnitt = 1;
    localStorage.setItem("abschnitt", JSON.stringify(abschnitt));

    let burgGold = 10;
    localStorage.setItem("burgGold", JSON.stringify(burgGold));
    let burgHolz = 50;
    localStorage.setItem("burgHolz", JSON.stringify(burgHolz));
    let burgStein = 20;
    localStorage.setItem("burgStein", JSON.stringify(burgStein));
    let burgArbeiter = 30;
    localStorage.setItem("burgArbeiter", JSON.stringify(burgArbeiter));
    let burgHandwerker = 10;
    localStorage.setItem("burgHandwerker", JSON.stringify(burgHandwerker));

    

    //Bauern, Arbeiter und Handwerker

let menschen = {};
menschen.typ = ["Bauer", "Arbeiter", "Handwerker"];
menschen.brotVerbrauch = [-5, -10, -20];
menschen.gold = [5, -5, -10];
menschen.rohstoff = [10, 4, 2];

// Objekt als JSON-String speichern
localStorage.setItem("menschen", JSON.stringify(menschen));

let anzahlBauern = 10;
localStorage.setItem("bauern", JSON.stringify(anzahlBauern));
let anzahlArbeiter = 0;
localStorage.setItem("arbeiter", JSON.stringify(anzahlArbeiter));
let anzahlHandwerker = 0;
localStorage.setItem("handwerker", JSON.stringify(anzahlHandwerker));
let gesammtMenschen = anzahlBauern+anzahlArbeiter+anzahlHandwerker;
localStorage.setItem("gesammtMenschen", JSON.stringify(gesammtMenschen));
let goldGesamtVerbrauch = 0;
localStorage.setItem("goldVerbrauch", JSON.stringify(goldGesamtVerbrauch));
let brotGesamtVerbrauch = 0;
localStorage.setItem("brotVerbrauch", JSON.stringify(brotGesamtVerbrauch));
let landBesitz =10;
localStorage.setItem("landBesitz", JSON.stringify(landBesitz));


let dorf = 2;
localStorage.setItem("dorf", JSON.stringify(dorf));
let acker = 4;
localStorage.setItem("acker", JSON.stringify(acker));
let wald = 3;
localStorage.setItem("wald", JSON.stringify(wald));
let steinFeld = 1;
localStorage.setItem("steinFeld", JSON.stringify(steinFeld));
let kaufKosten = 10;
localStorage.setItem("kaufKosten", JSON.stringify(kaufKosten));
let kostenBrot = Math.floor(Math.random() * 5) +3;
localStorage.setItem("kostenBrot", JSON.stringify(kostenBrot));
let kostenHolz = Math.floor(Math.random() * 8) +6;
localStorage.setItem("kostenHolz", JSON.stringify(kostenHolz));
let kostenStein = Math.floor(Math.random() * 9) +9;
localStorage.setItem("kostenStein", JSON.stringify(kostenStein));

let maxArbeiter = 5;
localStorage.setItem("maxArbeiter", JSON.stringify(maxArbeiter));
let maxHandwerker = 2;
localStorage.setItem("maxHandwerker", JSON.stringify(maxHandwerker));

let runde = 1;
localStorage.setItem("runde", JSON.stringify(runde));


    window.open("html/auswahl.html", "_blank");
  

}


