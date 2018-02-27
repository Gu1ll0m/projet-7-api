# Json intégrer


1. Afficher les restaurants visibles sur la carte sous forme de **liste sur le côté gauche**. => OK

2. Chaques restaurants doit avoir un numéro (1/2/3/4/...) correspondant à ça position sur la sidebar. => place_id = marker_id

3. Affichez la **moyenne des commentaires** de chaque restaurant (qui va de 1 à 5 étoiles). => OK

4. Lorsqu'on clique sur un restaurant, la **liste des avis enregistrés** s'affiche avec les commentaires. => OK

5. Affichez aussi la **photo Google Street View** grâce à l'API correspondante. => OK

6. Rendre le **filtre sur la moyenne de note des restaurants fonctionnel** et mettre la carte à jour en temps réel. => OK

7. Permettre l'**ajout d'un avis** sur un restaurant existant. => OK

8. Permettre l'**ajout d'un restaurant**, en cliquant sur un lieu spécifique de la carte. => OK



## Points à retravailler:

1. Ajout des commentaires: il s'agit de les ajouter à une liste en html, avec une note (comme le json de l'énoncé le suggère), une fois qu'on appuie sur un bouton valider. Si ça doit prendre trop d'espace, on peut décaler la liste des commentaires avec la description du restaurant dans une modale => OK

2. De même, pour l'ajout d'un restaurant, on peut mettre en place une modale; on peut utiliser Bootstrap par exemple ou n'importe quelle librairie permettant de faire facilement des modales pour éviter les prompt qui font "hack de dernière minute" et pas "finition professionnelle". => OK

3. Intégration des 2 restaurants demandés par l'énoncé; il s'agit de s'avoir s'abstraire d'une représentation imposée pour intégrer des données de sources différentes et hétérogènes => OK

4. Représentation des notes en "étoiles" (sinon on ne parlerait pas d'étoiles dans l'énoncé), même si ce n'est pas la modification la plus importante. => OK

5. On peut aussi s'arranger pour éviter le setTimeout pour refermer les infos restaurant. (un bouton croix en haut à gauche? On referme au clic sur le titre si c'est déjà ouvert... ?) => OK

6. Undefined quand on ajoute un restaurant! => OK




