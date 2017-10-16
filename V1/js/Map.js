// function qui initialise la map et la centre sur Dijon


function initMap () {

// const map
  const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 48.8534100, lng: 2.3488000},
      zoom: 10
    })

// const marker
  const marker = new google.maps.Marker({
    position: pos,
    map: map
    })

// const infobulle
  const infoWindow = new google.maps.InfoWindow({
    map: map
    });

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
    });
      } else {
          // Browser doesn't support Geolocation
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

}
