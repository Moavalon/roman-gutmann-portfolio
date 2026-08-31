

anzahlBauern = JSON.parse(localStorage.getItem("bauern"));
anzahlArbeiter = JSON.parse(localStorage.getItem("arbeiter"));
anzahlHandwerker = JSON.parse(localStorage.getItem("handwerker"));
gesammtMenschen = JSON.parse(localStorage.getItem("gesammtMenschen"));

let menschAnzeige = document.getElementById("gesammtMenschen");
menschAnzeige.innerHTML = gesammtMenschen;
let bauerAnzeige = document.getElementById("bauer");
bauerAnzeige.innerHTML = anzahlBauern;
let arbeiterAnzeige = document.getElementById("arbeiter");
arbeiterAnzeige.innerHTML = anzahlArbeiter;
let handwerkerAnzeige = document.getElementById("handwerker");
handwerkerAnzeige.innerHTML = anzahlHandwerker;
let menschenAusLocalStorage = JSON.parse(localStorage.getItem("menschen"));

let steuer = menschenAusLocalStorage.gold[0];
// localStorage.setItem("steuer", JSON.stringify(steuer));
maxHandwerker = JSON.parse(localStorage.getItem("maxHandwerker"));

maxArbeiter = JSON.parse(localStorage.getItem("maxArbeiter"));




//Kosten der Arbeiter und Handwerker
let goldGesamtVerbrauch = anzahlArbeiter*menschenAusLocalStorage.gold[1] +
anzahlHandwerker*menschenAusLocalStorage.gold[2];
//Nahrungsverbrauch aller Menschen
brotGesamtVerbrauch = anzahlBauern*menschenAusLocalStorage.brotVerbrauch[0] + anzahlArbeiter*menschenAusLocalStorage.brotVerbrauch[1] +
anzahlHandwerker*menschenAusLocalStorage.brotVerbrauch[2];
//Einnahmen durch die Bauern
let steuerEinnahme = anzahlBauern*steuer;
localStorage.setItem("steuerEinnahme", JSON.stringify(steuerEinnahme));
let brotProduziert = menschenAusLocalStorage.rohstoff[0]*anzahlBauern;
localStorage.setItem("brotProduziert", JSON.stringify(brotProduziert));
let holzProduziert = menschenAusLocalStorage.rohstoff[1]*anzahlArbeiter;
let steinProduziert = menschenAusLocalStorage.rohstoff[2]*anzahlHandwerker;



  
  let brotAnzeige = document.getElementById("brotverbrauch");
brotAnzeige.innerHTML = brotGesamtVerbrauch;
let goldAnzeige = document.getElementById("goldverbrauch");
goldAnzeige.innerHTML = goldGesamtVerbrauch;
let steuerAnzeige = document.getElementById("steuerEinnahmen");
steuerAnzeige.innerHTML = steuerEinnahme;
let brotProduziertAnzeige = document.getElementById("broteinheiten");
brotProduziertAnzeige.innerHTML = brotProduziert;
let holzProduziertAnzeige = document.getElementById("holzProduziert");
holzProduziertAnzeige.innerHTML = holzProduziert;
let steinProduziertAnzeige = document.getElementById("steinProduziert");
steinProduziertAnzeige.innerHTML = steinProduziert;

function arbeiter() {
  let hackler = document.getElementById("hackler").value;

  if(anzahlArbeiter<maxArbeiter && (anzahlArbeiter+Number(hackler))<=maxArbeiter){
anzahlArbeiter = Number(hackler) + anzahlArbeiter;
localStorage.setItem("arbeiter", JSON.stringify(anzahlArbeiter));
arbeiterAnzeige.innerHTML = anzahlArbeiter;
gesammtMenschen = anzahlBauern+anzahlArbeiter+anzahlHandwerker;
    localStorage.setItem("gesammtMenschen", JSON.stringify(gesammtMenschen));
    menschAnzeige.innerHTML = gesammtMenschen;
    holzProduziert = menschenAusLocalStorage.rohstoff[1]*anzahlArbeiter;
    localStorage.setItem("holzProduziert", JSON.stringify(holzProduziert));
    holzProduziertAnzeige.innerHTML = holzProduziert;
    werteAktuell();
  }
    else{}
}

function handwerker(){
  let hackler = document.getElementById("hackler").value;

if (anzahlHandwerker<maxHandwerker && (anzahlHandwerker+Number(hackler))<=maxHandwerker){
anzahlHandwerker = Number(hackler) + anzahlHandwerker;
localStorage.setItem("handwerker", JSON.stringify(anzahlHandwerker));
handwerkerAnzeige.innerHTML = anzahlHandwerker;
gesammtMenschen = anzahlBauern+anzahlArbeiter+anzahlHandwerker;
    localStorage.setItem("gesammtMenschen", JSON.stringify(gesammtMenschen));
    menschAnzeige.innerHTML = gesammtMenschen;
    steinProduziert = menschenAusLocalStorage.rohstoff[2]*anzahlHandwerker;
    localStorage.setItem("steinProduziert", JSON.stringify(steinProduziert));
    steinProduziertAnzeige.innerHTML = steinProduziert;
    werteAktuell();
  }
    else{}
}

function werteAktuell() {

  //Kosten der Arbeiter und Handwerker
goldGesamtVerbrauch = anzahlArbeiter*menschenAusLocalStorage.gold[1] +
anzahlHandwerker*menschenAusLocalStorage.gold[2];
//Nahrungsverbrauch aller Menschen
brotGesamtVerbrauch = anzahlBauern*menschenAusLocalStorage.brotVerbrauch[0] + anzahlArbeiter*menschenAusLocalStorage.brotVerbrauch[1] +
anzahlHandwerker*menschenAusLocalStorage.brotVerbrauch[2];
//Einnahmen durch die Bauern


localStorage.setItem("brotverbrauch", JSON.stringify(brotverbrauch));
brotAnzeige.innerHTML = brotGesamtVerbrauch;
localStorage.setItem("goldverbrauch", JSON.stringify(goldGesamtVerbrauch));
goldAnzeige.innerHTML = goldGesamtVerbrauch;


}