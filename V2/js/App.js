//============================================================================================================//
//====== APP =================================================================================================//
//============================================================================================================//


function App () {
    this.listItem = document.getElementById('sidebar');
    this.refreshButton = document.getElementById('refresh');
    this.filterButton = document.getElementById('filter');
    this.refresh();
    this.filterListener();
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
    var self = this;
    var rating = map.callback.results.rating;
    return rating.filter(function(el) {
        return el.toLowercase().indexOf(requete.toLowercase) > -1;
    })
    console.log(filter('4'));
}

//====== FERMETURE / ACTUALISATION ==========================================================================//
window.addEventListener("beforeunload", function (e) {
    var message = "";
    e.returnValue = message;
    return message;
});
