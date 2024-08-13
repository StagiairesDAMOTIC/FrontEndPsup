import { Component } from '@angular/core';

@Component({
  selector: 'app-trouver-sa-formation',
  templateUrl: './trouver-sa-formation.component.html',
  styleUrl: './trouver-sa-formation.component.css'
})
export class TrouverSaFormationComponent {
  activeTab: number = 0; // Onglet par défaut, affichera le premier onglet

  openTab(tabIndex: number): void {
    this.activeTab = tabIndex;
  }
}
// TypeScript Code
function openTab(x: number): void {
  // Sélectionne tous les éléments avec la classe "search-form"
  const contents = document.querySelectorAll<HTMLElement>(".search-form");

  // Parcourt tous les éléments et les cache
  contents.forEach((content, index) => {
    content.style.display = index === x ? "block" : "none";
  });

  // Gestion de l'état actif des onglets
  const buttons = document.querySelectorAll<HTMLButtonElement>(".search-header-item");
  buttons.forEach((button, index) => {
    if (index === x) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  openTab(0); // Affiche le premier onglet au chargement
});


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
