//============================================================================================================//
//====== APP =================================================================================================//
//============================================================================================================//


function App () {
    this.listItem = document.getElementById('sidebar');
    this.refreshButton = document.getElementById('refresh');
    this.filterButton = document.getElementById('filter');
    this.filterRating = document.querySelector('.item__rating').value;
    this.refresh();
    this.filterListener();
    this.filter();
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


    // mauvaise direction = au lieu de filtrer les éléments déjà affiché :
    // - effacer les markers + les items
    // - refaire une requete avec le filter
    // - afficher les nouveaux markers et items
}

//====== FERMETURE / ACTUALISATION ==========================================================================//
window.addEventListener("beforeunload", function (e) {
    var message = "";
    e.returnValue = message;
    return message;
});
