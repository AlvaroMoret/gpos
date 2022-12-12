var map = L.map('map').setView([-21.31675, -40.706206], 13.5);
var popup = L.popup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var icoG = L.icon({
        iconUrl: 'static/images/hmGreen.png',
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50]
});

var icoR = L.icon({
        iconUrl: 'static/images/hmRed.png',
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50]
    });
    
    /*
    var marker1 = L.marker([-21.3102855, -40.665376], {icon: icoR}).addTo(map);
    var marker2 = L.marker([-21.317522, -40.756253], {icon: icoG}).addTo(map);
    var marker3 = L.marker([-21.307811, -40.694243], {icon: icoG}).addTo(map);
    
    function onMapClick(e) {
        popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    }
    */

var celina = L.polygon([
    [-20.763488, -41.591406],
    [-20.763638, -41.591717],
    [-20.763919, -41.591685],
    [-20.76435, -41.593133],
    [-20.765213, -41.59294],
    [-20.766618, -41.59206],
    [-20.766457, -41.590623],
]).addTo(map);

var auditorio = L.polygon([
        [-21.299371, -40.768181], //area 16
        [-21.308447, -40.768382],
        [-21.308527, -40.779620],
        [-21.325318, -40.779537],
        [-21.325518, -40.768299],
        [-21.335032, -40.768342],
        [-21.335112, -40.765125],
        [-21.32132, -40.7653830],
        [-21.32108, -40.7640100],
        [-21.313284, -40.764053],
        [-21.313045, -40.765426],
        [-21.299531, -40.765040],
    ]).addTo(map);

    auditorio.bindPopup("Auditório");


var marker4 = L.marker([-20.757616, -41.531332]).addTo(map);
var marker5 = L.marker([-20.791695, -41.388556]).addTo(map);

map.on('click', onMapClick);
