import { Component } from '@angular/core';

@Component({
  selector: 'app-trouver-sa-formation',
  templateUrl: './trouver-sa-formation.component.html',
  styleUrl: '../app.component.css',
})
export class TrouverSaFormationComponent {
  // Variable qui détermine l'onglet actuellement actif
  activeTab: number = 0;
}
