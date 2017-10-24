function initMap () {

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



//============================================================================================================//
//======== DEFAULT, AUTOCOMPLETE, GEOLOCALISATION ============================================================//
//============================================================================================================//

//======== MAP PAR DEFAULT ===================================================================================//
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 48.8534100,
      lng: 2.3488000
    },
    zoom: 16
  })

//=============================================================================================================//
//======= GEOLOCALISATION =====================================================================================//
//=============================================================================================================//

  // test la geolocation en HTML5.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      map.setCenter(pos)
      // console.log(pos);
      const marker = new google.maps.Marker({
        position: pos,
        map,
        animation: google.maps.Animation.BOUNCE
      })

    //====== Mise en évidence des items
      const item = {
        location: pos,
        radius: '500',
        types: ['restaurant']
      }
      // permet la mise en place des items
      const service = new google.maps.places.PlacesService(map)
      // console.log(item)
      service.nearbySearch(item, callback);
    }, function() {
        handleLocationError(true, infoWindow, map.getCenter())
      })
    } else {
      // le navigateur ne supporte pas la géolocation
      handleLocationError(false, infoWindow, map.getCenter())
    }

//============================================================================================================//
//======== AUTOCOMPLETE  =====================================================================================//
//============================================================================================================//

  const input = document.querySelector('#autocomplete')
  // autocomplete permet une recherche par lieu
  const autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener('place_changed', function () {
    console.log(autocomplete.getPlace())
    // trouve lat et lng
    const position = autocomplete.getPlace().geometry.location
    // créé un marqueur sur le lieu de la recherche
    const marker = new google.maps.Marker({
      position,
      map,
      animation: google.maps.Animation.BOUNCE
    })
    //====== Mise en évidence des items
    const item = {
      location: position,
      radius: '500',
      types: ['restaurant']
    };
    // permet la mise en place des items
    const service = new google.maps.places.PlacesService(map)
    console.log(item)
    service.nearbySearch(item, callback)

    // centre la map sur la position indiqué par l'utilisateur et fait un zoom adaptée
    map.setCenter(position)
    map.setZoom(16)
  })

}
