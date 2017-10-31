//============================================================================================================//
//====== MAP =================================================================================================//
//============================================================================================================//


function initMap () {


//============================================================================================================//
//======== DEFAULT, AUTOCOMPLETE, GEOLOCALISATION ============================================================//
//============================================================================================================//


//======== MAP PAR DEFAULT ===================================================================================//
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 48.8534100,
      lng: 2.3488000
    },
    zoom: 16
  })


//======= GEOLOCALISATION =====================================================================================//

  // test la geolocation en HTML5.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      map.setCenter(pos)
      const marker = new google.maps.Marker({
        position: pos,
        map,
        animation: google.maps.Animation.BOUNCE,
      })
      const service = new google.maps.places.PlacesService(map)
      //console.log(`item géolocation : `, item)
      service.nearbySearch({
        location :pos,
        radius : 500,
        type : ['restaurant']
      }, callback);
    }, function() {
        handleLocationError(true, infoWindow, map.getCenter())
      })
    } else {
      // le navigateur ne supporte pas la géolocation
      handleLocationError(false, infoWindow, map.getCenter())
    }


//======== AUTOCOMPLETE  =====================================================================================//

  const input = document.querySelector('#autocomplete')
  // autocomplete permet une recherche par lieu
  const autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener('place_changed', function () {
    //console.log(`autocomplete.getPlace`, autocomplete.getPlace())
    const position = autocomplete.getPlace().geometry.location;
    //console.log(position)
    const marker = new google.maps.Marker({
      position,
      map,
      animation: google.maps.Animation.BOUNCE
    })
    const service = new google.maps.places.PlacesService(map)
    //console.log(`item autocomplete : `,item)
    service.nearbySearch({      
      location :position,
      radius : 500,
      type : ['restaurant']
      }, callback)

    // centre la map sur la position indiqué par l'utilisateur et fait un zoom adaptée
    map.setCenter(position)
    map.setZoom(16)
  })


//============================================================================================================//
//======== FONCTIONS GLOBALES  ===============================================================================//
//============================================================================================================//


//====== RETOURNE LES ITEMS AUTOUR DE LA LOCALISATION
  function callback(results, status) {
    console.log(`results : `, results)
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        const place = results[i]
        // createMarker(results[i])
        const item = new Item(results[i].geometry.location, results[i].name, results[i].vicinity, results[i].rating, results[i].photos, results[i].comments);
        item.createMarker();
      }
    }
  };


//====== RETOURNE UNE ERREURE SI NAVIGATEUR INCOMPATIBLE GEOLOCALISATION=======================================//
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.')
  }

}


