//============================================================================================================================================================//
//====== COMMENT =============================================================================================================================================//
//============================================================================================================================================================//


//====== COMMENT ============================================================================================================================================//
//====== CONSTRUCTOR COMMENT ================================================================================================================================//
function Comment (name, rating, comment, itemNode) {
	this.name = name;
	this.rating = rating;
	this.comment = comment;
	this.itemNode = itemNode;
}


//====== MODAL =========================================================================================================================================//
Comment.prototype.initHtml = function () {
	var self = this;
		console.log("commentaire Json");
	    var commentNode = document.body.querySelector('.commentClass').cloneNode(true);
	    commentNode.removeAttribute("hidden");
	    // pseudo
	    commentNode.querySelector('.commentNameClass').style.display = "block";
	    commentNode.querySelector('.commentNameClass').textContent = `Votre pseudo : ${self.name}`;
	    // note
		x = Math.floor(self.rating);
		var starElm = document.createElement('img');
	    //var starElm = document.querySelector('img');
	    starElm.id = "starElmID";
		if (x === 1) {starElm.src = "../img/1_star.png";}
		else if (x === 2) {starElm.src = "../img/2_stars.png";}
		else if (x === 3) {starElm.src = "../img/3_stars.png";}
		else if (x === 4) {starElm.src = "../img/4_stars.png";}
		else if (x === 5) {starElm.src = "../img/5_stars.png";}
		else {starElm.src = "../img/0_star.png";};
		var starElm = commentNode.insertBefore(starElm, commentNode.querySelector('.commentCommentClass'));
		// modal comment
    	self.itemNode.querySelector('#buttonModalAddCommentId').display = "none";
	    // commentaire
	    commentNode.querySelector('.commentCommentClass').style.display = "block";
	    commentNode.querySelector('.commentCommentClass').textContent = `Votre commentaire : " ${self.comment} "`;
	    // appendchild
	    self.itemNode.appendChild(commentNode);
}
