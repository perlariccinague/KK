if(document.getElementById('map')) {
    const markerIcon = L.icon({
        iconUrl: 'files/layout/2016/mobil_google_maps.png',
        iconSize: [50, 50],
        iconAnchor: [18, 60]
    });

    const map = L.map('map', {
        scrollWheelZoom: false
    }).setView([50.987222, 11.326138], 16);

    L.tileLayer('https://api.mapbox.com/styles/v1/floriantepelmann/ckump41c903u017lizcyz4tcy/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 22,
        accessToken: 'pk.eyJ1IjoiZmxvcmlhbnRlcGVsbWFubiIsImEiOiJjbDR4emFzbW4xbjBuM2VwaG15c3NhbXcyIn0.1YvY1-lUe64NOobEZKhNVQ'
    }).addTo(map);

    let coords = [50.987222, 11.326138];
    let marker = L.marker(coords, {icon: markerIcon}).addTo(map);
    marker.bindPopup('<strong>Hier findest du uns:</strong><br>Carl-August-Allee 1<br>99423 Weimar / Thüringen');
}
