//============================================================================================================================================================//
//====== APP =================================================================================================================================================//
//============================================================================================================================================================//

function App () {
    this.listItem = document.querySelector('#sidebarId');
    this.itemNode = document.querySelector('.item');
    this.refreshButton = document.getElementById('refreshId');
    this.filterButton = document.getElementById('filterId');
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
        // console.log(`selectedStars : `, selectedStars);
    })
}


//====== FILTRE LA LISTE DES ITEMS ===========================================================================================================================//
App.prototype.filter = function(maxStars){
    // console.log('nombre d\'étoiles : ', maxStars);
  var self = this;
    for(var i = 0; i < self.listItem.children.length; i++ ) {
        var itemStars = self.listItem.children[i].querySelector('.itemRatingClass');
        itemStars = itemStars.innerHTML;
        x = Math.round(itemStars);
        if (itemStars >= maxStars && itemStars <= maxStars + 1 || maxStars === 'noFilter') {
            // show item
            self.listItem.children[i].style.display = 'block';
        } else {
            // hidde item
            self.listItem.children[i].style.display = 'none';
        }
    }
}


//====== FERMETURE / ACTUALISATION ===========================================================================================================================//
window.addEventListener("beforeunload", function (e) {
    var message = "";
    e.returnValue = message;
    return message;
});
