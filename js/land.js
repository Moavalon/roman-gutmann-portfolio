
kaufKosten = JSON.parse(localStorage.getItem("kaufKosten"));
landPreis = document.getElementById("landPreis");
landPreis.innerHTML = kaufKosten;


window.addEventListener('DOMContentLoaded', function() {
 
  goldBesitz = JSON.parse(localStorage.getItem("neuGold"));
  gold.innerHTML = goldBesitz;
  gold = document.getElementById("gold");
  gold.innerHTML = "Dein Kontostand beträgt : "+goldBesitz+ " Gold";
  
  restKredit = document.getElementById("restMöglich");
  restKredit.innerHTML = restMöglich;
  let Zinsanzeige = document.getElementById("Zinssatz");
  Zinsanzeige.innerHTML = zinsen;
  
let schuldenStand = document.getElementById("schulden");
    schuldenStand.innerHTML = "Dein Schuldenkonto beträgt " +schulden+ " Gold";

});




dorf = JSON.parse(localStorage.getItem("dorf"));
acker = JSON.parse(localStorage.getItem("acker"));
wald = JSON.parse(localStorage.getItem("wald"));
steinFeld = JSON.parse(localStorage.getItem("steinFeld"));

maxHandwerker = JSON.parse(localStorage.getItem("maxHandwerker"));
maxArbeiter = JSON.parse(localStorage.getItem("maxArbeiter"));


landBesitz = JSON.parse(localStorage.getItem("landBesitz"));

let dorfAnzeige = document.getElementById("dorf");
dorfAnzeige.innerHTML = dorf;
let ackerAnzeige = document.getElementById("acker");
ackerAnzeige.innerHTML = acker;
let waldAnzeige = document.getElementById("wald");
waldAnzeige.innerHTML = wald;
let steinFeldAnzeige = document.getElementById("steinFeld");
steinFeldAnzeige.innerHTML = steinFeld;
let gesammtLand = document.getElementById("gesammtLand");
gesammtLand.innerHTML = landBesitz;
runde = JSON.parse(localStorage.getItem("runde"));


let maxArbeiterAnzeige = document.getElementById("maxArbeiter");
maxArbeiterAnzeige.innerHTML = maxArbeiter;

let maxHandwerkerAnzeige = document.getElementById("maxHandwerker");
maxHandwerkerAnzeige.innerHTML = maxHandwerker;


let landKaufen =10;



function kaufen(){  
  
  // Kosten werden errechnet
  
  
  // hat man genug Gold?
  if (goldBesitz >= 0 && goldBesitz-kaufKosten >= 0)  {
     aktuellesGold();
    }
  // zu wenig Gold --> Kreditabfrage
  else { alert("Du hast nicht genug Gold !");
  gesammtLand.innerHTML = landBesitz;
  let benotigterKredit = kaufKosten-goldBesitz;
  let antwort = prompt("Wieviel Gold Kredit willst du aufnehmen ?\n(für den Kauf werden min. " +benotigterKredit+" Gold benötigt.\nMax. " +restMöglich+" Gold Schulden sind möglich!)");
    // Kredit wird aufgenommen und der letzte Einkauf getätigt bei nein passiert entsprechend nichts
  if (schulden <= kreditRahmen && Number(antwort) <= restMöglich && goldBesitz >= 0 && goldBesitz+kaufKosten >=0 && Number(antwort) >= kaufKosten-goldBesitz ) {
    
    goldBesitz = goldBesitz+Number(antwort);
    gold.innerHTML = "Dein Kontostand beträgt : "+goldBesitz+ " Gold";
    schulden = schulden-Number(antwort);
    let schuldenStand = Schuldenstand();
    schuldenStand.innerHTML = "Dein Schuldenkonto beträgt " +schulden+ " Gold";
    restMöglicherKredit();
    aktuellesGold();
    
  }
    
    else { alert("Das ist nicht möglich !");
    
    }
  }

// Die Kaufabwicklung, land wird addiert, Gold subtrahiert
function aktuellesGold(){
  goldBesitz= goldBesitz-kaufKosten;
  gold.innerHTML = "Dein Kontostand beträgt : "+goldBesitz+ " Gold";
  landBesitz = landKaufen+landBesitz;
  gesammtLand.innerHTML = landBesitz;
  kaufKosten += 5;
    localStorage.setItem("kaufKosten", JSON.stringify(kaufKosten));
    landPreis.innerHTML = kaufKosten;

  aufteilenLand();
  localStorage.setItem("neuGold" , goldBesitz);
localStorage.setItem("landBesitz" , landBesitz);
return goldBesitz;
  }
}

function aufteilenLand() {
        
    gesammtLand.innerHTML = landBesitz;
  if (landBesitz % 10 === 0) {
    let aufgeteilt = landKaufen / 10;
    dorf += aufgeteilt * 2;
    acker += aufgeteilt * 4;
    wald += aufgeteilt * 3;
    steinFeld += aufgeteilt * 1;
    dorfAnzeige.innerHTML = dorf;
    localStorage.setItem("dorf", JSON.stringify(dorf));
    ackerAnzeige.innerHTML = acker;
    localStorage.setItem("acker", JSON.stringify(acker));
    waldAnzeige.innerHTML = wald;
    localStorage.setItem("wald", JSON.stringify(wald));
    steinFeldAnzeige.innerHTML = steinFeld;
    localStorage.setItem("steinFeld", JSON.stringify(steinFeld));
    anzahlBauern = anzahlBauern +10;
    localStorage.setItem("bauern", JSON.stringify(anzahlBauern));
    gesammtLand.innerHTML = landBesitz;
    localStorage.setItem("landBesitz", JSON.stringify(landBesitz));
    gesammtMenschen = anzahlBauern+anzahlArbeiter+anzahlHandwerker;
    localStorage.setItem("gesammtMenschen", JSON.stringify(gesammtMenschen));
    menschAnzeige.innerHTML = gesammtMenschen;
    bauerAnzeige.innerHTML = anzahlBauern;
    maxArbeiter = wald*2;
    localStorage.setItem("maxArbeiter", JSON.stringify(maxArbeiter));
    maxArbeiterAnzeige.innerHTML = maxArbeiter;
    maxHandwerker = steinFeld*2;
    localStorage.setItem("maxHandwerker", JSON.stringify(maxHandwerker));
    maxHandwerkerAnzeige.innerHTML = maxHandwerker;
    brotGesamtVerbrauch = anzahlBauern*menschenAusLocalStorage.brotVerbrauch[0] + anzahlArbeiter*menschenAusLocalStorage.brotVerbrauch[1] +anzahlHandwerker*menschenAusLocalStorage.brotVerbrauch[2];
    localStorage.setItem("brotverbrauch", brotGesamtVerbrauch);
    brotAnzeige.innerHTML = brotGesamtVerbrauch;
    brotProduziert = menschenAusLocalStorage.rohstoff[0]*anzahlBauern;
    localStorage.setItem("brotProduziert", JSON.stringify(brotProduziert));
    brotProduziertAnzeige.innerHTML = brotProduziert;

    steuerEinnahme = anzahlBauern*steuer;
    
    localStorage.setItem("steuerEinnahme", JSON.stringify(steuerEinnahme));
    steuerAnzeige.innerHTML = steuerEinnahme;
  }
  
}



function rundeBeenden() {
  localStorage.setItem("brotverbrauch", brotGesamtVerbrauch);
  localStorage.setItem("brotProduziert", JSON.stringify(brotProduziert));
  localStorage.setItem("steuerEinnahme", JSON.stringify(steuerEinnahme));
  localStorage.setItem("steinProduziert", JSON.stringify(steinProduziert));
  localStorage.setItem("holzProduziert", JSON.stringify(holzProduziert));
  localStorage.setItem("goldverbrauch", JSON.stringify(goldGesamtVerbrauch));
    // Weiter zur nächsten HTML-Seite
    window.location.href="brot.html";
  
  
}