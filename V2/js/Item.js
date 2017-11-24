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
    commentaires : ${self.comments}
    `;
  const marker = new google.maps.Marker({
    map: myMap.map,
    position: placeLoc,
    title: titleInfo,
    animation: google.maps.Animation.DROP,
    icon: 'http://cdn3.iconfinder.com/icons/38152/download/png/37',
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

	self.itemNode.querySelector('.item__name').addEventListener('mouseover', function(evt){
		// TODO : display comments here or call a new function
    evt.target.style.color = '#af0101';
    // TODO : faire match les photos
    self.itemNode.removeAttribute('hidden');
    // self.itemNode.querySelector('.item__photos').textContent = `photos : ${self.photos}`;
    // TODO : faire match les commentaires
    self.itemNode.removeAttribute('hidden');
    self.itemNode.querySelector('.item__comments').textContent = `commentaires : ${self.comments}`;
    // TODO : ajouter un commentaires
    self.itemNode.querySelector('.item__addcomments').textContent = `ajouter un commentaire : `
    setTimeout(function() {
      evt.target.style.color = "";
      // self.itemNode.querySelector('.item__photos').textContent = '';
      self.itemNode.querySelector('.item__comments').textContent = '';
      self.itemNode.querySelector('.item__addcomments').textContent = ``;
      }, 5000);
    }, false);

  App.listItem.appendChild(self.itemNode);
}




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
