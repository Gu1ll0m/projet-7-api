1. Afficher les restaurants visibles sur la carte sous forme de **liste sur le côté gauche**.
Chaques restaurants doit avoir un numéro (1/2/3/4/...) correspondant à ça position sur la sidebar. 
Affichez la **moyenne des commentaires** de chaque restaurant (qui va de 1 à 5 étoiles).
2. Lorsqu'on clique sur un restaurant, la **liste des avis enregistrés** s'affiche avec les commentaires. 
Affichez aussi la **photo Google Street View** grâce à l'API correspondante.
Récupérer les informations de mes objets item, toutes les informations sont accessibles.
3. Rendre le **filtre sur la moyenne de note des restaurants fonctionnel** et mettre la carte à jour en temps réel. 
4. Permettre l'**ajout d'un avis** sur un restaurant existant.
Objet Comments à coder.
5. Permettre l'**ajout d'un restaurant**, en cliquant sur un lieu spécifique de la carte.
Modification de marker.
6. **Supprimer le marker géoloc** si on fait une recherche autocomplete dans la même zone.


<!-- //====== AJOUTER DES MARKERS
  function addMarker(position, map) {
    const marker = new google.maps.Marker({
      position,
      map,
      draggable: true
    })
  }
  map.addListener('click', function(event){
    addMarker(event.latLng, map)
  }) -->


<!--  dans nearbySearch passer contour de la fenêtre à la place d' item
utiliser un bouton pour supprimer et recharger les nouveaux items via getcenter ?

sidebar => google pogressif web app
this.itemNode = document.querySelector('.item--template').cloneNode(true);
var self = this;

self.itemNode.classList.remove('item--template');
self.itemNode.removeAttribute('hidden');
self.itemNode.querySelector('.item__name').textContent = self.name;
self.itemNode.querySelector('.item__adress').textContent = self.address;
self.itemNode.querySelector('.item__stars').textContent = self.rating;

filtre
-->
