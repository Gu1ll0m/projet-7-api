//============================================================================================================================================================//
//====== ITEM ================================================================================================================================================//
//============================================================================================================================================================//


//====== RESTAURANT =========================================================================================================================================//
//====== CONSTRUCTOR ITEM ===================================================================================================================================//

function Item (id, location, name, vicinity, rating, photos, comments) {
  this.id = id;
  this.location = location;
  this.name = name;
  this.vicinity = vicinity;
  this.rating = rating;
  this.photos = photos;
  this.comments = comments;
  //console.log(this.id, this. name, this. rating, this.comments);
}

//====== CREATION DES MARQUEURS =============================================================================================================================//
//====== FONCTION PROTOTYPALE ===============================================================================================================================//

Item.prototype.createMarker = function () {
  const self = this;
  const placeLoc = self.location;
  const titleInfo =  `
    ${self.name}
    note moyenne : ${self.rating}
    id : ${self.id}
    photo : ${self.photos}
    `;
  const marker = new google.maps.Marker({
    map: myMap.map,
    position: placeLoc,
    title: titleInfo,
    animation: google.maps.Animation.DROP,
    icon: 'https://cdn3.iconfinder.com/data/icons/map/500/restaurant-32.png',
  })
}

//====== SIDEBAR ===========================================================================================================================================//

Item.prototype.initHtml = function () {

  this.itemNode = document.querySelector('.item').cloneNode(true);
  const self = this;
  self.itemNode.classList.remove('.item');
  self.itemNode.removeAttribute('hidden');
  self.itemNode.querySelector('.item__name').textContent = `${self.name}`;
  self.itemNode.querySelector('.item__vicinity').textContent = `${self.vicinity}`;
  self.itemNode.querySelector('.item__rating').textContent = `Note moyenne : ${self.rating}`;

	self.itemNode.querySelector('.item__name').addEventListener('click', function(evt){
		console.log(this);
		// TODO : display comments here or call a new function
    evt.target.style.color = '#4532E6';
    // TODO : faire match les photos
    self.itemNode.querySelector('.item__photos').textContent = `${self.photos}`;
    // TODO : faire match les commentaires
    self.itemNode.removeAttribute('hidden');
    self.itemNode.querySelector('.item__comments').textContent = `${self.comments}`;
    setTimeout(function() {
      evt.target.style.color = "";
      }, 500);
    }, false);

  App.listItem.appendChild(self.itemNode);
}
