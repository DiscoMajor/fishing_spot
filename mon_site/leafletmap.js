const map = L.map("map").setView([43.576358, 1.408894], 13);

const tiles = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: "abcd",
  maxZoom: 20,
}).addTo(map);

L.marker([43.526107, 1.285239]).addTo(map).bindPopup("Petit Lac De Bidot").openPopup();
L.marker([43.584188, 1.358444]).addTo(map).bindPopup("Lac du vieux pigeonnier").openPopup();
L.marker([43.537343, 1.514988]).addTo(map).bindPopup("Lac de Labège").openPopup();

/* const tiles = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
  attribution:
    "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community",
}).addTo(map); */
