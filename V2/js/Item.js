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
  var titleInfo =  `
                  ${self.name}
                  note moyenne : ${self.rating}
                  `;
  var marker = new google.maps.Marker({
    map: myMap.map,
    position: placeLoc,
    title: titleInfo,
    animation: google.maps.Animation.DROP,
    icon: 'https://cdn3.iconfinder.com/data/icons/map/500/restaurant-32.png'
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

