//============================================================================================================//
//====== ITEM ================================================================================================//
//============================================================================================================//


//====== RESTAURANT
function Item (location, name, vicinity, rating, photos, coments) {
    this.location = location;
    this.name = name;
    this.vicinity = vicinity;
    this.rating = rating;
    this.photos = photos;
    this.coments = coments;
    //console.log(`init item`, this.location, this.name, this.vicinity, this.rating)
}

//====== CREATION DES MARQUEURS
Item.prototype.createMarker = function () {

    var self = this;
    console.log(`self : `,self);
    const placeLoc = self.location;
    var marker = new google.maps.Marker({
      map,
      position: placeLoc,
      animation: google.maps.Animation.DROP,
      icon: '',
    })
    //console.log(`marker : `, marker)
}

//Item.prototype.initHtml()
