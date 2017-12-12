//============================================================================================================================================================//
//====== COMMENT =============================================================================================================================================//
//============================================================================================================================================================//


//====== COMMENT ============================================================================================================================================//
//====== CONSTRUCTOR COMMENT ===================================================================================================================================//

function Comment (name, rating, comment, itemNode) {
	this.name = name;
	this.rating = rating;
	this.comment = comment;
	this.itemNode = itemNode;
}


//====== MODAL =========================================================================================================================================//
Comment.prototype.initHtml = function () {
	var self = this;

    var commentNode = document.body.querySelector('.comment').cloneNode(true);
    commentNode.removeAttribute("hidden");
    // pseudo
    commentNode.querySelector('.comment__name').style.display = "block";
    commentNode.querySelector('.comment__name').textContent = `Votre pseudo : ${self.name}`;
    // note
	x = Math.floor(self.rating);
	commentNode.querySelector('.comment__rating').textContent = "";
	commentNode.querySelector('.comment__rating').style.display = "block";
	commentNode.querySelector('.comment__rating').textContent = `${x}`;
	commentNode.querySelector('.comment__rating').style.display = "none";
	var starElm = document.createElement('img');
	starElm.id = "starElmID";
	if (x === 1) {starElm.src = "../img/1_star.png";}
	else if (x === 2) {starElm.src = "../img/2_stars.png";}
	else if (x === 3) {starElm.src = "../img/3_stars.png";}
	else if (x === 4) {starElm.src = "../img/4_stars.png";}
	else if (x === 5) {starElm.src = "../img/5_stars.png";}
	else {starElm.src = "../img/0_star.png";};
	var starElm = commentNode.insertBefore(starElm, commentNode.querySelector('.comment__comment'));
    // commentaire
    commentNode.querySelector('.comment__comment').style.display = "block";
    commentNode.querySelector('.comment__comment').textContent = `Votre commentaire : " ${self.comment} "`;

    self.itemNode.appendChild(commentNode);

}
