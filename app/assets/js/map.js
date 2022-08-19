// maps;
function containerMaps() {
	let mapCanvas = document.querySelector(".js-maps");
	let mapCenter = new google.maps.LatLng(-25.4979, -49.31375);
	let mapIcon = "app/assets/image/NucleoMAP_Pin_mapa.png";
	let mapOptions = { center: mapCenter, zoom: 17 };
	let map = new google.maps.Map(mapCanvas, mapOptions);
	let marker = new google.maps.Marker({ position: mapCenter, icon: mapIcon });
	marker.setMap(map);
}
