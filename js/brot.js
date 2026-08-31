window.addEventListener('load', () => {
  kornBesitz = JSON.parse(localStorage.getItem("korn"));
  brotProduziert = JSON.parse(localStorage.getItem("brotProduziert"));
  brotGesamtVerbrauch = JSON.parse(localStorage.getItem("brotverbrauch"));
  kornBesitz = kornBesitz+brotProduziert+brotGesamtVerbrauch;
 
  
  korn.innerHTML = "Du besitzt "+kornBesitz+ " Brot";
    beiStart();
      
     
});
kostenBrot = JSON.parse(localStorage.getItem("kostenBrot"));
let preis = document.getElementById("preis");
    preis.innerHTML = kostenBrot;
      let verkaufKosten = kostenBrot-2;


 //auf den Button Brot kaufen klicken --> die Berechnung wird durchgeführt
 
function kaufen(){  
   
   eingabe = document.getElementById("eingabefeld").value;
   
  if (Number(eingabe) >0 && Number(eingabe) !== null){
  // Kosten werden errechnet
  let kaufKosten = eingabe*kostenBrot;
  // hat man genug Gold?
  if (goldBesitz >= 0 && goldBesitz-kaufKosten >= 0)  {
     aktuellesGold();
    }
  // zu wenig Gold --> Kreditabfrage
  else { alert("Du hast nicht genug Gold !");
  korn.innerHTML = "Du besitzt "+kornBesitz+ " Brot";
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
    aktuellesGold();}
    else { alert("Das ist nicht möglich !");
    
    }
  }
  
 
 
// Die Kaufabwicklung, Brot wird addiert, Gold subtrahiert
function aktuellesGold(){
  goldBesitz= goldBesitz-kaufKosten;
  gold.innerHTML = "Dein Kontostand beträgt : "+goldBesitz+ " Gold";
  kornBesitz = Number(eingabe)+kornBesitz;
  korn.innerHTML = "Du besitzt "+kornBesitz+ " Brot";
  
  // preisAktualisieren();
  // verkaufAktualisieren();
  localStorage.setItem("neuGold" , goldBesitz);
  localStorage.setItem("korn" , kornBesitz);
  return goldBesitz;
    }
}else {alert("Keine Menge eingegeben !")}
}



// auf den Button Brot verkaufen klicken --> die Berechnung wird durchgeführt
function verkaufen(){  
 
  let eingabe2 = document.getElementById("eingabefeld").value;
  if (Number(eingabe2) >0 && Number(eingabe2) !== null){
  // Kosten werden errechnet
  let verkaufErhalt = eingabe2*verkaufKosten;
  // hat man genug Brot?
  // preisAktualisieren();
  // verkaufAktualisieren();
  if (kornBesitz >= 0 && kornBesitz-Number(eingabe2) >= 0)  {
     aktuellesGold2();
    
    }
   
  // zu wenig Brot Alarm
  else { alert("Du hast nicht genügend Brot !");
  
    }
   
// Die Kaufabwicklung, Brot wird addiert, Gold subtrahiert
function aktuellesGold2(){
  goldBesitz= goldBesitz+verkaufErhalt;
  gold.innerHTML = "Dein Kontostand beträgt : "+goldBesitz+ " Gold";
  kornBesitz = kornBesitz-Number(eingabe2);
  korn.innerHTML = "Du besitzt "+kornBesitz+ " Brot";
    localStorage.setItem("neuGold" , goldBesitz);
    localStorage.setItem("korn" , kornBesitz);
    }
   
} else {alert("Keine Menge eingegeben !")}
} 
   


//Die Einkaufspreise ändern sich mit jedem Ein-/Verkauf wieder per random

  function brotAbfrage() {
    if (kornBesitz<0){
      switch (confirm("Du hast nicht genug Nahrung! Arbeiter und Handwerker werden das Land verlassen und nichts produzieren, aber dennoch Lohn verlangen. Möchtest du trotzdem fortfahren?")) {
        case true:
          while (kornBesitz<0) {
anzahlArbeiter = JSON.parse(localStorage.getItem("arbeiter"));
anzahlArbeiter--;
kornBesitz=kornBesitz +10;
localStorage.setItem("arbeiter", JSON.stringify(anzahlArbeiter));
localStorage.setItem("korn" , kornBesitz);
holzProduziert = JSON.parse(localStorage.getItem("holzProduziert"));
holzProduziert = holzProduziert-4;
localStorage.setItem("holzProduziert", JSON.stringify(holzProduziert));
anzahlHandwerker = JSON.parse(localStorage.getItem("handwerker"));

while (kornBesitz<0 && anzahlHandwerker >0){
anzahlHandwerker--;
kornBesitz=kornBesitz +20;
localStorage.setItem("handwerker", JSON.stringify(anzahlHandwerker));
localStorage.setItem("korn" , kornBesitz);
steinProduziert = JSON.parse(localStorage.getItem("steinProduziert"));
steinProduziert=steinProduziert-2;
localStorage.setItem("steinProduziert", JSON.stringify(steinProduziert));
  
}

          }
          kostenBrot = Math.floor(Math.random() * 5) +3;
          localStorage.setItem("kostenBrot", JSON.stringify(kostenBrot));
          window.location.href='holz.html'
         
        case false:
          // Zurück zur Kaufseite oder andere Aktionen hier
          break;
      }
    }else{
      kostenBrot = Math.floor(Math.random() * 5) +3;
      localStorage.setItem("kostenBrot", JSON.stringify(kostenBrot));
      window.location.href='holz.html'
    }
    
  }