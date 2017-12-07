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

Item.prototype.validationComment = function () {

	this.itemNode = document.querySelector('.item').cloneNode(true);
  	var self = this;

  	self.itemNode.classList.remove('.item');
  	self.itemNode.removeAttribute('hidden');


	self.itemNode.getElementById('modal-valid').addEventListener('click', function(evt){
    	console.log("test");
    	self.name = document.getElementById("name").value;
    	self.itemNode.appendChild(name);
		self.comment = document.getElementById("commentaire").value;
		self.itemNode.appendChild(commentaire);
		self.rating = document.getElementById("note").value;
		self.itemNode.appendChild(rating);
    })

   Item.listItem.appendChild(self.itemNode); 

}


