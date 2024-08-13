import { Component } from '@angular/core';

@Component({
  selector: 'app-trouver-sa-formation',
  templateUrl: './trouver-sa-formation.component.html',
  styleUrl: './trouver-sa-formation.component.css'
})
export class TrouverSaFormationComponent {

}
// TypeScript Code

// Sélectionner les éléments nécessaires
const tabItems = document.querySelectorAll<HTMLDivElement>('.search-header-item');
const searchSection = document.querySelector<HTMLDivElement>('.search-section');
const searchForm = document.querySelector<HTMLDivElement>('.search-form');
const searchResult = document.querySelector<HTMLDivElement>('.search-result');

if (tabItems && searchSection && searchForm && searchResult) {
  tabItems.forEach((item) => {
    item.addEventListener('click', () => {
      // Supprime la classe active de tous les onglets
      tabItems.forEach((tab) => tab.classList.remove('active'));

      // Ajoute la classe active à l'onglet cliqué
      item.classList.add('active');

      // Gérer l'affichage en fonction de l'onglet sélectionné
      if (item.textContent?.trim() === 'Par nom') {
        searchForm.style.display = 'flex';
        searchResult.style.display = 'block';
      } else if (item.textContent?.trim() === 'Par métier') {
        // Si l'onglet "Par métier" est sélectionné, vous pouvez ajuster le contenu affiché
        searchForm.style.display = 'none';
        searchResult.style.display = 'none';
        // Logique supplémentaire pour afficher le contenu "Par métier" ici
      }
    });
  });
}


