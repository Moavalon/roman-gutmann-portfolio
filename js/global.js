


goldBesitz = JSON.parse(localStorage.getItem("neuGold"));

schulden = JSON.parse(localStorage.getItem("schulden"));

kreditRahmen = JSON.parse(localStorage.getItem("kreditRahmen"));

kornBesitz = JSON.parse(localStorage.getItem("korn"));

restMöglich = JSON.parse(localStorage.getItem("restMöglich"));

zinsen = JSON.parse(localStorage.getItem("zins"));

kornBesitz = JSON.parse(localStorage.getItem("korn"));

holzBesitz = JSON.parse(localStorage.getItem("holz"));

steinBesitz = JSON.parse(localStorage.getItem("stein"));


// Diese Werte werden beim Aufrufen der Seite gleich angezeigt und auf den Ursprungswert gesetzt
function beiStart() {  
  
    gold = document.getElementById("gold");
    gold.innerHTML = "Dein Kontostand beträgt : "+goldBesitz+ " Gold";
     
    let preisMinus = document.getElementById("preis2");
    preisMinus.innerHTML = verkaufKosten;
  
    let Zinsanzeige = document.getElementById("Zinssatz");
    Zinsanzeige.innerHTML = zinsen;
  
    restKredit = document.getElementById("restMöglich");
    restKredit.innerHTML = restMöglich;

    kreditRahmenAnzeige = document.getElementById("kreditRahmen");
    kreditRahmenAnzeige.innerHTML = kreditRahmen;

    let schuldenStand = Schuldenstand();
    schuldenStand.innerHTML = "Dein Schuldenkonto beträgt " +schulden+ " Gold";
    
// Button Schulden aufnehmen und zurückzahlen
    let schuldenMachen = document.getElementById("schuldenMachen");
    schuldenMachen.addEventListener('click', () => {
      neueSchulden()
    });
    let schuldenBack = document.getElementById("schuldenBack");
    schuldenBack.addEventListener('click', () => {
      Schuldenkonto()
    });
//Spielername und Farbe
    let spielerName = localStorage.getItem("spielerName");
  let spielerNameAnzeige = document.getElementById("spielerName");
  spielerNameAnzeige.innerHTML = spielerName;
  let titel = localStorage.getItem("titel");
  let spielerTitelAnzeige = document.getElementById("titel");
  if (titel==1){
    titel = "Sir";
  spielerTitelAnzeige.innerHTML = titel;
  }else if (titel ==2){
    titel = "Lady";
  spielerTitelAnzeige.innerHTML = titel;
  }else if (titel ==3){
    titel = "LadySir";
  spielerTitelAnzeige.innerHTML = titel;
  }
  let selectedColor = localStorage.getItem("selectedColor");
  document.body.style.backgroundColor = selectedColor;
  
  
  }


// Zinsen ändern sich
function zinsenAktualisieren(){
  zinsen = Math.floor(Math.random() * 4) +1;
  let Zinsanzeige = document.getElementById("Zinssatz");
  Zinsanzeige.innerHTML = zinsen;
  localStorage.setItem("zins", JSON.stringify(zinsen));
  return zinsen;
}

// Restschuld ändert sich


function restMöglicherKredit() {
  restMöglich = kreditRahmen + schulden;
  
  if (restMöglich >= 0) {
    let restKredit = document.getElementById("restMöglich");
    restKredit.innerHTML = restMöglich;
    localStorage.setItem("restMöglich", JSON.stringify(restMöglich));
    return restMöglich;
  } else {
    let restKredit = document.getElementById("restMöglich");
    restKredit.innerHTML = 0;
    restMöglich = 0;
    localStorage.setItem("restMöglich", JSON.stringify(restMöglich));
    return restMöglich;
  }
}

// Schuldenrückmeldung
function Schuldenstand() {
  localStorage.setItem("schulden", JSON.stringify(schulden));
  return document.getElementById("schulden");
}

// Schulden zurückzahelen
function Schuldenkonto(){
  let eingabe2 = document.getElementById("eingabefeldSchulden").value;
if (goldBesitz >= 0 && goldBesitz-eingabe2 >= 0 ){
  if(schulden < 0 && eingabe2>0)  {
    schulden= Number(eingabe2)+schulden;
    let schuldenStand = Schuldenstand();
    schuldenStand.innerHTML = "Dein Schuldenkonto beträgt " +schulden+ " Gold";
    goldBesitz = goldBesitz-Number(eingabe2);
    gold.innerHTML = "Dein Kontostand beträgt : "+goldBesitz+ " Gold";
    // zinsenAktualisieren();
    restMöglicherKredit();
  }else{ alert("Das ist nicht möglich !")}
}else { alert("Du hast nicht genug Gold !");}
 }
 // Funktion Schulden aufnehmen
function neueSchulden() {
  let schuldenAufnahme = document.getElementById("eingabefeldSchulden").value;
  if (Number(schuldenAufnahme) > 0 && Number(schuldenAufnahme) <= restMöglich) {
    if (restMöglich >schulden){
    goldBesitz = goldBesitz+Number(schuldenAufnahme);
    gold.innerHTML = "Dein Kontostand beträgt : "+goldBesitz+ " Gold";
   
    schulden = schulden-Number(schuldenAufnahme);
    let schuldenStand = Schuldenstand();
    schuldenStand.innerHTML = "Dein Schuldenkonto beträgt " +schulden+ " Gold";
    // zinsenAktualisieren();
    restMöglicherKredit();
    localStorage.setItem("neuGold" , goldBesitz);
    return goldBesitz;
   
  }
    
    else { alert("Die maximalen Schulden sind erreicht !");}

  }else { alert("Das ist nicht möglich !");
    
  }
  
  schulden = localStorage.setItem("schulden");
  return schulden;
  }

  // function preisAktualisieren(){
  //   kosten = Math.floor(Math.random() * 7) +3;
  //   let preis = document.getElementById("preis");
  //   preis.innerHTML = kosten;
  //   localStorage.setItem("neuPreis", JSON.stringify(kosten));
  //   return kosten;
  // }
  
    
  