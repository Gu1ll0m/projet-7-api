//============================================================================================================================================================//
//====== COMMENT =============================================================================================================================================//
//============================================================================================================================================================//


//====== COMMENT ============================================================================================================================================//
//====== CONSTRUCTOR COMMENT ===================================================================================================================================//

function Comment (name, rating, comment, itemNode) {
	this.name = name;
	this.comment = comment;
	this.rating = rating;
    this.itemNode = itemNode;
}


//====== MODAL =========================================================================================================================================//
Comment.prototype.initHtml = function () {
	var self = this;
    console.log( "init");

    var commentNode = document.body.querySelector('.comment').cloneNode();
    commentNode.removeAttribute("hidden");
    console.log(commentNode.querySelector('.comment__name'));
    console.log(self);
    commentNode.querySelector('.comment__name').textContent = self.name;
    self.itemNode.appendChild(commentNode);


	// var $modal = $('#myModal');
	// var modalComment = document.body.querySelector('#myModal');
	// var modalValid = document.getElementById('modal-valid');
	//self.itemNode = document.querySelector('.item');

	// //modalValid.addEventListener('click', function () {

	// 	var pseudo = modal.querySelector('#pseudoId').value;
	// 	var commentaire = modal.querySelector('#commentaireID').value;
	// 	var note = modal.querySelector('#ratingId').value;

 //        //pseudo
 //        self.itemNode.querySelector('.item__comment__author').textContent = "";
 //        self.itemNode.querySelector('.item__comment__author').textContent = ` ${pseudo}`;
 //        self.itemNode.appendChild(pseudo);
 //        // commentaire
 //        self.itemNode.querySelector('.item__comment').textContent = "";
 //        self.itemNode.querySelector('.item__comment').textContent = `" ${commentaire} " `;
 //        self.itemNode.appendChild(commentaire);
 //        // note
 //        x = Math.floor(self.rating);
 //        self.itemNode.querySelector('.item__rating').textContent = "";
	// 	self.itemNode.querySelector('.item__rating').textContent = `${x}`;
	// 	self.itemNode.querySelector('.item__rating').style.display = "none";
	// 	console.log(x);
	// 	var starElm = document.createElement('img');
	// 	starElm.id = "starElmID";

	// 	if (x === 1) {starElm.src = "../img/1_star.png";}
	// 	else if (x === 2) {starElm.src = "../img/2_stars.png";}
	// 	else if (x === 3) {starElm.src = "../img/3_stars.png";}
	// 	else if (x === 4) {starElm.src = "../img/4_stars.png";}
	// 	else if (x === 5) {starElm.src = "../img/5_stars.png";}
	// 	else {starElm.src = "../img/0_star.png";};

		// self.itemNode.appendChild(note);



		// $modal.modalComment('toggle');
	//})
}

