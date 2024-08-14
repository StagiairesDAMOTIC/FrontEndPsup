import { Component } from '@angular/core';

@Component({
  selector: 'app-encadre-de-presentation',
  templateUrl: './encadre-de-presentation.component.html',
  styleUrl: '../app.component.css',
})
export class EncadreDePresentationComponent {
  // Variable qui détermine l'onglet actuellement actif
  activeTab: number = 0;
}
