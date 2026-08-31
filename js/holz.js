window.addEventListener('load', () => {
  holzBesitz = JSON.parse(localStorage.getItem("holz"));  
  holzProduziert = JSON.parse(localStorage.getItem("holzProduziert"));
  holzBesitz = holzBesitz+holzProduziert;
  holz.innerHTML = "Du besitzt "+holzBesitz+ " Holz";
  beiStart();
  
  holz = document.getElementById("holz");

  kornBesitz = JSON.parse(localStorage.getItem("korn"));
  
  
});
kostenHolz = JSON.parse(localStorage.getItem("kostenHolz"));
let preis = document.getElementById("preis");
    preis.innerHTML = kostenHolz;
    let verkaufKosten = kostenHolz -3;
    

  
  
   //auf den Button holz kaufen klicken --> die Berechnung wird durchgeführt
  function kaufen(){  
  
    let eingabe = document.getElementById("eingabefeld").value;
    if (Number(eingabe) >0 && Number(eingabe) !== null){
    // Kosten werden errechnet
    let kaufKosten = eingabe*kostenHolz;
    // hat man genug Gold?
    if (goldBesitz >= 0 && goldBesitz-kaufKosten >= 0)  {
       aktuellesGold();
      }
    // zu wenig Gold --> Kreditabfrage
    else {
      alert("Du hast nicht genug Gold!");
      holz.innerHTML = "Du besitzt " + holzBesitz + " Holz";
      let benotigterKredit = kaufKosten - goldBesitz;
      let antwort = prompt("Wieviel Gold Kredit willst du aufnehmen?\n(für den Kauf werden min. " + benotigterKredit + " Gold benötigt.\nMax. " + restMöglich + " Gold Schulden sind möglich!)");
    
      // Überprüfe die Bedingungen für den Kauf und die Kreditaufnahme
      if (schulden <= kreditRahmen && Number(antwort) <= restMöglich && goldBesitz >= 0 && goldBesitz + kaufKosten >= 0 && Number(antwort) >= benotigterKredit) {
        goldBesitz += Number(antwort);
        gold.innerHTML = "Dein Kontostand beträgt: " + goldBesitz + " Gold";
        schulden -= Number(antwort);
        let schuldenStand = Schuldenstand();
        schuldenStand.innerHTML = "Dein Schuldenkonto beträgt " + schulden + " Gold";
        restMöglicherKredit();
        aktuellesGold();
      }
    
    
      else { alert("Das ist nicht möglich !");
      
      }
    }
  
  // Die Kaufabwicklung, holz wird addiert, Gold subtrahiert
  function aktuellesGold(){
    goldBesitz= goldBesitz-kaufKosten;
    gold.innerHTML = "Dein Kontostand beträgt : "+goldBesitz+ " Gold";
    holzBesitz = Number(eingabe)+holzBesitz;
    holz.innerHTML = "Du besitzt "+holzBesitz+ " Holz";
    
    // preisAktualisieren();
    // verkaufAktualisieren();
    localStorage.setItem("neuGold" , goldBesitz);
  localStorage.setItem("holz" , holzBesitz);
  return goldBesitz;
    }
}else {alert("Keine Menge eingegeben !")}
}
  // auf den Button holz verkaufen klicken --> die Berechnung wird durchgeführt
  function verkaufen(){  
   
    let eingabe2 = document.getElementById("eingabefeld").value;
  if (Number(eingabe2) >0 && Number(eingabe2) !== null){
    // Kosten werden errechnet
    let verkaufErhalt = eingabe2*verkaufKosten;
    // hat man genug holz?
    // preisAktualisieren();
    // verkaufAktualisieren();
    if (holzBesitz >= 0 && holzBesitz-Number(eingabe2) >= 0)  {
       aktuellesGold2();
      
      }
     
    // zu wenig holz Alarm
    else { alert("Du hast nicht genügend Holz !");
    
      }
     
  // Die Kaufabwicklung, holz wird addiert, Gold subtrahiert
  function aktuellesGold2(){
    goldBesitz= goldBesitz+verkaufErhalt;
    gold.innerHTML = "Dein Kontostand beträgt : "+goldBesitz+ " Gold";
    holzBesitz = holzBesitz-Number(eingabe2);
    holz.innerHTML = "Du besitzt "+holzBesitz+ " Holz";
    
    localStorage.setItem("neuGold" , goldBesitz);
  localStorage.setItem("holz" , holzBesitz);
  return goldBesitz;
    }
}else {alert("Keine Menge eingegeben !")}
}
    
function weiterHolz(){
  kostenHolz = Math.floor(Math.random() * 8) +6;
  localStorage.setItem("kostenHolz", JSON.stringify(kostenHolz));
  window.location.href='stein.html'
}
  
  