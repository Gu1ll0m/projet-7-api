/**
 * Elements nécessaires au fonctionnement de l' appli
 * @constructor
 */
function App () {
    this.listItem = document.querySelector('#sidebarId');
    this.itemNode = document.querySelector('.item');
    this.refreshButton = document.getElementById('refreshId');
    this.filterButton = document.getElementById('filterId');
    this.refresh();
    this.filterListener();
}




/**
 * Bouton pour rafraichir la page
 */
App.prototype.refresh = function () {
    var self = this;
    self.refreshButton.addEventListener('click', function () {
        window.location.reload();
    })
}




/**
 * Bouton pour filtrer les notes
 */
App.prototype.filterListener = function () {
    var self = this;
    self.filterButton.addEventListener('change', function (event) {
        /**
         * Correspond à la valeur de l' option sélectionné
         * @type {number}
         */
        var selectedStars = event.target.selectedOptions[0].attributes[0].nodeValue;
        //Appel le filtre avec cette valeur
        self.filter(selectedStars);
    })
}




/**
 * Filtre la liste des items
 * @param  {number} (maxStars) Le nombre d' étoile maximum que l'on autorise à notre filtre
 */
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




/**
 * Affiche un message d' alerte quand l' on ferme ou rafraichit la page
 * @param  {function} (e) Evenement fermer ou rafraichir
 * @return {string}    Message d' alerte
 */
window.addEventListener("beforeunload", function (e) {
    var message = "";
    e.returnValue = message;
    return message;
});
