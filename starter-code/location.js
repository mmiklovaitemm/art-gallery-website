const map = L.map("map").setView([41.4896, -71.3128], 15); // Centras ir pradinio vaizdo mastelis

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const customIcon = L.icon({
  iconUrl: "./assets/icon-location.svg",
  iconSize: [50, 65], // (plotis x aukštis)
  iconAnchor: [25, 50],
});

L.marker([41.4851, -71.3115], { icon: customIcon }).addTo(map);
