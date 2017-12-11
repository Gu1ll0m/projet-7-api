//============================================================================================================================================================//
//====== COMMENT =============================================================================================================================================//
//============================================================================================================================================================//


//====== COMMENT ============================================================================================================================================//
//====== CONSTRUCTOR COMMENT ===================================================================================================================================//

function Comment (map, service, id, name, rating, comment) {
	this.map = map;
	this.service = service;
	this.name = name;
	this.comment = comment;
	this.rating = rating;
}


//====== MODAL =========================================================================================================================================//

// Item.prototype.validationComment = function () {

// 	this.itemNode = document.querySelector('.item').cloneNode(true);
//   	var self = this;

//   	self.itemNode.classList.remove('.item');
//   	self.itemNode.removeAttribute('hidden');


// 	self.itemNode.getElementById('modal-valid').addEventListener('click', function(evt){
//     	console.log("test");
//     	self.name = document.getElementById("name").value;
//     	self.itemNode.appendChild(name);
// 		self.comment = document.getElementById("commentaire").value;
// 		self.itemNode.appendChild(commentaire);
// 		self.rating = document.getElementById("note").value;
// 		self.itemNode.appendChild(rating);
//     })

//    Item.listItem.appendChild(self.itemNode); 

// }


//====== MODAL =========================================================================================================================================//
Comment.prototype.addComment = function () {
	var self = this;
	var $modal = $('#myModal');
	var modalComment = document.body.querySelector('#myModal');
	var modalValid = document.getElementById('modal-valid');
	self.itemNode = document.querySelector('.item');

	modalValid.addEventListener('click', function () {
		
		var pseudo = modal.querySelector('#pseudoId').value;
		var commentaire = modal.querySelector('#commentaireID').value;
		var note = modal.querySelector('#ratingId').value;

        //pseudo
        self.itemNode.querySelector('.item__comment__author').textContent = "";
        self.itemNode.querySelector('.item__comment__author').textContent = ` ${pseudo}`;
        self.itemNode.appendChild(pseudo);
        // commentaire
        self.itemNode.querySelector('.item__comment').textContent = "";
        self.itemNode.querySelector('.item__comment').textContent = `" ${commentaire} " `;
        self.itemNode.appendChild(commentaire);
        // note
        x = Math.floor(self.rating);
        self.itemNode.querySelector('.item__rating').textContent = "";
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

		self.itemNode.appendChild(note);
		
		

		$modal.modalComment('toggle');
	})
}

