//============================================================================================================//
//====== Function qui initialise la map et la centre sur la position de l' utilisateur========================//
//============================================================================================================//
const paris = {
  lat: 48.8534100,
  lng: 2.3488000
}

function initMap () {

  // //====== Autocomplete
  // const input = document.querySelector('#autocomplete');
  // // autocomplete permet une recherche par lieu
  // const autocomplete = new google.maps.places.Autocomplete(input);

  // autocomplete.addListener('place_changed', function () {
  //   console.log(autocomplete.getPlace());
  //   // trouve lat et lng
  //   const position = autocomplete.getPlace().geometry.location
  //   // créé un marqueur sur le lieu de la recherche
  //   const marker = new google.maps.Marker({
  //     position,
  //     map,
  //     animation: google.maps.Animation.DROP
  //   })
  //   const infoWindow = new google.maps.InfoWindow({
  //     map,
  //     content: `Marker autocomplete contenu à paramétrer`
  //   })
  //   marker.addListener('click', function () {
  //     // this correspond à marker
  //     infoWindow.open(map, this)
  //     // console.log(marker)
  //     })
  //   // centre la map sur la position indiqué par l'utilisateur et fait un zoom adaptée à une vue de rue
  //   map.setCenter(position)
  //   map.setZoom(16)
  // });

  //====== Map centré par défaut sur Paris avec un zoom initialisé à 16
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 48.8534100,
      lng: 2.3488000
    },
    zoom: 16
  });



  //====== Fonction creation des marqueur
  function createMarker(place) {
    const placeLoc = place.geometry.location;
    const marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    })

    google.maps.event.addListener(marker, 'click', function() {
      // console.log(infoWindow)
      const infoWindow = new google.maps.InfoWindow({
        map,
        content: `
          $infowindow.setContent(place.name.value)
          $infowindow.open(map, this)
        `
      })
    })
  };

  //====== Géolocalisation
  const infoWindow = new google.maps.InfoWindow({
    map: map,
    content: `Marker géolocation contenu à paramétrer`
  });

  // test la geolocation en HTML5.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(pos);
    // console.log(pos);
    const marker = new google.maps.Marker({
      position: pos,
      map: map,
      animation: google.maps.Animation.DROP
    })
    // permet de faire apparaitre des informations dans l' infobulle
    marker.addListener('click', function () {
      infoWindow.open(map, this)
    })
    //====== Mise en évidence des items
    const item = {
      location: pos, // problème avec location paris
      radius: '500',
      types: ['restaurant']
    };

    // fonction qui retourne et numérote les items autour de la localisation de l'utilisateur
    function callback(results, status) {
      console.log(results)
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          const place = results[i];
          createMarker(results[i]);
        }
      }
    };

    // permet la mise en place des items
    const service = new google.maps.places.PlacesService(map);
    // console.log(item)
    service.nearbySearch(item, callback);
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  });
  } else {
    // le navigateur ne supporte pas la géolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}



//====== Fonction qui retourne une erreur si navigateur incompatible
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}


