//============================================================================================================================================================//
//====== ITEM ================================================================================================================================================//
//============================================================================================================================================================//


//====== RESTAURANT =========================================================================================================================================//
//====== CONSTRUCTOR ITEM ===================================================================================================================================//

function Item (map, service, id, location, name, vicinity, rating, photos, link) {
	this.map = map;
	this.service = service;
  this.id = id;
  this.location = location;
  this.name = name;
  this.vicinity = vicinity;
  this.rating = rating;
	if(photos != undefined) {
		this.photos = photos[0].getUrl({'maxWidth': 200, 'maxHeight': 200});
	} else {
		this.photos = "http://racine.cccommunication.biz/v1/img/photo/photos_defaut/pas0BRnew.png";
	}
  this.link = "";
}


//====== CREATION DES MARQUEURS =============================================================================================================================//

Item.prototype.createMarker = function () {
  const self = this;
  const placeLoc = self.location;
  const titleInfo =  `
      ${self.name}
      ${self.vicinity}
      ${self.rating}
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
  self.itemNode.querySelector('.item__rating').textContent = `${self.rating}`;
  self.itemNode.querySelector('.item__rating').style.fontSize = '1.6em';
  self.itemNode.querySelector('.item__rating').style.backgroundColor = '#FC6354';
  self.itemNode.querySelector('.item__rating').style.maxWidth = '8%';
  self.itemNode.querySelector('.item__rating').style.textAlign = 'center';
  self.itemNode.querySelector('.item__rating').style.borderRadius = '50px';
  self.itemNode.querySelector('.item__rating').style.color = '#FFFFFF';

	// click listener
	self.itemNode.querySelector('.item__name').addEventListener('click', function(evt){
	  evt.target.style.color = '#FC6354';
    // photo
    var imageElm = document.createElement('img');
    imageElm.src = self.photos;
    self.itemNode.appendChild(imageElm);

	  self.itemNode.removeAttribute('hidden');
    self.itemNode.querySelector('.item__addComment').style.display = 'inline';

    // commentaires
    self.getDetails();

    // temps d' arrêt de l' event click
	  setTimeout(function() {
	    evt.target.style.color = "";
	    self.itemNode.querySelector('.item__comment').textContent = '';
      imageElm.src = '';
      self.itemNode.querySelector('.item__addComment').style.display = 'none';
	    }, 15000);
	  }, false);

  App.listItem.appendChild(self.itemNode);
}

//====== GET DETAILS ===========================================================================================================================================//

Item.prototype.getDetails = function() {
	var self = this;
	// details request on the place (to get comments )
	self.service.getDetails({"placeId": self.id}, detailsCallback);

	function detailsCallback(place, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			//console.log(place.reviews);
      self.itemNode.querySelector('.item__comment').textContent = `Commentaire écrit par ${place.reviews[0].author_name}, ${place.reviews[0].relative_time_description} : " ${place.reviews[0].text} " `;
		}
	}
}



