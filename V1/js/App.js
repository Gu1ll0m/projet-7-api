//============================================================================================================================================================//
//====== APP =================================================================================================================================================//
//============================================================================================================================================================//


function App () {
    this.listItem = document.querySelector('#sidebar');
    this.itemNode = document.querySelector('.item');
    this.refreshButton = document.getElementById('refresh');
    this.refresh();
}


//====== BOUTON RECHARGER LA PAGE ============================================================================================================================//
App.prototype.refresh = function () {
    var self = this;
    self.refreshButton.addEventListener('click', function () {
        window.location.reload();
    })
}

//====== FERMETURE / ACTUALISATION ===========================================================================================================================//
window.addEventListener("beforeunload", function (e) {
    var message = "";
    e.returnValue = message;
    return message;
});


