const map = L.map("map").setView([43.576358, 1.408894], 13);
map.setView([43.56578382655103, 1.3970038497246386], 12);

const tiles = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 20,
}).addTo(map);

// Red marker ICON (ping on the map)

var redPin = L.icon({
    iconUrl: "js/location_leaflet.png",
    iconSize: [40, 40], // size of the icon
    iconAnchor: [24, 90], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

// Markers on my map + Pop Up with informations

L.marker([43.526107, 1.285239], { icon: redPin })
    .addTo(map)
    .bindPopup(
        "<div><img class='imgPopUpLeaftlet' src='https://picsum.photos/100/100'></div> <div class='textAndButtonInsidePopUpLeaflet'> <h3>Petit Lac De Bidot</h3> <p>Fonsorbes</p> <button class='bouton-pages' type='submit'>En savoir plus</button> </div>"
    );
L.marker([43.584188, 1.358444], { icon: redPin })
    .addTo(map)
    .bindPopup(
        "<div><img class='imgPopUpLeaftlet' src='https://picsum.photos/100/100'></div> <div class='textAndButtonInsidePopUpLeaflet'> <h3>Lac du vieux Pigeonnier</h3> <p>Tournefeuille</p> <button class='bouton-pages' type='submit'>En savoir plus</button> </div>"
    );
L.marker([43.537343, 1.514988], { icon: redPin })
    .addTo(map)
    .bindPopup(
        "<div><img class='imgPopUpLeaftlet' src='https://picsum.photos/100/100'></div> <div class='textAndButtonInsidePopUpLeaflet'> <h3>Lac de Labège</h3> <p>Labège</p> <button class='bouton-pages' type='submit'>En savoir plus</button> </div>"
    );

/* const tiles = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
  attribution:
    "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community",
}).addTo(map); */
