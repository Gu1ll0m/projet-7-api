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
        //console.log(`selectedStars : `, selectedStars);
    })
}


//====== FILTRE LA LISTE DES ITEMS ===========================================================================================================================//
App.prototype.filter = function(maxStars){
    //console.log('nombre d\//============================================================================================================================================================//
2
//====== APP =================================================================================================================================================//
3
//============================================================================================================================================================//
4
​
5
​
6
function App () {
7
    this.listItem = document.querySelector('#sidebar');
8
    this.itemNode = document.querySelector('.item');
9
    this.refreshButton = document.getElementById('button-refresh');
10
    this.filterButton = document.getElementById('select-filter');
11
    this.refresh();
12
    this.filterListener();
13
}
14
​
15
​
16
//====== BOUTON RECHARGER LA PAGE ============================================================================================================================//
17
App.prototype.refresh = function () {
18
    var self = this;
19
    self.refreshButton.addEventListener('click', function () {
20
        window.location.reload();
21
    })
22
}
23
​
24
​
25
//====== BOUTON FILTRER LES NOTES ============================================================================================================================//
26
App.prototype.filterListener = function () {
27
    var self = this;
28
    self.filterButton.addEventListener('change', function (event) {
29
        // the value of the selected 'option'
30
        var selectedStars = event.target.selectedOptions[0].attributes[0].nodeValue;
31
        // call the filter with this value
32
        self.filter(selectedStars);
33
    })
34
}
35
​
36
​
37
//====== FILTRE LA LISTE DES ITEMS ===========================================================================================================================//
38
App.prototype.filter = function(maxStars){
39
    //console.log('nombre d\'étoiles : ', maxStars);
40
  var self = this;
41
    for(var i = 0; i < self.listItem.children.length; i++ ){
42
        var itemStars = self.listItem.children[i].querySelector('.item__rating');
43
        itemStars = itemStars.innerHTML;
44
        x = Math.floor(itemStars);
45
        console.log(x);
46
        if (itemStars >= maxStars && itemStars <= maxStars + 1 || maxStars === 'noFilter') {
47
            // show item
48
            self.listItem.children[i].style.display = 'block';
49
        } else {'étoiles : ', maxStars);
  var self = this;
    for(var i = 0; i < self.listItem.children.length; i++ ){
        var itemStars = self.listItem.children[i].querySelector('.item__rating');
        itemStars = itemStars.innerHTML;
        x = Math.floor(itemStars);
        console.log(x);
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
