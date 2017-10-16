//============================================================================================================//
//======function qui initialise la map et la centre sur la position de l' utilisateur=========================//
//============================================================================================================//


function initMap () {

    // stock la map
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.8534100, lng: 2.3488000},
        zoom: 16
    });

    // stock infobulle
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
          console.log(pos);

          // stock le marker
          const marker = new google.maps.Marker({
              position: pos,
              map: map,
              animation: google.maps.Animation.DROP,
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

