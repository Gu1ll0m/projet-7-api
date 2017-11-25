//============================================================================================================================================================//
//====== ITEM ================================================================================================================================================//
//============================================================================================================================================================//


//====== RESTAURANT =========================================================================================================================================//
//====== CONSTRUCTOR ITEM ===================================================================================================================================//

function Item (map, service, id, location, name, vicinity, rating, photos, comments) {
	this.map = map;
	this.service = service;
  this.id = id;
  this.location = location;
  this.name = name;
  this.vicinity = vicinity;
  this.rating = rating;
	if(photos != undefined) {
		this.photos = photos[0].getUrl({'maxWidth': 200, 'maxHeight': 100});
	} else {
		this.photos = "";
	}
  this.comments = comments;
}


//====== CREATION DES MARQUEURS =============================================================================================================================//

Item.prototype.createMarker = function () {
  const self = this;
  const placeLoc = self.location;
  const titleInfo =  `
    ${self.name}
    note moyenne : ${self.rating}
    id : ${self.id}
    commentaires : ${self.comments}
    `;
  const marker = new google.maps.Marker({
    map: myMap.map,
    position: placeLoc,
    title: titleInfo,
    animation: google.maps.Animation.DROP,
    icon: 'https://cdn3.iconfinder.com/data/icons/mapicons/icons/restaurant.png',
  })
}

//====== SIDEBAR =========================================================================================================================================//

Item.prototype.initHtml = function () {

  this.itemNode = document.querySelector('.item').cloneNode(true);
  const self = this;
  self.itemNode.classList.remove('.item');
  self.itemNode.removeAttribute('hidden');
  self.itemNode.querySelector('.item__name').textContent = `${self.name}`;
  self.itemNode.querySelector('.item__vicinity').textContent = `${self.vicinity}`;
  self.itemNode.querySelector('.item__rating').textContent = `Note moyenne : ${self.rating}`;

	// image
	var imageElm = document.createElement('img');
	imageElm.src = self.photos;
	self.itemNode.appendChild(imageElm);

	// mouseover listener
	self.itemNode.querySelector('.item__name').addEventListener('mouseover', function(evt){
	  evt.target.style.color = '#af0101';
	  self.itemNode.removeAttribute('hidden');
	  self.itemNode.removeAttribute('hidden');
	  self.itemNode.querySelector('.item__comments').textContent = `commentaires : ${self.comments}`;
	  self.itemNode.querySelector('.item__addcomments').textContent = `ajouter un commentaire : `
	  setTimeout(function() {
	    evt.target.style.color = "";
	    self.itemNode.querySelector('.item__comments').textContent = '';
	    self.itemNode.querySelector('.item__addcomments').textContent = ``;
	    }, 5000);
	  }, false);

	// click listener
	self.itemNode.addEventListener('click', function(evt){
		// TODO : if already open -> close comments
		// else -> getDetails
		self.getDetails();
	});

  App.listItem.appendChild(self.itemNode);
}

//====== GET DETAILS ===========================================================================================================================================//

Item.prototype.getDetails = function() {
	var self = this;
	// details request on the place (to get comments )
	self.service.getDetails({"placeId": self.id}, detailsCallback);

	function detailsCallback(place, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			// log comments
			console.log(place.reviews);
			// Todo : add Comments in html
		}
	}
}


//====== ADD MARKER =============================================================================================================================================//

function createPhotoMarker(place) {
  var photos = place.photos;
  if (!photos) {
    return;
  }

  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    title: place.name,
    icon: photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35})
  });
}
