let map = L.map("map").setView([43.576358, 1.408894], 13);
map.setView([43.56578382655103, 1.3970038497246386], 12);

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
    iconAnchor: [24, 90], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

// Markers on my map + Pop Up with informations

L.marker([43.526107, 1.285239], { icon: redPin })
    .addTo(map)
    .bindPopup(
        "<div><img class='imgPopUpLeaftlet' src='https://picsum.photos/100/100'></div> <div class='textAndButtonInsidePopUpLeaflet'> <h3>Petit Lac De Bidot</h3> <p>Fonsorbes</p> <button id='btnCloseOverlay' onclick='openOverlay1()' class='bouton-pages' type='submit'>En savoir plus</button> </div>"
    );

L.marker([43.584188, 1.358444], { icon: redPin })
    .addTo(map)
    .bindPopup(
        "<div><img class='imgPopUpLeaftlet' src='https://picsum.photos/100/100'></div> <div class='textAndButtonInsidePopUpLeaflet'> <h3>Lac du vieux Pigeonnier</h3> <p>Tournefeuille</p> <button id='btnCloseOverlay' onclick='openOverlay2()' class='bouton-pages' type='submit'>En savoir plus</button> </div>"
    );

L.marker([43.537343, 1.514988], { icon: redPin })
    .addTo(map)
    .bindPopup(
        "<div><img class='imgPopUpLeaftlet' src='https://picsum.photos/100/100'></div> <div class='textAndButtonInsidePopUpLeaflet'> <h3>Lac de Labège</h3> <p>Labège</p> <button class='bouton-pages' type='submit'>En savoir plus</button> </div>"
    );

//* Fonction qui enlève mon texte caché en HTML pour l'afficher par la droite avec une transition :
function openOverlay1() {
    let overlay1 = document.getElementById("overlay1"); // Je récupère l'ID de ma div ou est contenu mon texte dans le html
    overlay1.classList.toggle("hidden"); // Je bascule (comme un bouton on/off d'une lumière) le "display: none;" de ma class .hidden situé dans mon html (donc mon texte est visible mais toujours sur la droite de mon écran à -100%)
    overlay1.style.right = overlay1.style.right === "0%" ? "-100%" : "0%"; // De ce que j'ai compris, je dois récupérer l'animation (Keyframes de mon css) et lui indiquer de la faire. Donc si à -100%  lorsque je clique sur le bouton elle va à 0% et inversement. Merci internet.
}

//* Same function as before for another overlay

function openOverlay2() {
    let overlay2 = document.getElementById("overlay2");
    overlay2.classList.toggle("hidden");
    overlay2.style.right = overlay2.style.right === "0%" ? "-100%" : "0%";
}

// //* Same function as before for the third overlay
// function openOverlay3() {
//     let overlay3 = document.getElementById("overlay3");
//     overlay3.classList.remove("hidden");
//     overlay3.style.right = overlay3.style.right === "0%" ? "-100%" : "0%";
// }

//! Ce qu'il y a en dessous sert juste à pouvoir fermer l'overlay si je clique a l'extérieur de celui-ci (utiliser selectorall pour que ça s'applique à tous mes overlay et tous mes boutons)

document.addEventListener("click", function (event) {
    // let closeoverlay = document.getElementById("overlay1"); // mes overlays ici ??
    let closeoverlay = document.querySelectorAll("#overlay1, #overlay2"); // mes overlay 1 et 2 dans mon HTML
    let overlayBtn = document.getElementById("btnCloseOverlay"); // mes boutons
});

//! (je pourrais maybe utiliser query selector all et mes IDS overlay123 pour faire une seule fonction ?
// ! Du style : document.querySelectorAll("#overlac1, #overlaylac2") ect ect et idem pour fermer l'overlay ?
