// APP

//============================================================================================================//
//====== FONCTIONS GLOBALES ==================================================================================//
//============================================================================================================//

//====== CREATION DES MARQUEURS
  function createMarker(place) {
      const placeLoc = place.geometry.location;
      const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        animation: google.maps.Animation.DROP,
        icon: ''
      })
  };

//====== RETOURNE LES ITEMS AUTOUR DE LA LOCALISATION
  function callback(results, status) {
    console.log(results)
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        const place = results[i]
        createMarker(results[i])
      }
    }
  };

//====== RETOURNE UNE ERREURE SI NAVIGATEUR INCOMPATIBLE GEOLOCALISATION=====================================================//
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.')
}
