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

    // document.querySelector('#buttonChargerJsonId').style.display = "none";
    // document.querySelector('#rId').style.display = "none";

    this.itemNode = document.querySelector('.item').cloneNode(true);
    var self = this;

    self.itemNode.classList.remove('.item');
    self.itemNode.removeAttribute('block');
    // add name
    self.itemNode.querySelector('.itemNameClass').textContent = `${self.name}`;
    // add adress
    self.itemNode.querySelector('.itemVicinityClass').textContent = `${self.vicinity}`;
    // add rating
    x = Math.round(self.rating);
    self.itemNode.querySelector('.itemRatingClass').textContent = `${x}`;
    self.itemNode.querySelector('.itemRatingClass').style.display = "none";
    var starElm = document.createElement('img');
    starElm.id = "starElmID";
    // png en fonction de la note
    if (x === 1) {starElm.src = "../img/1_star.png";}
    else if (x === 2) {starElm.src = "../img/2_stars.png";}
    else if (x === 3) {starElm.src = "../img/3_stars.png";}
    else if (x === 4) {starElm.src = "../img/4_stars.png";}
    else if (x === 5) {starElm.src = "../img/5_stars.png";}
    else {starElm.src = "../img/0_star.png";};
    // insertion PNG avant l' adress
    var starElm = self.itemNode.insertBefore(starElm, self.itemNode.querySelector('.itemVicinityClass'));

    // click listener
    self.itemNode.querySelector('.itemNameClass').addEventListener('click', function(evt){
        evt.target.style.color = "#FC6354";
        self.itemNode.style.backgroundColor = '#F4F9FC';
        // API comments
        self.getDetails()
        // photo
        var imageElm = document.createElement('img');
        imageElm.src = self.photos;
        var imageElm = self.itemNode.insertBefore(imageElm, self.itemNode.querySelector('.itemRatingClass'));
        // add close
        var closeElm = document.createElement('img');
        closeElm.src = "../img/close.png";
        var closeElm = self.itemNode.insertBefore(closeElm, self.itemNode.querySelector('.itemVicinityClass'));
        // add comment
        var commentNode = document.body.querySelector('.commentClass');
        commentNode.style.display= "block";

        // modal comment
        self.itemNode.querySelector('#buttonModalAddCommentId').style.display = "block";
        document.body.querySelector('#buttonModalValidCommentId').addEventListener('click', validation)
        function validation (event) {
            console.log("validation");
            var $modal = $('#myModal');
            var modal = document.body.querySelector('#myModal');
            var pseudo = modal.querySelector('#pseudoId').value;
            var commentaire = modal.querySelector('#commentaireId').value;
            var note = modal.querySelector('#ratingId').value;
            var comment = new Comment(pseudo, note, commentaire, self.itemNode);
            comment.initHtml();
            if (comment == true) {
                self.itemNode.querySelector('#buttonModalAddCommentId').style.display = "none";
            }
            self.itemNode.querySelector('#buttonModalAddCommentId').style.display = "none";
            $modal.modal('toggle');
            // reset modal
            $(".modal-body input").val("");
            document.body.querySelector('#buttonModalValidCommentId').removeEventListener('click', validation);
        }

        closeElm.addEventListener('click', function(evt){
            self.itemNode.querySelector('.itemNameClass').style.color = "#2D5BE3";
            self.itemNode.style.backgroundColor = '#FFFFFF';
            // comment
            self.itemNode.querySelector('.itemCommentInfoClass').textContent ="";
            self.itemNode.querySelector('.itemCommentAuthorClass').textContent = "";
            self.itemNode.querySelector('.itemCommentClass').textContent = "";
            self.itemNode.querySelector('.itemCommentTimeClass').textContent = "";

            // self.itemNode.querySelector('.itemCommentInfoClass1').textContent ="";
            // self.itemNode.querySelector('.itemCommentAuthorClass1').textContent = "";
            // self.itemNode.querySelector('.itemCommentClass1').textContent = "";
            // self.itemNode.querySelector('.itemCommentTimeClass1').textContent = "";

            // self.itemNode.querySelector('.itemCommentInfoClass2').textContent ="";
            // self.itemNode.querySelector('.itemCommentAuthorClass2').textContent = "";
            // self.itemNode.querySelector('.itemCommentClass2').textContent = "";
            // self.itemNode.querySelector('.itemCommentTimeClass2').textContent = "";

            // self.itemNode.querySelector('.itemCommentInfoClass3').textContent ="";
            // self.itemNode.querySelector('.itemCommentAuthorClass3').textContent = "";
            // self.itemNode.querySelector('.itemCommentClass3').textContent = "";
            // self.itemNode.querySelector('.itemCommentTimeClass3').textContent = "";

            // self.itemNode.querySelector('.itemCommentInfoClass4').textContent ="";
            // self.itemNode.querySelector('.itemCommentAuthorClass4').textContent = "";
            // self.itemNode.querySelector('.itemCommentClass4').textContent = "";
            // self.itemNode.querySelector('.itemCommentTimeClass4').textContent = "";

            imageElm.src = "";
            closeElm.src = "";
            self.itemNode.querySelector('#buttonModalAddCommentId').style.display = "none";
            var commentNode = document.body.querySelector('.commentClass');
            commentNode.style.display = "none";
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
            console.log(place.reviews);
            self.itemNode.querySelector('.itemCommentInfoClass').textContent =`Commentaire écrit par : `
            self.itemNode.querySelector('.itemCommentAuthorClass').textContent = ` ${place.reviews[0].author_name} `;
            self.itemNode.querySelector('.itemCommentClass').textContent =  `" ${place.reviews[0].text} " `;
            self.itemNode.querySelector('.itemCommentTimeClass').textContent = `${place.reviews[0].relative_time_description}.`;

            // self.itemNode.querySelector('.itemCommentInfoClass1').textContent =`Commentaire écrit par : `
            // self.itemNode.querySelector('.itemCommentAuthorClass1').textContent = ` ${place.reviews[1].author_name} `;
            // self.itemNode.querySelector('.itemCommentClass1').textContent =  `" ${place.reviews[1].text} " `;
            // self.itemNode.querySelector('.itemCommentTimeClass1').textContent = `${place.reviews[1].relative_time_description}.`;

            // self.itemNode.querySelector('.itemCommentInfoClass2').textContent =`Commentaire écrit par : `
            // self.itemNode.querySelector('.itemCommentAuthorClass2').textContent = ` ${place.reviews[2].author_name} `;
            // self.itemNode.querySelector('.itemCommentClass2').textContent =  `" ${place.reviews[2].text} " `;
            // self.itemNode.querySelector('.itemCommentTimeClass2').textContent = `${place.reviews[2].relative_time_description}.`;

            // self.itemNode.querySelector('.itemCommentInfoClass3').textContent =`Commentaire écrit par : `
            // self.itemNode.querySelector('.itemCommentAuthorClass3').textContent = ` ${place.reviews[3].author_name} `;
            // self.itemNode.querySelector('.itemCommentClass3').textContent =  `" ${place.reviews[3].text} " `;
            // self.itemNode.querySelector('.itemCommentTimeClass3').textContent = `${place.reviews[3].relative_time_description}.`;

            // self.itemNode.querySelector('.itemCommentInfoClass4').textContent =`Commentaire écrit par : `
            // self.itemNode.querySelector('.itemCommentAuthorClass4').textContent = ` ${place.reviews[4].author_name} `;
            // self.itemNode.querySelector('.itemCommentClass4').textContent =  `" ${place.reviews[4].text} " `;
            // self.itemNode.querySelector('.itemCommentTimeClass4').textContent = `${place.reviews[4].relative_time_description}.`;
        }
    }
}

