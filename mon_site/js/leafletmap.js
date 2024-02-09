// J'initialise ma carte avec coordonnées géographique pour l'afficher sur le site à un endroit précis (Alentours de Toulouse) et je précise que je veux un zoom de 12.
let map = L.map("map").setView([43.56578382655103, 1.3970038497246386], 12);

// Tuile personnalisée pour ma carte
let tiles = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20,
}).addTo(map);

// Red marker ICON (ping on the map)

let redPin = L.icon({
    iconUrl: "js/location_leaflet.png",
    iconSize: [40, 40], // size of the icon
    iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -20], // point from which the popup should open relative to the iconAnchor
});

// Markers on my map + Pop Up with informations

L.marker([43.526107, 1.285239], { icon: redPin })
    .addTo(map)
    .bindPopup(
        "<div><img class='imgPopUpLeaftlet' src='./img/lac_bidot.jpg'></div> <div class='textAndButtonInsidePopUpLeaflet'> <h3>Petit Lac De Bidot</h3> <p>Fonsorbes</p> <button id='titu' onclick='openOverlay1()' class='bouton-pages' type='submit'>En savoir plus</button> </div>"
    );

L.marker([43.584188, 1.358444], { icon: redPin })
    .addTo(map)
    .bindPopup(
        "<div><img class='imgPopUpLeaftlet' src='./img/lac_vieux_pigeonnier.png'></div> <div class='textAndButtonInsidePopUpLeaflet'> <h3>Lac du vieux Pigeonnier</h3> <p>Tournefeuille</p> <button id='btnCloseOverlay2' onclick='openOverlay2()' class='bouton-pages' type='submit'>En savoir plus</button> </div>"
    );

L.marker([43.537343, 1.514988], { icon: redPin })
    .addTo(map)
    .bindPopup(
        "<div><img class='imgPopUpLeaftlet' src='./img/lac_de_labege.png'></div> <div class='textAndButtonInsidePopUpLeaflet'> <h3>Lac de Labège</h3> <p>Labège</p> <button id='btnCloseOverlay3' onclick='openOverlay3()' class='bouton-pages' type='submit'>En savoir plus</button> </div>"
    );

//! OVERLAYS

//* Fonction qui enlève mon texte caché en HTML pour l'afficher par la droite avec une transition :
function openOverlay1() {
    overlay1 = document.getElementById("overlay1"); // Je récupère l'ID de ma div ou est contenu mon texte dans le html
    overlay1.classList.toggle("hidden"); // Je bascule (comme un bouton on/off d'une lumière) le "display: none;" de ma class .hidden situé dans mon html (donc mon texte est visible mais toujours sur la droite de mon écran à -100%)
    overlay1.style.right = overlay1.style.right === "0%" ? "-100%" : "0%"; // De ce que j'ai compris, je dois récupérer l'animation (Keyframes de mon css) et lui indiquer de la faire. Donc si à -100%  lorsque je clique sur le bouton elle va à 0% et inversement. Merci internet.
}

//* For the second overlay

function openOverlay2() {
    overlay2 = document.getElementById("overlay2");
    overlay2.classList.toggle("hidden");
    overlay2.style.right = overlay2.style.right === "0%" ? "-100%" : "0%";
}

//* For the third overlay

function openOverlay3() {
    overlay3 = document.getElementById("overlay3");
    overlay3.classList.remove("hidden");
    overlay3.style.right = overlay3.style.right === "0%" ? "-100%" : "0%";
}

//! Version "simplifiée sans redondance" : je créé une fonction pour tous mes overlays en donnant un parametre à ma fonction et mes instructions
// function openOverlay(overlayIDs) {
//     let overlay = document.getElementById(overlayIDs);
//     overlay.classList.toggle("hidden");
//     overlay.style.right = overlay.style.right === "0%" ? "-100%" : "0%";
// }
//! Je créé une fonction unique pour chaque overlay en utilisant ma fonction générale "OpenOverlay" et je lui spécifie quel overlay ouvrir.
// function openOverlay1() {
//     openOverlay("overlay1");
// }
//! J'assigne ensuite mes fonctions aux bontons correspondants de ma carte.
// function openOverlay2() {
//     openOverlay("overlay2");
// }

// function openOverlay3() {
//     openOverlay("overlay3");
// }

//TODO Fonction pour fermer les overlays. Bolean ?
//! MARCHE PAS
function closeOverlaysBtn1() {
    closingOverlay1 = document.getElementById("close-overlay1");
    closingOverlay1.addEventListener("click", (event) => {
        overlay1.classList.add("hidden");
    });
}
