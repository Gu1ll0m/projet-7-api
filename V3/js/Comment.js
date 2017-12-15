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

    var commentNode = document.body.querySelector('.commentClass').cloneNode(true);
    commentNode.removeAttribute("hidden");
    // pseudo
    commentNode.querySelector('.commentNameClass').style.display = "block";
    commentNode.querySelector('.commentNameClass').textContent = `Votre pseudo : ${self.name}`;
    // note
	x = Math.floor(self.rating);
	commentNode.querySelector('.commentRatingClass').textContent = "";
	commentNode.querySelector('.commentRatingClass').style.display = "block";
	commentNode.querySelector('.commentRatingClass').textContent = `${x}`;
	commentNode.querySelector('.commentRatingClass').style.display = "none";
	var starElm = document.createElement('img');
	starElm.id = "starElmID";
	if (x === 1) {starElm.src = "../img/1_star.png";}
	else if (x === 2) {starElm.src = "../img/2_stars.png";}
	else if (x === 3) {starElm.src = "../img/3_stars.png";}
	else if (x === 4) {starElm.src = "../img/4_stars.png";}
	else if (x === 5) {starElm.src = "../img/5_stars.png";}
	else {starElm.src = "../img/0_star.png";};
	var starElm = commentNode.insertBefore(starElm, commentNode.querySelector('.commentCommentClass'));
    // commentaire
    commentNode.querySelector('.commentCommentClass').style.display = "block";
    commentNode.querySelector('.commentCommentClass').textContent = `Votre commentaire : " ${self.comment} "`;

    self.itemNode.appendChild(commentNode);

}

          // <!-- Modal Comment-->
          // <div class="modal fade" id="myModal" tabindex="-1" data-width="760" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          //   <div class="modal-dialog">
          //     <div class="modal-content">
          //       <div class="modal-header">
          //         <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          //         <h4 class="modal-title" id="myModalLabel">Ajoutez votre commentaire</h4>
          //       </div>
          //       <div class="modal-body">
          //         <form class="modal-name" method="post" >
          //             <p>
          //               <label for="pseudo">Votre pseudo : </label>
          //               <input type="text" class="form-control" name="pseudo" id="pseudoId" placeholder="Votre pseudo"/>
          //             </p>
          //         </form>
          //         <form class="modal-comment">
          //             <p>
          //               <label for="pseudo">Votre commentaire : </label>
          //               <input type="text" class="form-control" name="commentaire" id="commentaireId" placeholder="Votre commentaire" size="74" row="3" maxlength="2000" />
          //             </p>
          //         </form>
          //         <form class="modal-rating">
          //             <p>
          //               <label for="pseudo">Votre note : </label>
          //               <input type="number" class="form-control" name="note" id="ratingId" min="0" max="5" size="50" maxlength="1" />
          //             </p>
          //         </form>
          //         <button id="buttonModalValidCommentId" class="btn btn-primary btn-lg">Validez</button>
          //       </div>
          //     </div><!-- /.modal-content -->
          //   </div><!-- /.modal-dialog -->
          // </div><!-- /.modal -->
