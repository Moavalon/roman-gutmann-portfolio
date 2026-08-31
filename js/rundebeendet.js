//aktuelle werte hereinholen
goldBesitz = JSON.parse(localStorage.getItem("neuGold"));
kornBesitz = JSON.parse(localStorage.getItem("korn"));
holzBesitz = JSON.parse(localStorage.getItem("holz"));
steinBesitz = JSON.parse(localStorage.getItem("stein"));
zinsen = JSON.parse(localStorage.getItem("zins"));
schulden = JSON.parse(localStorage.getItem("schulden"));


//werte berechnen und ausgeben
// let brotGesamtVerbrauch = JSON.parse(localStorage.getItem("brotverbrauch"));
// let brotVerbrauch = brotGesamtVerbrauch.brotVerbrauch;
//  brotAnzeige = document.getElementById("brotverbrauch");
// brotAnzeige.innerHTML = brotGesamtVerbrauch;

// brotProduziert = JSON.parse(localStorage.getItem("brotProduziert"));
//  brotProduziertAnzeige = document.getElementById("broteinheiten");
// brotProduziertAnzeige.innerHTML = brotProduziert;

// let brotLeft = brotProduziert+brotGesamtVerbrauch;
// localStorage.setItem("brotdifferenz", brotLeft);
// let brotdifferenz = document.getElementById("brotdifferenz");
// brotdifferenz.innerHTML = brotLeft;
korn.innerHTML = "Du besitzt "+kornBesitz+ " Brot";
steuerEinnahme = JSON.parse(localStorage.getItem("steuerEinnahme"));
 steuerAnzeige = document.getElementById("steuerEinnahmen");
 steuerAnzeige.innerHTML = steuerEinnahme;

let goldGesamtVerbrauch = JSON.parse(localStorage.getItem("goldverbrauch"));
 goldAnzeige = document.getElementById("goldverbrauch");
 goldAnzeige.innerHTML = goldGesamtVerbrauch;

 let schuldenStand = Schuldenstand();
 let zinsenZahlen = Math.ceil(Math.min((schulden * zinsen) / 100, 1));
 let zinsenAusgaben = document.getElementById("zinsenAusgaben");
 zinsenAusgaben.innerHTML = zinsenZahlen;
 
//goldbesitz neu berechnen
goldBesitz=goldBesitz+steuerEinnahme+goldGesamtVerbrauch+zinsenZahlen;
gold.innerHTML = goldBesitz;



//holz und stein werden neu berechnet und ausgegeben
holzProduziert = JSON.parse(localStorage.getItem("holzProduziert"));
 holzProduziertAnzeige = document.getElementById("holzProduziert");
holzProduziertAnzeige.innerHTML = holzProduziert;
holzBesitz = holzBesitz+holzProduziert;

holz.innerHTML = holzBesitz;

steinProduziert = JSON.parse(localStorage.getItem("steinProduziert"));
 steinProduziertAnzeige = document.getElementById("steinProduziert");
steinProduziertAnzeige.innerHTML = steinProduziert;
steinBesitz = steinBesitz+steinProduziert;

stein.innerHTML = steinBesitz;

window.addEventListener('load', () => {
  
    runde = JSON.parse(localStorage.getItem("runde"));
   if ( runde == 10){
    let rundeAnzeigen = document.getElementById("runde");
    rundeAnzeigen.innerHTML = "der letzten Runde !";
   }else{
        let rundeAnzeigen = document.getElementById("runde");
        rundeAnzeigen.innerHTML = " der Runde "+runde;
           }       
           
      
  });


  
  

  function rundeBeenden() {
    localStorage.setItem("neuGold" , goldBesitz);
    localStorage.setItem("holz" , holzBesitz);
    localStorage.setItem("stein" , steinBesitz);

    zinsen = JSON.parse(localStorage.getItem("zins"));
    zinsenAktualisieren(); 
    // preisAktualisieren();
    // verkaufAktualisieren();
    if (runde != 10) {
        runde++;
        localStorage.setItem("runde", JSON.stringify(runde));
                // Weiter zur nächsten HTML-Seite
      window.location.href="burgbau.html";
    } else {
      // Spiel beendet
      alert("Spiel beendet");
    }
  }
  