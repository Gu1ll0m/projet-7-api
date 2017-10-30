//============================================================================================================//
//====== MAP =================================================================================================//
//============================================================================================================//

function initMap () {

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

    //====== Mise en évidence des items
      this.item = new Item(); // function Item() item.js
      this.item.initItem(pos, '1500', ['restaurant'], 'from geolocation'); // initialise l' item à partir du constructor Item
      console.log(`this :`, this)
      // permet la mise en place des items
      const service = new google.maps.places.PlacesService(map)
      console.log(`item géolocation : `, item)
      service.nearbySearch(item, callback);
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
    console.log(`autocomplete.getPlace`, autocomplete.getPlace())
    const position = autocomplete.getPlace().geometry.location
    console.log(position)
    // créé un marqueur sur le lieu de la recherche
    const marker = new google.maps.Marker({
      position,
      map,
      animation: google.maps.Animation.BOUNCE
    })
    //====== Mise en évidence des items
    this.item = new Item();
    this.item.initItem(position, '500', ['restaurant'], 'from autocomplete');

    // permet la mise en place des items
    const service = new google.maps.places.PlacesService(map)
    console.log(`item autocomplete : `,item)
    item !=this.item
    service.nearbySearch(this.item, callback)

    // centre la map sur la position indiqué par l'utilisateur et fait un zoom adaptée
    map.setCenter(position)
    map.setZoom(16)
  })


//============================================================================================================//
//======== FONCTIONS GLOBALES  ===============================================================================//
//============================================================================================================//


//====== CREATION DES MARQUEURS
  function createMarker(place) {
    const placeLoc = place.geometry.location;
    const marker = new google.maps.Marker({
      map,
      position: place.geometry.location,
      animation: google.maps.Animation.DROP,
      icon: '',
    })
    //console.log(`marker : `, marker)
    // permet de faire apparaitre des informations dans l' infobulle
    marker.addListener('click', function () {
      const infoWindow = new google.maps.InfoWindow({
        map,
        content: `
          <p>Lat : ${marker.position.lat()}</p>
          <p>Lng : ${marker.position.lng()}</p>
          <p>Nom : ${marker.position.name}</p>
          <p>Adresse : ${marker.position.adress}</p>
          <p>Photo : ${marker.position.photo}</p>
          <p>Moyenne : ${marker.position.rating}</p>

          `
          // ${this.results.name},
          // ${this.results.adress},
          // ${this.results.photo},
          // ${this.results.rating}
      });
      infoWindow.open(map, this)
    })
  };


//====== AJOUTER DES MARKERS
  function addMarker(position, map) {
    const marker = new google.maps.Marker({
      position,
      map,
      draggable: true
    })
  }
  map.addListener('click', function(event){
    addMarker(event.latLng, map)
  })


//====== RETOURNE LES ITEMS AUTOUR DE LA LOCALISATION
  function callback(results, status) {
    console.log(`results : `, results)
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        const place = results[i]
        createMarker(results[i])
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

// dans nearbySearch passer contour de la fenêtre à la place d' item
// utiliser un bouton pour supprimer et recharger les nouveaux items via getcenter ?

// sidebar => google pogressif web app
// this.itemNode = document.querySelector('.item--template').cloneNode(true);
// var self = this;
//
// self.itemNode.classList.remove('item--template');
// self.itemNode.removeAttribute('hidden');
// self.itemNode.querySelector('.item__name').textContent = self.name;
// self.itemNode.querySelector('.item__adress').textContent = self.address;
// self.itemNode.querySelector('.item__stars').textContent = self.rating;
//
// filtre
