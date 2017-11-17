//============================================================================================================================================================//
//====== APP =================================================================================================================================================//
//============================================================================================================================================================//


function App () {
    this.listItem = document.querySelector('.sidebar');
    this.itemNode = document.querySelector('.item');
    this.refreshButton = document.getElementById('refresh');
    this.filterButton = document.getElementById('filter');
    this.validateButton = document.getElementById('ok');
    this.filterRating = document.querySelector('.item__rating');
    this.refresh();
    this.filterListener();
    this.filter();
    this.validate();
}


//====== BOUTON RECHARGER LA PAGE ============================================================================================================================//
App.prototype.refresh = function () {
    var self = this;
    self.refreshButton.addEventListener('click', function () {
        window.location.reload();
    })
}

//====== BOUTON FILTRER LES NOTES ============================================================================================================================//
App.prototype.filterListener = function () {
    var self = this;
    self.filterButton.addEventListener('change', function (event) {
		// the value of the selected 'option'
		var selectedStars = event.target.selectedOptions[0].attributes[0].nodeValue;
		// call the filter with this value
        self.filter(selectedStars);
    })
}

//====== FILTRE LA LISTE DES ITEMS ===========================================================================================================================//
App.prototype.filter = function(maxStars){
	console.log('nombre d\'étoiles minimum : ', maxStars);
    var self = this;
	// TODO: finish filter function
    console.log(self.filterRating);
    console.log(self.filterListener);
    // if (self.filterRating.value == self.filterListener) {
    //     self.itemNode.classList.remove('.item');
    //     self.itemNode.removeAttribute('visible');
    // } else {
    //     self.itemNode.classList.remove('.item');
    //     self.itemNode.removeAttribute('hidden');
    // }

}

//====== BOUTON VALIDER ======================================================================================================================================//
App.prototype.validate = function () {
    var self = this;
    self.validateButton.addEventListener('click', function () {
        self.itemNode = document.querySelector('.item');
        self.itemNode.className = 'hidde';
        self.itemNode.filterRating == self.filterListener();
        self.itemNode.className = 'show';
        console.log(self.itemNode);

    })
}

//====== FERMETURE / ACTUALISATION ===========================================================================================================================//
window.addEventListener("beforeunload", function (e) {
    var message = "";
    e.returnValue = message;
    return message;
});



