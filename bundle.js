!function(){"use strict";var o=L.map("map").setView([51.505,-.09],13);if(L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19}).addTo(o),navigator.geolocation){var e,r;function t(t){e&&(o.removeLayer(e),o.removeLayer(r)),console.log(t);var a=t.coords.latitude,i=t.coords.longitude;e||o.setView([a,i],13),e=L.marker([a,i]),r=L.circle([a,i],{radius:t.coords.accuracy});var n=L.featureGroup([e,r]).addTo(o);o.fitBounds(n.getBounds())}setInterval((()=>{navigator.geolocation.getCurrentPosition(t)}),2500)}}();
//# sourceMappingURL=bundle.js.map
