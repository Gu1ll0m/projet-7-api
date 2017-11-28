//============================================================================================================================================================//
//====== APP =================================================================================================================================================//
//============================================================================================================================================================//


function App () {
    this.listItem = document.querySelector('#sidebar');
    this.itemNode = document.querySelector('.item');
    this.refreshButton = document.getElementById('refresh');
    this.filterButton = document.getElementById('filter');
    this.filterRating = document.querySelector('.item__rating');
    this.refresh();
    this.filterListener();
}


//====== BOUTON RECHARGER LA PAGE ============================================================================================================================//
App.prototype.refresh = function () {
    const self = this;
    self.refreshButton.addEventListener('click', function () {
        window.location.reload();
    })
}

//====== BOUTON FILTRER LES NOTES ============================================================================================================================//
App.prototype.filterListener = function () {
    const self = this;
    self.filterButton.addEventListener('change', function (event) {
		// the value of the selected 'option'
		const selectedStars = event.target.selectedOptions[0].attributes[0].nodeValue;
		// call the filter with this value
        self.filter(selectedStars);
    })
}

//====== FILTRE LA LISTE DES ITEMS ===========================================================================================================================//
App.prototype.filter = function(maxStars){
    console.log('nombre d\'étoiles minimum : ', maxStars);
  const self = this;
    //console.log(self.listItem.children.length);
    for(let i = 0; i < self.listItem.children.length; i++ ){
        const itemStars = self.listItem.children[i].querySelector('.item__rating').innerHTML;
        console.log (itemStars);
        if (itemStars < maxStars) {
            self.listItem.children[i].remove('sidebar');
            self.listItem.children[i].removeAttribute('.visible');
        } else {
            self.listItem.children[i].remove('sidebar');
        }
    }
}
// TODO : amélioration du filtre


//====== FERMETURE / ACTUALISATION ===========================================================================================================================//
window.addEventListener("beforeunload", function (e) {
    const message = "";
    e.returnValue = message;
    return message;
});


