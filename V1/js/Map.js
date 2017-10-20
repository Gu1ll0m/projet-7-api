//============================================================================================================//
//====== Function qui initialise la map et la centre sur la position de l' utilisateur========================//
//============================================================================================================//


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

      google.maps.event.addListener(marker, 'click', function() {
        // console.log(infoWindow)
        const infoWindow = new google.maps.InfoWindow({
          map,
          content: `
            <h1>markeur item info à paramétrer</h1>
            <h2>${marker.position.name}</h2>
            <img>${marker.position.photos}</img>
            <p>${marker.position.vicinity}</p>
            <p>Lat: ${marker.position.lat()}</p>
            <p>Lng: ${marker.position.lng()}</p>
          `
        })
        // création fonction click sur le marqueur
        marker.addListener('click', function () {
          // this correspond à marker
          infoWindow.open(map, this)
          // console.log(marker)
          })
      })
  };

//====== RETOURNE LES ITEMS AUTOUR DE LA LOCALISATION
  function callback(results, status) {
    console.log(results)
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        const place = results[i];
        createMarker(results[i]);
      }
    }
  };

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
  });

//======== AUTOCOMPLETE  =====================================================================================//
  const input = document.querySelector('#autocomplete');
  // autocomplete permet une recherche par lieu
  const autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener('place_changed', function () {
    console.log(autocomplete.getPlace());
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
    const service = new google.maps.places.PlacesService(map);
    console.log(item)
    service.nearbySearch(item, callback);
    // infoBulle : objet avec paramètres map et contenu
    const infoWindow = new google.maps.InfoWindow({
      map,
      content: `
        <h1>Marker autocomplete contenu à paramétrer</h1>
        <p>Lat: ${marker.position.lat()}</p>
        <p>Lng: ${marker.position.lng()}</p>
        `
    })
    // création fonction click sur le marqueur
    marker.addListener('click', function () {
      // this correspond à marker
      infoWindow.open(map, this)
      // console.log(marker)
      })
    // centre la map sur la position indiqué par l'utilisateur et fait un zoom adaptée
    map.setCenter(position)
    map.setZoom(16)
  });

//======= GEOLOCALISATION =====================================================================================//


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
        map,
        animation: google.maps.Animation.BOUNCE
      })
      // permet de faire apparaitre des informations dans l' infobulle
      marker.addListener('click', function () {
          const infoWindow = new google.maps.InfoWindow({
            map,
            content: `
              <h1>Marker géolocation contenu à paramétrer</h1>
              <p>Lat: ${marker.position.lat()}</p>
              <p>Lng: ${marker.position.lng()}</p>
              `
          });
        infoWindow.open(map, this)
      })
    //====== Mise en évidence des items
      const item = {
        location: pos,
        radius: '500',
        types: ['restaurant']
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

};







