//============================================================================================================//
//====== APP =================================================================================================//
//============================================================================================================//


function App () {
    this.listItem = document.getElementById('sidebar');
    this.refreshButton = document.getElementById('refresh');
    this.filterButton = document.getElementById('filter');
    this.refresh();
    this.filter();
    this.mouseover();
}


//====== BOUTON RECHARGER LA PAGE ==========================================================================//
App.prototype.refresh = function () {
    var self = this;
    self.refreshButton.addEventListener('click', function () {
        window.location.reload();
    })
}

// nearbySearch


// ici le filter
// // eventlistener qui écoute le nombre d' étoile
// listItem.foreach
// si rating > étoile on affiche
// sinon classlist .addhide
// dans item méthode hideItem (enlève le node et le marker)


//====== BOUTON FILTRER LES NOTES ==========================================================================//
App.prototype.filter = function () {
    var self = this;
    self.filterButton.addEventListener('click', function () {
        console.log("OK filter");
        // TODO: cache les item en fonction de leur rating
    })
}


//====== SURVOL DE L' ITEM ================================================================================//
App.prototype.mouseover = function () {
    var self = this;
     self.listItem.addEventListener('mouseover', function( event ) {
    // met en surbrillance la cible de mouseover
    event.target.style.color = '#4532E6';
    // TODO: mettre en valeur le marker correspond à la target du mouseover
    // réinitialise la couleur après un court moment
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
}


//====== FERMETURE / ACTUALISATION ==========================================================================//
window.addEventListener("beforeunload", function (e) {
    var message = "";
    e.returnValue = message;
    return message;
});
