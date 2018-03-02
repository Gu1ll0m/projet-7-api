# projet-7-api : [__Lancez votre propre site d'avis de restaurants__](https://openclassrooms.com/projects/lancez-votre-propre-site-d-avis-de-restaurants)

Création complète d'une application d' avis de restaurants.

Recap des  [__fichiers et fonctions__](recap_function.png) de notre appli

Utilisation des API Google : 
* [__Maps__](https://developers.google.com/maps/?hl=fr)
* [__StreetView__](https://developers.google.com/maps/documentation/streetview/?hl=fr)
* [__Places__](https://developers.google.com/places/)



## _Etape 1 : la carte des restaurants_

1. Une carte Google Maps, chargée avec l'API [__Maps__](https://developers.google.com/maps/?hl=fr)
      
            myMap.prototype.initMap = function () {.....}
      
> [fichier __Map.js__](./js/Map.js)

2. Une liste de plusieurs restaurants correspondant à la zone affichée sur la carte Google Maps correspondant au fichier JSON fourni.

            myMap.prototype.getJson = function () {.....}
      
> [fichier __Map.js__](./js/Map.js)


3.  Géolocalisation de l' utilisateur via [__API JavaScript dédié__](https://developers.google.com/maps/documentation/javascript/geolocation?hl=fr)

            myMap.prototype.geolocation = function () {.....}
      
> [fichier __Map.js__](./js/Map.js) 


4. Création d' un outil de filtrage des réponses

            App.prototype.filterListener = function () {....}
      
            App.prototype.filter = function () {....}
      
> [fichier __App.js__](./js/App.js) 



## _Etape 2 : ajoutez des restaurants et des avis !_

1. Ajout d' avis sur un ou plusieurs restaurants existants

            Item.prototype.initHtml = function () {....}
      
> [fichier __Item.js__](./js/Item.js) 

2. Ajout de restaurant(s) via click sur la map 

            myMap.prototype.addMarkerClick = function () {....}
      
> [fichier __Map.js__](./js/Map.js) 




## _Etape 3 : intégration avec l'API de Google Places_


1. Ajout de restaurant(s) via l' API [__Places__](https://developers.google.com/places/) dans la zone affiché

            Item.prototype.getDetails = function () {....}
      
> [fichier __Item.js__](./js/Item.js)


##__AJOUT DE FONCTIONNALITEE :__

1. Ajout d'une fonction d' autocomplète

            myMap.prototype.autocomplete = function () {....}
            
> [fichier __Map.js__](./js/Map.js) 


## Installation de l' appli : 
Télécharger [le dossier](https://github.com/Gu1ll0m/projet-7-api)

Ouvrir le fichier __index.html__, que vous trouverez en suivant le chemin suivant `../P7/html/index.html`, dans votre navigateur `ctrl + o`
