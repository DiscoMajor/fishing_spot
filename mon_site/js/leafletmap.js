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
    iconUrl: "js/location_leaflet.png", // Custom icon for my map
    iconSize: [40, 40], // size of the red icon
    iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -20], // point from which the popup should open
});

// Markers on my map + Pop Up with informations

L.marker([43.526107, 1.285239], { icon: redPin })
    .addTo(map)
    .bindPopup(
        `<div><img class='imgPopUpLeaftlet' src='./img/lac_bidot.jpg'></div>
        <div class='textPopUpLeaflet'> 
        <h3>Petit Lac De Bidot</h3>
        <p>📍 Fonsorbes</p> 
        <button onclick='openOverlay1()' class='bouton-pages' type='submit'>En savoir plus</button> </div>`
    );

L.marker([43.584188, 1.358444], { icon: redPin })
    .addTo(map)
    .bindPopup(
        `<div><img class='imgPopUpLeaftlet' src='./img/lac_vieux_pigeonnier.png'></div>
        <div class='textPopUpLeaflet'> <h3>Lac du vieux Pigeonnier</h3> 
        <p>📍 Tournefeuille</p> 
        <button onclick='openOverlay2()' class='bouton-pages' type='submit'>En savoir plus</button> </div>`
    );

L.marker([43.537343, 1.514988], { icon: redPin })
    .addTo(map)
    .bindPopup(
        `<div><img class='imgPopUpLeaftlet' src='./img/lac_de_labege.png'></div> 
        <div class='textPopUpLeaflet'> <h3>Lac de Labège</h3>
        <p>📍 Labège</p> 
        <button onclick='openOverlay3()' class='bouton-pages' type='submit'>En savoir plus</button> </div>`
    );

//! OVERLAYS

// Je crée une fonction générale pour mes overlays en donnant un parametre et  mes instructions

// Je veux que ma function récupère les IDS de mes overlays côté HTML
function openOverlay(overlayIDs) {
    let overlay = document.getElementById(overlayIDs); // IDs overlay dans mon HTML
    overlay.classList.toggle("hidden"); // Bouton ON/OFF de ma classe hidden
    overlay.style.right = overlay.style.right === "0%" ? "-100%" : "0%"; // J'ajoute la transition fluide de mon css à ma fonction
}

// Je créé une fonction unique pour chaque overlay en utilisant ma fonction générale "OpenOverlay" et je lui spécifie quel overlay ouvrir.
// Je récupère l'ID de mon overlay et "onclick", elle s'active.
function openOverlay1() {
    openOverlay("overlay1");
}

//! Idem pour l'overlay deux, j'applique mes instructions de ma fonction Openoverlay.
function openOverlay2() {
    openOverlay("overlay2");
}

function openOverlay3() {
    openOverlay("overlay3");
}

// Je crée une fonction pour tous mes overlays en donnant deux parametres (Un qui va récuperer les ids des boutons, pour l'id des overlays) et mes instructions
// Ici je veux que ma function récupère les IDS de mes overlays
function closeOverlay(closeBtnSelector, overlaySelector) {
    const closeOverlay = document.querySelector(closeBtnSelector); // Premier parametre => les ids de mes boutons
    const overlay = document.querySelector(overlaySelector); // Deuxieme parametre => les ids de mes overlay )

    // Je veux qu'au clic du bouton de fermeture, on ajoute à mes overlay la classe hidden
    closeOverlay.addEventListener("click", () => {
        overlay.classList.add("hidden");
        overlay.style.right = overlay.style.right === "0%" ? "-100%" : "0%";
    });
}
// j'appel ma function et je selectionne le bouton de l'overlay et l'ID de la div que je veux remettre en hidden.
closeOverlay("#close-overlay1", "#overlay1");
closeOverlay("#close-overlay2", "#overlay2");
closeOverlay("#close-overlay3", "#overlay3");

// TODO Il me faut mon bouton pour ouvrir déjà a recuperer (lui donner une classe openBtnpopup dans mon JS) (Virer le onclick sur mon JS en haut et tout refaire propre.)
// let openBtn = document.querySelector(".openBtnPopup")
// TODO Il me faut recuperer la classe de mes overlays (donner une classe aussi overlay-popup par exemple et virer l'ID déjà en place dans mon HTML)
// let overlayHtml = document.querySelector(".overlay-popup");
// TODO Il me faut recuperer mon bouton fermeture présent dans mon HTML closeBtn (a changer en clase)
// let closeBtn = document.querySelector(".closeBtnPopup")
// ! J'ai plusieurs overlay, donc je dois mettre selectorAll ? Et j'ai plusieurs boutons donc je dois aussi mettre selectorAll ?
// ! Il n'y aura pas de conflits ?

// Modifier dans mon CSS avec le nouveau nom de ma classe pour les popups.

// ! Pour ouvrir l'overlay avec le bouton
// openBtn.addEventListener('click',()=>{
// overlayHtml.classList.toggle("hidden"); // Bouton ON/OFF de ma classe hidden //! .remove hidden à try si ca marche pas.
// overlayHtml.style.right = overlay.style.right === "0%" ? "-100%" : "0%"; // J'ajoute la transition fluide de mon css à ma fonction
// });

// //! Pour fermer l'overlay avec le bouton
// closeBtn.addEventListener("click", () => {
//     overlayHtml.classList.toggle("hidden"); // Bouton ON/OFF de ma classe hidden //! .add hidden à try si ca marche pas
//     overlayHtml.style.right = overlay.style.right === "0%" ? "-100%" : "0%"; // J'ajoute la transition fluide de mon css à ma fonction.
// });
