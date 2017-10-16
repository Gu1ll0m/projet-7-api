//============================================================================================================//
//======function qui initialise la map et la centre sur la position de l' utilisateur=========================//
//============================================================================================================//

const input = document.querySelector('#autocomplete');
//console.log(input);


function initMap () {

    // stock autocomplete
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
      // centre la map sur la position indiqué par l'utilisateur et fait un zoom de 15
      map.setCenter(position)
      map.setZoom(15)
    })


    // stock la map
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.8534100, lng: 2.3488000},
        zoom: 16
    });

    // stock infobulle
    const infoWindow = new google.maps.InfoWindow({
        map: map,
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

          // stock le marker
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


// fonction qui retourne une erreur si navigateur incompatible
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}

