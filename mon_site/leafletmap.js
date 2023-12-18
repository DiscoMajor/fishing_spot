const map = L.map("map").setView([43.576358, 1.408894], 13);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.marker([43.526107, 1.285239]).addTo(map).bindPopup("Petit Lac De Bidot").openPopup();
L.marker([43.584188, 1.358444]).addTo(map).bindPopup("Lac du vieux pigeonnier").openPopup();
L.marker([43.537343, 1.514988]).addTo(map).bindPopup("Lac de Labège").openPopup();
