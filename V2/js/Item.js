//============================================================================================================//
//====== ITEM ================================================================================================//
//============================================================================================================//


//====== RESTAURANT =========================================================================================//
//====== CONSTRUCTOR ITEM ===================================================================================//

function Item (id, location, name, vicinity, rating, photos, comment) {
  this.id = id;
  this.location = location;
  this.name = name;
  this.vicinity = vicinity;
  this.rating = rating;
  this.photos = photos;
  this.comment = comment;
}

//====== CREATION DES MARQUEURS =============================================================================//
//====== FONCTION PROTOTYPALE ===============================================================================//

Item.prototype.createMarker = function () {
  var self = this;
  const placeLoc = self.location;
  var marker = new google.maps.Marker({
    map: myMap.map,
    position: placeLoc,
    animation: google.maps.Animation.DROP,
  })
}

//====== SIDEBAR ===========================================================================================//

Item.prototype.initHtml = function () {

  //console.log(App.listItem);

  this.itemNode = document.querySelector('.item').cloneNode(true);
  var self = this;
    //console.log(`nom : `, self.name, ` adresse : `, self.vicinity, `moyenne : `, self.rating);
  self.itemNode.classList.remove('.item');
  self.itemNode.removeAttribute('hidden');
  document.querySelector('.item__name').textContent = `${self.name}`;
  document.querySelector('.item__vicinity').textContent = `${self.vicinity}`;
  document.querySelector('.item__rating').textContent = `Note moyenne : ${self.rating}`;

  App.listItem.appendChild(self.itemNode);

}

