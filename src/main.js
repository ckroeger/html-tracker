var map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

if (navigator.geolocation) {
  var marker, circle;
  var fitBounds = false;
  setInterval(() => {
    navigator.geolocation.getCurrentPosition(onLocationFound);
  }, 2500);

  function onLocationFound(position) {
    if (marker) {
      map.removeLayer(marker);
      map.removeLayer(circle);
    }
    console.log(position);
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    if (!marker) map.setView([lat, lng], 13);
    marker = L.marker([lat, lng]); //.bindPopup("You are here").openPopup();
    circle = L.circle([lat, lng], {
      radius: position.coords.accuracy,
    });
    var featureGroup = L.featureGroup([marker, circle]).addTo(map);
    if (!fitBounds) {
      console.log("fitBounds");
      fitBounds = true;
      map.fitBounds(featureGroup.getBounds());
    }
  }
}
