//==========================================================================================================================================================//
//====== MAP ===============================================================================================================================================//
//==========================================================================================================================================================//

function myMap () {
    this.map = ""; // api google n'est pas encore chargé
  	this.PlaceService = "";
}


//====== INITMAP ===========================================================================================================================================//
// map de base centré sur Paris par défault
myMap.prototype.initMap = function () {
    this.map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 48.8534100,
            lng: 2.3488000
        },
        zoom: 16,
    });
    var pos = {
        lat: 48.8534100,
        lng: 2.3488000
    }
    var marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        title:"Here",
        animation: google.maps.Animation.DROP,
        icon: 'https://cdn3.iconfinder.com/data/icons/mapicons/icons/hospital.png'
    })
    this.getJson("../js/restaurants.json");
  	this.PlaceService = new google.maps.places.PlacesService(this.map);
    this.geolocation();
    this.autocomplete();
    this.addMarkerClick();
}

//====== AJAX REQUEST ===================================================================================================================================//
myMap.prototype.ajaxGet = function (url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

//====== JSON REQUEST ===================================================================================================================================//
myMap.prototype.getJson = function (url) {
    this.ajaxGet(url, function (results) {
        results = JSON.parse(results);
        console.log(results);
        results.forEach (function (result) {
        console.log(result);
                    var item = new Item(self.map,
                              PlaceService,
                              null,
                              result[i].geometry.location,
                              result[i].name,
                              result[i].adress,
                              result[i].ratings.forEach,
                              null,
                              );
        });
        var self = this;

    });
}

//====== GEOLOCALISATION ===================================================================================================================================//

myMap.prototype.geolocation = function () {
    var self = this;
      // test la geolocation en HTML5.
    if (navigator.geolocation) {
        var infoWindow = new google.maps.InfoWindow({
            content: name,
        });
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            self.map.setCenter(pos)
            var marker = new google.maps.Marker({
                position: pos,
                map: self.map,
                title:"Here",
                animation: google.maps.Animation.DROP,
                icon: 'https://cdn3.iconfinder.com/data/icons/mapicons/icons/hospital.png'
            })
            // nearbySearch
            var service = self.PlaceService;
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
    var self = this;
    var input = document.querySelector('#autocompleteId')
    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function () {
        var position = autocomplete.getPlace().geometry.location;
        var marker = new google.maps.Marker({
            position: position,
            map: self.map,
            title:"Here",
            animation: google.maps.Animation.DROP,
            icon: 'https://cdn3.iconfinder.com/data/icons/mapicons/icons/hospital.png'
        })
        var service = self.PlaceService;
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

myMap.prototype.callback = function(results, status) {
  	var self = this;
    console.log(`results : `, results);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
      			var PlaceService = new google.maps.places.PlacesService(document.body.appendChild(document.createElement('div')));
            var item = new Item(self.map,
      														PlaceService,
      														results[i].place_id,
                                  results[i].geometry.location,
                                  results[i].name,
                                  results[i].vicinity,
                                  results[i].rating,
                                  results[i].photos,
                                  );
            item.createMarker();
            item.initHtml();
        }
    }
};


// ====== ADD MARKER via click sur la map
myMap.prototype.addMarkerClick = function () {
    var self = this;

    //listener sur map
    google.maps.event.addListener(myMap.map, 'click', function (event) {
        var $modal = $('#myModal1');
        var modal = document.body.querySelector('#myModal1');
        $modal.modal('toggle');
        var title = modal.querySelector('#nameItem').value;
        var adress = modal.querySelector('#adressItem').value;
        var rating = modal.querySelector('#ratingItem').value;
        // reset modal
        $(".modal-body input").val("");

        if (title != undefined || adress != undefined) {
            var newRestau = new Item(self.map,
                                    self.PlaceService,
                                    null,
                                    event.latLng,
                                    title,
                                    adress,
                                    rating,
                                    null,
                                    );
            newRestau.createMarker()
            newRestau.initHtml();

        }
    })
    document.body.querySelector('#buttonModalAddCloseId').addEventListener('click', function (){
            console.log("close");
            var $modal = $('#myModal1');
            var modal = document.body.querySelector('#myModal1');
            $modal.modal('toggle');
        })
}


//====== RETOURNE UNE ERREURE SI NAVIGATEUR INCOMPATIBLE GEOLOCALISATION=====================================================================================//

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.')
};
