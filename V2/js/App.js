//============================================================================================================//
//====== APP =================================================================================================//
//============================================================================================================//


function App () {
    this.listItem = document.getElementById('sidebar');
    this.refreshButton = document.getElementById('refresh');
    this.filterButton = document.getElementById('filter');
    this.refresh();
    this.filterListener();
    // this.mouseover();
}


//====== BOUTON RECHARGER LA PAGE ==========================================================================//
App.prototype.refresh = function () {
    var self = this;
    self.refreshButton.addEventListener('click', function () {
        window.location.reload();
    })
}


//====== BOUTON FILTRER LES NOTES ==========================================================================//
App.prototype.filterListener = function () {
    var self = this;
    self.filterButton.addEventListener('change', function (event) {
				// the value of the selected 'option'
				var selectedStars = event.target.selectedOptions[0].attributes[0].nodeValue;
				// call the filter with this value
        self.filter(selectedStars);
    })
}

//====== FILTRE LA LISTE DES ITEMS =============================================================//
App.prototype.filter = function(maxStars){
	console.log('nombre d\'étoiles minimum : ', maxStars);
	// TODO: finish filter function
}


// A SUPPRIMER -> PASSé DANS L'OBJET ITEM
//====== SURVOL DE L' ITEM ================================================================================//
// App.prototype.mouseover = function () {
//     var self = this;
//
// 		// self.listItem.forEach(function(elm){
// 		// 	console.log(elm);
// 		// });
// 		console.log(self.listItem);
//
//      self.listItem.addEventListener('mouseover', function( event ) {
// 			 console.log(event);
// 			 console.log(event.target.parentElement);
// 		    // met en surbrillance la cible de mouseover
// 		    event.target.style.color = '#4532E6';
// 		    // TODO: mettre en valeur le marker correspond à la target du mouseover
// 		    // réinitialise la couleur après un court moment
// 		    setTimeout(function() {
// 		      event.target.style.color = "";
// 		    }, 500);
// 		  }, false);
// }


//====== FERMETURE / ACTUALISATION ==========================================================================//
window.addEventListener("beforeunload", function (e) {
    var message = "";
    e.returnValue = message;
    return message;
});



// nearbySearch


// ici le filter
// // eventlistener qui écoute le nombre d' étoile
// listItem.foreach
// si rating > étoile on affiche
// sinon classlist .addhide
// dans item méthode hideItem (enlève le node et le marker)
