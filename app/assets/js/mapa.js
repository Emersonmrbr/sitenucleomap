function myMap() {
    var mapCanvas = document.getElementById("Mapa");
    var myCenter = new google.maps.LatLng(-25.497900, -49.3137500);
    var mapOptions = { center: myCenter, zoom: 17 };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
        icon: "../_imagens/NucleoMAP_Pin_mapa.png"
    });
    marker.setMap(map);
}