window.addEventListener('load', () => {
  steinBesitz = JSON.parse(localStorage.getItem("stein"));  
  steinProduziert = JSON.parse(localStorage.getItem("steinProduziert"));
   steinBesitz = steinBesitz+steinProduziert;
   stein.innerHTML = "Du besitzt "+steinBesitz+ " stein";
  beiStart();
   console.log(kostenStein);
  
});


kostenStein = JSON.parse(localStorage.getItem("kostenStein"));
let preis = document.getElementById("preis");
    preis.innerHTML = kostenStein;
let verkaufKosten = kostenStein-4;

  
  
   //auf den Button Stein kaufen klicken --> die Berechnung wird durchgeführt
  function kaufen(){  
  
    let eingabe = document.getElementById("eingabefeld").value;
    if (Number(eingabe) >0 && Number(eingabe) !== null){
    // Kosten werden errechnet
    let kaufKosten = eingabe*kostenStein;
    // hat man genug Gold?
    if (goldBesitz >= 0 && goldBesitz-kaufKosten >= 0)  {
       aktuellesGold();
      }
    // zu wenig Gold --> Kreditabfrage
    else { alert("Du hast nicht genug Gold !");
    stein.innerHTML = "Du besitzt "+steinBesitz+ " Stein";
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
  
  // Die Kaufabwicklung, Stein wird addiert, Gold subtrahiert
  function aktuellesGold(){
    goldBesitz= goldBesitz-kaufKosten;
    gold.innerHTML = "Dein Kontostand beträgt : "+goldBesitz+ " Gold";
    steinBesitz = Number(eingabe)+steinBesitz;
    stein.innerHTML = "Du besitzt "+steinBesitz+ " Stein";
    
    // preisAktualisieren();
    // verkaufAktualisieren();
    localStorage.setItem("neuGold" , goldBesitz);
  localStorage.setItem("stein" , steinBesitz);
  return goldBesitz;
    }
}else {alert("Keine Menge eingegeben !")}
}
  // auf den Button Stein verkaufen klicken --> die Berechnung wird durchgeführt
  function verkaufen(){  
   
    let eingabe2 = document.getElementById("eingabefeld").value;
  if (Number(eingabe2) >0 && Number(eingabe2) !== null){
    // Kosten werden errechnet
    let verkaufErhalt = eingabe2*verkaufKosten;
    // hat man genug Stein?
    // preisAktualisieren();
    // verkaufAktualisieren();
    if (steinBesitz >= 0 && steinBesitz-Number(eingabe2) >= 0)  {
       aktuellesGold2();
      
      }
     
    // zu wenig Stein Alarm
    else { alert("Du hast nicht genügend Stein !");
    
      }
     
  // Die Kaufabwicklung, Stein wird addiert, Gold subtrahiert
  function aktuellesGold2(){
    goldBesitz= goldBesitz+verkaufErhalt;
    gold.innerHTML = "Dein Kontostand beträgt : "+goldBesitz+ " Gold";
    steinBesitz = steinBesitz-Number(eingabe2);
    stein.innerHTML = "Du besitzt "+steinBesitz+ " Stein";
    
    localStorage.setItem("neuGold" , goldBesitz);
  localStorage.setItem("stein" , steinBesitz);
  return goldBesitz;
    }
}else {alert("Keine Menge eingegeben !")}
}
     
function weiterStein(){
  kostenStein = Math.floor(Math.random() * 9) +9;
  localStorage.setItem("kostenStein", JSON.stringify(kostenStein));
  window.location.href='spiel.html';
}
  
  