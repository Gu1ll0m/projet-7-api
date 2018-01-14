//============================================================================================================================================================//
//====== ITEM ================================================================================================================================================//
//============================================================================================================================================================//


//====== RESTAURANT =========================================================================================================================================//
//====== CONSTRUCTOR ITEM ===================================================================================================================================//
function Item (map, service, id, location, name, vicinity, rating, photos, commentsJson) {
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
    if (commentsJson != undefined) {
        this.commentsJson = commentsJson;
    }
}


//====== CREATION DES MARQUEURS =============================================================================================================================//
Item.prototype.createMarker = function () {
    var self = this;
    var placeLoc = self.location;
    var titleInfo =  `
        ${self.name}
        ${self.vicinity}
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
    var a = 0;
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
    var starElm = self.itemNode.querySelector('.itemRatingImg');
    // png en fonction de la note
    if (x === 1) {starElm.src = "../img/1_star.png";}
    else if (x === 2) {starElm.src = "../img/2_stars.png";}
    else if (x === 3) {starElm.src = "../img/3_stars.png";}
    else if (x === 4) {starElm.src = "../img/4_stars.png";}
    else if (x === 5) {starElm.src = "../img/5_stars.png";}
    else {starElm.src = "../img/0_star.png";};
    // console.log(`moyenne du restaurant : `, x);
    // insertion PNG avant l' adress
    var starElm = self.itemNode.insertBefore(starElm, self.itemNode.querySelector('.itemVicinityClass'));
    // photo
    var imageElm = document.createElement('img');
    imageElm.src = self.photos;
    imageElm.style.display = "none";
    var imageElm = self.itemNode.insertBefore(imageElm, self.itemNode.querySelector('.itemRatingClass'));
    // add close
    var closeElm = document.createElement('img');
    closeElm.className = "close";
    closeElm.src = "../img/close.png";
    closeElm.style.display = "none";
    var closeElm = self.itemNode.insertBefore(closeElm, self.itemNode.querySelector('.itemVicinityClass'));
    // API comments
    self.itemNode.style.height = "90px";
    self.itemNode.style.overflow = "hidden";
    // modal comment
    self.itemNode.querySelector('#buttonModalAddCommentId').style.display = "none";

    // click listener
    self.itemNode.querySelector('.itemNameClass').addEventListener('click', function(evt){
        evt.target.style.color = "#FC6354";
        self.itemNode.style.backgroundColor = "#EFEEE4";
        self.itemNode.style.height = "500px";
        self.itemNode.style.overflow = "auto";
        // photo
        imageElm.style.display = "block";
        // add close
        closeElm.style.display = "block";
        // API comments
        if(a == 0) {
            self.getDetails();
            a = 1;
            // console.log(a);
        } if (a== 1 ) {
            console.log('pas de nouvel request');
        };
        // add comment
        var commentNode = document.body.querySelector('.commentClass');
        commentNode.style.display= "block";
        // modal comment
        var modalElm = self.itemNode.querySelector('#buttonModalAddCommentId');
        modalElm.style.display = "block";
        document.body.querySelector('#buttonModalValidCommentId').addEventListener('click', validation)
        var modalElm = self.itemNode.insertBefore(modalElm, self.itemNode.querySelector('.itemCommentClassNode'));

        function validation (evt) {
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
            setTimeout(function() {
                self.itemNode.querySelector('.itemNameClass').style.color = "#2D5BE3";
                self.itemNode.style.backgroundColor = '#FFFFFF';
                self.itemNode.querySelector('#buttonModalAddCommentId').style.display = "none";
            },2000);
            // comment
            self.itemNode.style.height = "90px";
            self.itemNode.style.overflow = "hidden";
            closeElm.style.display = "none";
            var commentNode = document.body.querySelector('.commentClass');
            commentNode.style.display = "none";
        })
    })
    App.listItem.appendChild(self.itemNode);
}


//====== GET DETAILS ==========================================================================================================================//

Item.prototype.getDetails = function() {
    var self = this;

    if (self.commentsJson) {
        // console.log(self.commentsJson);
        self.commentsJson.forEach(function(comment){
            // console.log(comment);
            var commentObject = new Comment("Anonyme", comment.stars, comment.comment, self.itemNode);
            commentObject.initHtml();
        });
    } else {
            // details request on the place (to get comments )
        self.service.getDetails({"placeId": self.id}, detailsCallback);

        function detailsCallback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                // console.log(`commentaires : `,place.reviews);
                for(var i = 0; i < place.reviews.length; i++ ) {
                    //var commentApi = new Comment(self.name, self.rating, self.vicinity, self.itemNode);
                    //console.log(commentApi);
                    //commentApi.initHtml();

                    // console.log("commentaire API");
                    self.commentNode = document.querySelector('.itemCommentClassNode').cloneNode(true);
                    self.commentNode.style.display = "block";

                    self.commentNode.querySelector('.itemCommentInfoClass').textContent =`Commentaire écrit par : `
                    self.commentNode.querySelector('.itemCommentAuthorClass').textContent = ` ${place.reviews[i].author_name} `;
                    self.commentNode.querySelector('.itemCommentClass').textContent =  `" ${place.reviews[i].text} " `;
                    self.commentNode.querySelector('.itemCommentClass').style.textAlign = "justify-all";
                    self.commentNode.querySelector('.itemCommentTimeClass').textContent = `${place.reviews[i].relative_time_description}.`;
                    // add rating
                    x = Math.round(place.reviews[i].rating);
                    self.commentNode.querySelector('.itemCommentRatingClass').textContent = `${x}`;
                    self.commentNode.querySelector('.itemCommentRatingClass').style.display = "none";
                    var starElm = self.commentNode.querySelector('.itemCommentImg');
                    // png en fonction de la note
                    if (x === 1) {starElm.src = "../img/1_star.png";}
                    else if (x === 2) {starElm.src = "../img/2_stars.png";}
                    else if (x === 3) {starElm.src = "../img/3_stars.png";}
                    else if (x === 4) {starElm.src = "../img/4_stars.png";}
                    else if (x === 5) {starElm.src = "../img/5_stars.png";}
                    else {starElm.src = "../img/0_star.png";};
                    // insertion PNG avant l' adress
                    var starElm = self.commentNode.insertBefore(starElm, self.commentNode.querySelector('.itemCommentClass'));
                    // appendchild
                    self.itemNode.appendChild(self.commentNode);
                }
            } else {
                console.log('request status :' ,status);
            }
        }
    }

}

