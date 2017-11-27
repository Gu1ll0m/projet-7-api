1. Afficher les restaurants visibles sur la carte sous forme de **liste sur le côté gauche**. => OK
Chaques restaurants doit avoir un numéro (1/2/3/4/...) correspondant à ça position sur la sidebar. => place_id = marker_id
Affichez la **moyenne des commentaires** de chaque restaurant (qui va de 1 à 5 étoiles). => OK

2. Lorsqu'on clique sur un restaurant, la **liste des avis enregistrés** s'affiche avec les commentaires. => OK
Affichez aussi la **photo Google Street View** grâce à l'API correspondante. => OK

3. Rendre le **filtre sur la moyenne de note des restaurants fonctionnel** et mettre la carte à jour en temps réel. => OK mais flitre à améliorer

4. Permettre l'**ajout d'un avis** sur un restaurant existant. => Objet Comments à coder.

5. Permettre l'**ajout d'un restaurant**, en cliquant sur un lieu spécifique de la carte. => à dev
Modification de marker. => à dev


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
  }) 

-->



<!-- filtre 
En partie fonctionnel, ne filtre pas précisément les éléments.
A retravailler -->

<!-- 
pour vider une div => document.getElementById('madiv').innerHTML = "";
-->


