//============================================================================================================================================================//
//====== APP =================================================================================================================================================//
//============================================================================================================================================================//


function App () {
    this.listItem = document.querySelector('#sidebar');
    this.itemNode = document.querySelector('.item');
    this.refreshButton = document.getElementById('refresh');
    this.filterButton = document.getElementById('filter');
    this.refresh();
    this.filterListener();
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
    //console.log(self.listItem.children.length);
    for(let i = 0; i < self.listItem.children.length; i++ ){
        var itemStars = self.listItem.children[i].querySelector('.item__rating');
        console.log(typeof(self.listItem.children[i].querySelector('.item__rating')));
        console.log(itemStars);
        if (itemStars < maxStars && itemStars > maxStars + 0.99) {
            //self.listItem.children[i].classList.add('hidde')
            self.listItem.children[i].remove('sidebar');
            self.listItem.children[i].removeAttribute('.visible');
        } else {
            //self.listItem.children[i].classList.remove('hidde')
            self.listItem.children[i].remove('sidebar');
        }
    }
}

// TODO : amélioration du filtre

//====== FERMETURE / ACTUALISATION ===========================================================================================================================//
window.addEventListener("beforeunload", function (e) {
    var message = "";
    e.returnValue = message;
    return message;
});
