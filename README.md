# projet-7-api : [__Lancez votre propre site d'avis de restaurants__](https://openclassrooms.com/projects/lancez-votre-propre-site-d-avis-de-restaurants)

Création complète d'une application d' avis de restaurants 

Recap des  [__fichiers et fonctions__](recap_fonction_12012018.pdf) de notre appli

Utilisation des API Google : 
* [__Maps__](https://developers.google.com/maps/?hl=fr)
* [__StreetView__](https://developers.google.com/maps/documentation/streetview/?hl=fr)
* [__Places__](https://developers.google.com/places/)



## _Etape 1 : la carte des restaurants_

* Une carte Google Maps, chargée avec l'API [__Maps__](https://developers.google.com/maps/?hl=fr)
      
      myMap.prototype.initMap = function () {.....}
      
[__Map.js__](./js/Map.js)

* Une liste de restaurants correspondant à la zone affichée sur la carte Google Maps correspondant au fichier JSON fourni.

      myMap.prototype.getJson = function () {.....}
      
[__Map.js__](./js/Map.js)


* Géolocalisation de l' utilisateur via [__API JavaScript dédié__](https://developers.google.com/maps/documentation/javascript/geolocation?hl=fr)

      myMap.prototype.geolocation = function () {.....}
      
[__Map.js__](./js/Map.js) 


* Création d' un outil de filtrage des réponses

      App.prototype.filterListener = function () {....}
      
      App.prototype.filter = function () {....}
      
[__App.js__](./js/App.js) 



## _Etape 2 : ajoutez des restaurants et des avis !_

* Ajout d' avis sur un restaurant existant

      Item.prototype.initHtml = function () {....}
      
[__Item.js__](./js/Item.js) 

* Ajout de restaurant via click sur la map 

      myMap.prototype.addMarkerClick = function () {....}
      
[__Map.js__](./js/Map.js) 




## _Etape 3 : intégration avec l'API de Google Places_


* Ajout de restaurant via l' API [__Places__](https://developers.google.com/places/) dans la zone affiché

      Item.prototype.getDetails = function () {....}
      
[__Item.js__](./js/Item.js)



