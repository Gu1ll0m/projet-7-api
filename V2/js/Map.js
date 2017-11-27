//==========================================================================================================================================================//
//====== MAP ===============================================================================================================================================//
//==========================================================================================================================================================//

function myMap () {
  this.map = ""; // api google n'est pas encore chargé
	this.PlaceService = "";
}


//====== INITMAP ===========================================================================================================================================//
// map de base cntré sur Paris par défault
myMap.prototype.initMap = function () {
  this.map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 48.8534100,
      lng: 2.3488000
    },
    zoom: 16,
  });
	this.PlaceService = new google.maps.places.PlacesService(this.map);
  this.geolocation();
  this.autocomplete();
}


//====== GEOLOCALISATION ===================================================================================================================================//

myMap.prototype.geolocation = function () {
  const self = this;
    // test la geolocation en HTML5.
  if (navigator.geolocation) {
    const infoWindow = new google.maps.InfoWindow({
      content: name,
    });
    navigator.geolocation.getCurrentPosition(function(position) {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      self.map.setCenter(pos)
      
      const marker = new google.maps.Marker({
        position: pos,
        map: self.map,
        title:"Here",
        animation: google.maps.Animation.BOUNCE,
        icon: 'https://cdn3.iconfinder.com/data/icons/mapicons/icons/hospital.png'
      })
      // nearbySearch 
      const service = self.PlaceService;
      service.nearbySearch({
        location:pos,
        radius: 500,
        type: ['restaurant']
      }, self.callback);
    }, function() {
        handleLocationError(true, infoWindow, self.map.getCenter())
      })
    } else {
      // le navigateur ne supporte pas la géolocation
      handleLocationError(false, infoWindow, self.map.getCenter())
    }

}


//====== AUTOCOMPLETE ======================================================================================================================================//

myMap.prototype.autocomplete = function () {
  const self = this;
  const input = document.querySelector('#autocomplete')
  const autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener('place_changed', function () {
    const position = autocomplete.getPlace().geometry.location;
    const marker = new google.maps.Marker({
      position: position,
      map: self.map,
      title:"Here",
      animation: google.maps.Animation.BOUNCE,
      icon: 'https://cdn3.iconfinder.com/data/icons/mapicons/icons/hospital.png'
    })
    const service = self.PlaceService;
    service.nearbySearch({
      location :position,
      radius : 500,
      type : ['restaurant']
		}, self.callback)

    self.map.setCenter(position);
    self.map.setZoom(16);
  })
};


//==========================================================================================================================================================//
//======== FONCTIONS GLOBALES  =============================================================================================================================//
//==========================================================================================================================================================//


//====== RETOURNE LES ITEMS AUTOUR DE LA LOCALISATION

myMap.prototype.callback = function(results, status, PlaceSearchPagination) {
	var self = this;
  console.log(`results : `, results);
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
			var PlaceService = new google.maps.places.PlacesService(document.body.appendChild(document.createElement('div')));
      const item = new Item(self.map,
														PlaceService,
														results[i].place_id,
                            results[i].geometry.location,
                            results[i].name,
                            results[i].vicinity,
                            results[i].rating,
                            results[i].photos,
                            results[i].comments,
                            );

      item.createMarker();
      item.initHtml();

    }
  }
};


//====== RETOURNE UNE ERREURE SI NAVIGATEUR INCOMPATIBLE GEOLOCALISATION=====================================================================================//

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.')
};
