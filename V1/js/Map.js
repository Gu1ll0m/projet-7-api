//============================================================================================================//
//====== Function qui initialise la map et la centre sur la position de l' utilisateur========================//
//============================================================================================================//
const paris = {
  lat: 48.8534100,
  lng: 2.3488000
}

function initMap () {


//====== Autocomplete
    const input = document.querySelector('#autocomplete');
    // autocomplete permet une recherche par lieu
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function () {
      //console.log(autocomplete.getPlace());
      // trouve lat et lng
      const position = autocomplete.getPlace().geometry.location
      // créé un marqueur sur le lieu de la recherche
      const marker = new google.maps.Marker({
        position,
        map,
        animation: google.maps.Animation.DROP
      })
      // centre la map sur la position indiqué par l'utilisateur et fait un zoom adaptée à une vue de rue
      map.setCenter(position)
      map.setZoom(16)
    })

//====== Map centré par défaut sur Paris avec un zoom initialisé à 16
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {
          lat: 48.8534100,
          lng: 2.3488000
        },
        zoom: 16
    });

//====== Mise en évidence des items
    const item = {
      location: paris,
      radius: '500',
      types: ['restaurant']
    };

    // permet la mise en place des items
    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch(item, callback);

    // fonction qui retourne et numérote les items autour de la localisation de l'utilisateur
    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          const place = results[i];
          createMarker(results[i]);
        }
      }

//====== Fonction creation des marqueur
function createMarker () {

}


//====== Infobulle
    const infoWindow = new google.maps.InfoWindow({
        map: map
      });
        // test la geolocation en HTML5.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
          };
          map.setCenter(pos);
          //console.log(pos);
          // marker qui correpond à la localisation de l' utilisateur
          const marker = new google.maps.Marker({
              position: pos,
              map: map,
              animation: google.maps.Animation.DROP
          });
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
};

