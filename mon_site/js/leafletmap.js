// J'initialise ma carte avec coordonnées géographique pour l'afficher sur le site à un endroit précis (Alentours de Toulouse) et je précise que je veux un zoom de 12.
let map = L.map("map").setView([43.56578382655103, 1.3970038497246386], 12);

// Visuel personnalisé pour ma carte
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
        `<div><img class='imgPopUpLeaftlet' src='./img/lac_bidot.jpg'> <img class='favori-lac' src='../mon_site/icones/favoris_ico.svg' alt='favoris icon' /></div>
        <div class='textPopUpLeaflet'> 
        <h3>Petit Lac De Bidot</h3>
        <p>📍 Fonsorbes</p> 
        <button id="btn-overlay1" onclick='openOverlay(this.id)' class='bouton-pages' type='submit'>En savoir plus</button> </div>`
    );

L.marker([43.584188, 1.358444], { icon: redPin })
    .addTo(map)
    .bindPopup(
        `<div><img class='imgPopUpLeaftlet' src='./img/lac_vieux_pigeonnier.png'> <img class='favori-lac' src='../mon_site/icones/favoris_ico.svg' alt='favoris icon' /></div>
        <div class='textPopUpLeaflet'>
        <h3>Lac du vieux Pigeonnier</h3> 
        <p>📍 Tournefeuille</p>
        <button id="btn-overlay2" onclick='openOverlay(this.id)' class='bouton-pages' type='submit'>En savoir plus</button>
        </div>`
    );

L.marker([43.537343, 1.514988], { icon: redPin })
    .addTo(map)
    .bindPopup(
        `<div><img class='imgPopUpLeaftlet' src='./img/lac_de_labege.png'> <img class='favori-lac' src='../mon_site/icones/favoris_ico.svg' alt='favoris icon' /></div> 
        <div class='textPopUpLeaflet'> <h3>Lac de Labège</h3>
        <p>📍 Labège</p> 
        <button id="btn-overlay3" onclick='openOverlay(this.id)' class='bouton-pages' type='submit'>En savoir plus</button> </div>`
    );

//! OVERLAYS

// Fonction Ouverture Overlay

// Paramètre = Ids de mes boutons
function openOverlay(buttonIds) {
    // extrait l'identifiant de l'overlay à partir de l'identifiant du bouton.
    let overlayIds = buttonIds.replace("btn-", "");
    let overlay = document.getElementById(overlayIds); // ID Overlay du HTML
    overlay.classList.toggle("hidden"); // Bouton ON/OFF de ma classe hidden
    overlay.style.right = "0%"; // Overlay passe de -100% à 0%
}

// Fonction fermer mes overlays ; deux parametres : Un qui recupère le bouton, et l'autre qui récupère les overlays
// Ici je veux que ma function récupère les Ids de mes overlays
function closeOverlay(closeBtnSelector, overlaySelector) {
    const closeOverlay = document.querySelector(closeBtnSelector); // Premier parametre => les Ids de mes boutons
    const overlay = document.querySelector(overlaySelector); // Deuxieme parametre => les Ids de mes overlay

    // Je veux qu'au clic du bouton de fermeture, on ajoute à mes overlay la classe hidden
    closeOverlay.addEventListener("click", () => {
        overlay.classList.add("hidden");
    });
}
// j'appel ma function et je selectionne le bouton de l'overlay et l'ID de la div que je veux remettre en hidden.
closeOverlay("#close-overlay1", "#overlay1");
closeOverlay("#close-overlay2", "#overlay2");
closeOverlay("#close-overlay3", "#overlay3");
