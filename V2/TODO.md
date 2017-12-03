1. Afficher les restaurants visibles sur la carte sous forme de **liste sur le côté gauche**. => OK
Chaques restaurants doit avoir un numéro (1/2/3/4/...) correspondant à ça position sur la sidebar. => place_id = marker_id
Affichez la **moyenne des commentaires** de chaque restaurant (qui va de 1 à 5 étoiles). => OK

2. Lorsqu'on clique sur un restaurant, la **liste des avis enregistrés** s'affiche avec les commentaires. => OK
Affichez aussi la **photo Google Street View** grâce à l'API correspondante. => OK

3. Rendre le **filtre sur la moyenne de note des restaurants fonctionnel** et mettre la carte à jour en temps réel. => OK

4. Permettre l'**ajout d'un avis** sur un restaurant existant. => OK

5. Permettre l'**ajout d'un restaurant**, en cliquant sur un lieu spécifique de la carte. => OK


<!-- filtre photo, Item.js l-75 

	// if (!imageElm[0]) {
    //   var imgElm = document.createElement('img');
    //   imgElm.className = "classImage";
    //   imgElm.src = self.photos;
    //   self.itemNode.appendChild(imgElm);
    //   console.log(`imageElm appendChild :` , imageElm);
    // }
    //console.log(`typeof :` , typeof(imageElm)); -->
