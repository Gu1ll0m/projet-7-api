//============================================================================================================//
//====== APP =================================================================================================//
//============================================================================================================//


function App () {
    this.listItem = document.getElementById('sidebar');
    this.refreshButton = document.getElementById('refresh');
    this.refresh();
}


App.prototype.refresh = function () {
    var self = this;
    self.refreshButton.addEventListener('click', function () {
        console.log("OK");
    })
}

// nearbySearch




// ici le filter
// eventlistener qui écoute le nombre d' étoile
// listItem.foreach
// si rating > étoile on affiche
// sinon classlist .addhide
//
// dans item méthode hideItem (enlève le node et le marker)
