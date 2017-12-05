//============================================================================================================================================================//
//====== ITEM ================================================================================================================================================//
//============================================================================================================================================================//


//====== RESTAURANT =========================================================================================================================================//
//====== CONSTRUCTOR ITEM ===================================================================================================================================//

function Item (map, service, id, location, name, vicinity, rating, photos) {
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
}


//====== CREATION DES MARQUEURS =============================================================================================================================//

Item.prototype.createMarker = function () {
  var self = this;
  var placeLoc = self.location;
  var titleInfo =  `
      ${self.name}
      ${self.vicinity}
      ${self.rating}
    `;
  var marker = new google.maps.Marker({
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
  var self = this;

  self.itemNode.classList.remove('.item');
  self.itemNode.removeAttribute('hidden');

  // add name
  self.itemNode.querySelector('.item__name').textContent = `${self.name}`;
  // add adress
  self.itemNode.querySelector('.item__vicinity').textContent = `${self.vicinity}`;
  // add rating
  x = Math.floor(self.rating);
  self.itemNode.querySelector('.item__rating').textContent = `${x}`;
  self.itemNode.querySelector('.item__rating').style.display = "none";
  console.log(x);
  var starElm = document.createElement('img');
  starElm.id = "starElmID";
  
  if (x === 1) {starElm.src = "../img/1_star.png";} 
  else if (x === 2) {starElm.src = "../img/2_stars.png";} 
  else if (x === 3) {starElm.src = "../img/3_stars.png";} 
  else if (x === 4) {starElm.src = "../img/4_stars.png";} 
  else if (x === 5) {starElm.src = "../img/5_stars.png";} 
  else {starElm.src = "../img/0_star.png";};
  
  //self.itemNode.appendChild(starElm);
  var starElm = self.itemNode.insertBefore(starElm, self.itemNode.querySelector('.item__vicinity'));


  // click listener
	self.itemNode.querySelector('.item__name').addEventListener('click', function(evt){
	  evt.target.style.color = '#FC6354';
    self.itemNode.style.backgroundColor = '#F4F9FC';
    // API comments
    self.getDetails()
    //var commentsApi = self.itemNode.insertBefore(self.getDetails(), self.itemNode.querySelector('.item__rating'));
    // photo
    var imageElm = document.createElement('img');
    imageElm.src = self.photos;
    var imageElm = self.itemNode.insertBefore(imageElm, self.itemNode.querySelector('.item__rating'));
    // add close
    var closeElm = document.createElement('img');
    closeElm.src = "../img/close.png";
    closeElm.class = "closeElmClass"
    var closeElm = self.itemNode.insertBefore(closeElm, self.itemNode.querySelector('.item__vicinity'));

    // click close div
    closeElm.addEventListener('click', function(evt){
      self.itemNode.querySelector('.item__name').style.color = "#2D5BE3";
      self.itemNode.style.backgroundColor = '#FFFFFF';
      // comment
      self.itemNode.querySelector('.item__comment__info').textContent = "";
      self.itemNode.querySelector('.item__comment__author').textContent = "";
      self.itemNode.querySelector('.item__comment').textContent = "";
      self.itemNode.querySelector('.item__comment__time').textContent = "";
      imageElm.src = "";
      closeElm.src = "";
    })

  })

  App.listItem.appendChild(self.itemNode);

}


//====== GET DETAILS ==========================================================================================================================//

Item.prototype.getDetails = function() {
	var self = this;
	// details request on the place (to get comments )
	self.service.getDetails({"placeId": self.id}, detailsCallback);

	function detailsCallback(place, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			//console.log(place.reviews);
      self.itemNode.querySelector('.item__comment__info').textContent =`Commentaire écrit par : `
      self.itemNode.querySelector('.item__comment__author').textContent = ` ${place.reviews[0].author_name} `;
      self.itemNode.querySelector('.item__comment').textContent =  `" ${place.reviews[0].text} " `;
      self.itemNode.querySelector('.item__comment__time').textContent = `${place.reviews[0].relative_time_description}.`;
		}
	}
}

