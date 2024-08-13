import { Component } from '@angular/core';

@Component({
  selector: 'app-choix-seconde',
  templateUrl: './choix-seconde.component.html',
  styleUrl: './choix-seconde.component.css'
})
export class ChoixSecondeComponent {

}
function openTab(x: number): void {
  // Sélectionne tous les éléments avec la classe "search-form"
  const contents = document.querySelectorAll<HTMLElement>(".search-form");

  // Parcourt tous les éléments et les cache
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  // Affiche l'élément correspondant à l'indice x
  if (contents[x]) {
    contents[x].style.display = "block";
  }
}
