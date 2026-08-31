document.addEventListener("DOMContentLoaded", function() {

    // auf ein Bild klicken um die Hintergrundfarbe zu ändern
    let blau = document.getElementById("blau");
    let rot = document.getElementById("rot");
    let lila = document.getElementById("lila");
    
  
    if (blau) {
      blau.addEventListener("click", function() {
        document.body.style.backgroundColor = "rgb(180, 205, 247)";
        localStorage.setItem("selectedColor", "rgb(180, 205, 247)");
        blau.classList.add("selected");
        rot.classList.remove("selected");
        lila.classList.remove("selected");
        farbAuswahl = 1;
        titel = 1;
        localStorage.setItem("titel", titel);
      });
    }
  
    if (rot) {
      rot.addEventListener("click", function() {
        document.body.style.backgroundColor = "rgb(243, 135, 135)";
        localStorage.setItem("selectedColor", "rgb(243, 135, 135)");
        rot.classList.add("selected");
        blau.classList.remove("selected");
        lila.classList.remove("selected");
        farbAuswahl = 2;
        titel = 2;
        localStorage.setItem("titel", titel);
      });
    }
  
    if (lila) {
      lila.addEventListener("click", function() {
        document.body.style.backgroundColor = "rgb(214, 132, 203)";
        localStorage.setItem("selectedColor", "rgb(214, 132, 203)");
        lila.classList.add("selected");
        blau.classList.remove("selected");
        rot.classList.remove("selected");
        farbAuswahl += 3;
        titel = 3;
        localStorage.setItem("titel", titel);
      });
    }

// let spielerName ="Spieler";

let spielerNameInput = document.getElementById("spielerName");
let spielerName = localStorage.getItem("spielerName") || "Spieler";

spielerNameInput.addEventListener("input", function() {
  spielerName = spielerNameInput.value.trim() || "Spieler";
  localStorage.setItem("spielerName", spielerName);
});

spielerNameInput.value = spielerName || "Spieler";
localStorage.setItem("spielerName", spielerName);
    
  });
  
  let titel;
  let farbAuswahl=0;

function leicht() {

    
    if (farbAuswahl==0){
    alert("Wähle erst eine Farbe");}
    else{
    goldBesitz = JSON.parse(localStorage.getItem("neuGold"));
    goldBesitz = goldBesitz*2;
    localStorage.setItem("neuGold" , goldBesitz);
    kreditRahmen = JSON.parse(localStorage.getItem("kreditRahmen"));
    kreditRahmen = kreditRahmen*2
    localStorage.setItem("kreditRahmen", JSON.stringify(kreditRahmen));
    restMöglich = JSON.parse(localStorage.getItem("restMöglich"));
    restMöglich = restMöglich*2;
    localStorage.setItem("restMöglich", JSON.stringify(restMöglich))
    window.open("land.html", "_blank");
    window.location.href='../index.html';}
}

function mittel() {

    if (farbAuswahl==0){
    alert("Wähle erst eine Farbe");}
    else{
      window.open("land.html", "_blank");
      window.location.href='../index.html';}
}

function schwer() {

    if (farbAuswahl==0){
    alert("Wähle erst eine Farbe");}
    else{
    goldBesitz = JSON.parse(localStorage.getItem("neuGold"));
    goldBesitz = goldBesitz/2;
    localStorage.setItem("neuGold" , goldBesitz);
    kreditRahmen = JSON.parse(localStorage.getItem("kreditRahmen"));
    kreditRahmen = kreditRahmen/2
    localStorage.setItem("kreditRahmen", JSON.stringify(kreditRahmen));
    restMöglich = JSON.parse(localStorage.getItem("restMöglich"));
    restMöglich = restMöglich/2;
    localStorage.setItem("restMöglich", JSON.stringify(restMöglich))
    window.open("land.html", "_blank");
    window.location.href='../index.html';}
}